import { SpellSchool } from "./SpellSchool";
import { Theme } from "./Theme";

export const Colors = {
  [Theme.dark]: {
    bg: "rgb(16, 21, 27)",
    text: "aliceblue",
    [SpellSchool.abjuration]: "rgb(0, 0, 242)",
    [SpellSchool.conjuration]: "rgb(242, 172, 40)",
    [SpellSchool.divination]: "rgb(211, 255, 255)",
    [SpellSchool.enchantment]: "rgb(240, 168, 224)",
    [SpellSchool.evocation]: "rgb(200, 16, 11)",
    [SpellSchool.illusion]: "rgb(187, 114, 252)",
    [SpellSchool.necromancy]: "rgb(119, 154, 116)",
    [SpellSchool.transmutation]: "rgb(255, 251, 62)",
    [SpellSchool.dominance]: "white",
  },
  [Theme.light]: {
    bg: "white",
    text: "rgb(16, 21, 27)",
    [SpellSchool.abjuration]: "rgb(0, 0, 242)",
    [SpellSchool.conjuration]: "rgb(242, 172, 40)",
    [SpellSchool.divination]: "rgb(168, 219, 219)",
    [SpellSchool.enchantment]: "rgb(226, 135, 205)",
    [SpellSchool.evocation]: "rgb(200, 16, 11)",
    [SpellSchool.illusion]: "rgb(187, 114, 252)",
    [SpellSchool.necromancy]: "rgb(119, 154, 116)",
    [SpellSchool.transmutation]: "rgb(143, 100, 53)",
    [SpellSchool.dominance]: "black",
  },
};
