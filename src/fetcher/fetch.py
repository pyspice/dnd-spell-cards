import urllib.request
from bs4 import BeautifulSoup
import argparse


def parse_spell_description(soup):

    # Поиск контейнера описания заклинания
    container = soup.find("div", {"class": "paper-1 card active"})
    card_wrapper = container.find("div", {"class": "card-wrapper"})
    card_header = card_wrapper.find("div", {"class": "card-header"})
    card_body = card_wrapper.find("div", {"class": "card-body"})

    spell_description = '''  {
        '''

    # Разбор имени заклинания вида "Имя заклинания [Spell name]"
    name_text = card_header.h2.span.text
    name = name_text.split("[")[0].strip()
    spell_description += f'''name: "{name}",
        '''

    print(name)

    # Разбор атрибутов заклинания
    # Атрибуты отображаются с помощью маркированного списка ul, каждый атрибут - отдельный li
    #
    # Атрибуты располагаются в следующем порядке:
    # 0) Уровень, школа и ритуал
    # 1) Время накладывания
    # 2) Дистанция
    # 3) Компоненты
    # 4) Длительность
    # *? (опционально) Классы
    # *? (опционально) Архетипы
    # -2) Источник
    # -1) Текст
    li_attributes = card_body.ul.contents

    # 0) Уровень, школа и ритуал
    school_dict = {'ограждение': 'abjuration', 'вызов': 'conjuration', 'прорицание': 'divination', 'очарование': 'enchantment', 'воплощение': 'evocation',
                   'иллюзия': 'illusion', 'некромантия': 'necromancy', 'преобразование': 'transmutation', 'господство': 'dominance'}

    level_school_text = li_attributes[0].text
    if level_school_text.startswith("Заговор"):
        level = 0
        school_text = level_school_text.split("Заговор,")[1].strip()
    else:
        level = int(level_school_text[0])
        school_text = level_school_text.split("уровень,")[1].strip()
    spell_description += f'''level: {level},
        '''

    # school_text.split()[0] для обработки уточнений, например, "прорицание (ритуал, дюнамантия)"
    school = school_dict[school_text.split()[0].strip()]
    spell_description += f'''school: SpellSchool.{school},
        '''

    if "ритуал" in school_text:
        spell_description += f'''ritual: true,
        '''

    # 1) Время накладывания
    casting_time = li_attributes[1].contents[1].split(",")[0].strip()
    spell_description += f'''castingTime: "{casting_time}",
        '''

    # 2) Дистанция
    distance = li_attributes[2].contents[1].strip()
    spell_description += f'''range: "{distance}",
        '''

    # 3) Компоненты
    components_text = li_attributes[3].contents[1].strip()
    has_material_component = "(" in components_text
    if has_material_component:
        spl = components_text.split("(")
        components = list(map(str.strip, spl[0].split(",")))
        material_component = spl[1].split(")")[0].strip()
        if material_component.split()[0] == "А":
            material_component = material_component[2:] + \
                " (авторские отчисления)"
    else:
        components = components_text.split(", ")
    has_verbal_component = "В" in components
    has_somatic_component = "С" in components

    if has_verbal_component:
        spell_description += f'''hasVerbalComponent: true,
        '''
    if has_somatic_component:
        spell_description += f'''hasSomaticComponent: true,
        '''
    if has_material_component:
        spell_description += f'''materialComponent: "{material_component}",
        '''

    # 4) Длительность
    duration = li_attributes[4].contents[1].strip()
    if duration.startswith("Концентрация,"):
        max_duration = duration.split(",")[1].strip()
        duration = f'''(
        <>
            Концентрация,
            <br />
            {max_duration}
        </>
        )'''

        spell_description += f'''duration: {duration},
        '''
    else:
        spell_description += f'''duration: "{duration}",
        '''

    # -1) Текст
    text_ps = li_attributes[-1].div.find_all("p", recursive=False)
    text = '''(
        <>
            '''
    for p in text_ps:
        if len(p.text) == 0:
            continue
        text += "<p>"
        for node in p.contents:
            if node.name == "span":
                text += node.text
            else:
                text += str(node)
        text += '</p>\n'
    text += '''      </>
        )'''

    spell_description += f'''description: {text},
        '''
    spell_description += "},"

    return spell_description


def fetch_spell_description(url):

    # Загрузка и разбор html страницы с заклинанием
    r = urllib.request.urlopen(url)
    html = r.read()
    soup = BeautifulSoup(html, "html.parser")

    return parse_spell_description(soup)


def create_spellbook(file_name, spell_urls):
    spell_descriptions = map(fetch_spell_description, spell_urls)

    with open(file_name, "w", encoding="utf-8") as f:
        f.write("[\n")
        for desc in spell_descriptions:
            f.write(desc)
        f.write("\n]")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", dest="file", type=str,
                        help="Destination file path", required=True)
    parser.add_argument('urls', metavar='url', type=str,
                        nargs='+', help='Spell urls list')

    args = parser.parse_args()
    create_spellbook(args.file, args.urls)
