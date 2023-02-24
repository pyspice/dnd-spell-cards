import * as React from "react";
import { SpellSchool } from "./SpellSchool";

export type SpellDescription = {
  school: SpellSchool;
  name: string;
  level: number;
  ritual?: boolean;
  hasVerbalComponent?: boolean;
  hasSomaticComponent?: boolean;
  materialComponent?: string;
  range: string;
  duration: React.ReactNode;
  castingTime: string;
  description: React.ReactNode;

  fontSize?: number;
};

export const Spellbook: SpellDescription[] = [
  {
    name: "Подарок болтуна",
    level: 2,
    school: SpellSchool.enchantment,
    castingTime: "1 реакция",
    range: "На себя",
    hasVerbalComponent: true,
    hasSomaticComponent: true,
    materialComponent: "2 зм (авторские отчисления)",
    duration: "Мгновенная",
    description: (
      <>
        <p>
          <em>
            Говорят, что Джим Даркмагик изобрёл это заклинание, изначально
            назвав его «Я сказал что?»! Вы в разговоре с местным монархом
            случайно упоминули, что его сын похож на вашего любимого борова из
            тех времён, когда вы росли на семейной ферме? Мы все побывали в
            такой ситуации! Но вместо того, чтобы быть обезглавленным за честную
            оговорку, вы можете притвориться, что этого никогда не было, с
            гарантией, что никто не узнает, что это произошло.{" "}
          </em>
        </p>  
        <p>
          Когда вы накладываете это заклинание, вы умело изменяете воспоминания
          слушателей в вашем непосредственном окружении так, что каждое существо
          по вашему выбору в пределах 5 футов от вас забывает все, что вы
          сказали в течение последних 6 секунд. Затем эти существа вспоминают,
          что вы на самом деле произнесли слова, которые вы произносите как
          вербальный компонент заклинания.
        </p>
      </>
    ),
  },
  {
    name: "Психический крик",
    level: 9,
    school: SpellSchool.enchantment,
    castingTime: "1 действие",
    range: "90 футов",
    hasSomaticComponent: true,
    duration: "Мгновенная",
    description: (
      <>
        <p>
          Вы высвобождаете силу своей мысли, чтобы выжечь разум до десяти
          существ по вашему выбору, которых вы можете видеть в пределах
          дистанции. Существа, у которых Интеллект равен 2 или ниже, не попадают
          под действие этого заклинания.
        </p>
        <p>
          Каждая цель должна совершить спасбросок Интеллекта. При провале цель
          получает 14к6 урона психической энергией и становится{" "}
          <span title="condition.stunned" tooltip-for="condition.stunned">
            ошеломлённой
          </span>
          . При успехе цель получает только половину урона и не ошеломлена. Если
          этот урон убивает цель, её голова взрывается, при наличии таковой.
        </p>
        <p>
          <span title="condition.stunned" tooltip-for="condition.stunned">
            Ошеломлённая
          </span>{" "}
          цель может совершать спасбросок Интеллекта в конце каждого своего
          хода. При успехе ошеломление спадает.
        </p>
      </>
    ),
  },
];
