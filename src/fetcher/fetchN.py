import urllib.request
from bs4 import BeautifulSoup
import argparse
import fetch


def fetch_spell_urls(N):
    if N is None:
        N = -1

    r = urllib.request.urlopen("https://dnd.su/spells/")
    html = r.read()
    soup = BeautifulSoup(html, "html.parser")

    container = soup.find("div", {"class": "grid-4_lg-3_md-2_xs-1 list"})
    spells = container.find_all("div", {"class": "col list-item__spell for_filter"})
    urls = []
    for spell in spells:
        if N == 0:
            break

        spellUrl = "https://dnd.su" + spell.a["href"]
        urls.append(spellUrl)
        N -= 1

    return urls

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", dest="file", type=str,
                        help="Destination file path", required=True)
    parser.add_argument("-n", "--number", dest="N", nargs="?", type=int, const=10,
                        help="Number of spells to fetch")

    args = parser.parse_args()
    urls = fetch_spell_urls(args.N)
    fetch.create_spellbook(args.file, urls)
