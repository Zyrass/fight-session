// Class requises
import Mob from "./class/Mob.class.js";

/**
 * New MOB
 */
const AbeilleWhite2 = new Mob("Abeille_White", "abeille_white", "normal");
const LapinElite = new Mob("Lapin_Elite", "lapin_elite", "elite");
const CerfBoss = new Mob("Cerf_Boss", "cerf_boss", "boss");

console.table({
  normal_LVL: AbeilleWhite2.level,
  normal_GOLD: AbeilleWhite2.gold,
  normal_EXPERIENCE: AbeilleWhite2.experience,
  normal_LIFE: AbeilleWhite2.life,
  normal_STRONG: AbeilleWhite2.strong,
  normal_ATK: AbeilleWhite2.attack(),
});
// console.table({
//   elite_LVL: LapinElite.level,
//   elite_GOLD: LapinElite.gold,
//   elite_EXPERIENCE: LapinElite.experience,
//   elite_LIFE: LapinElite.life,
//   elite_STRONG: LapinElite.strong,
//   elite_ATK: LapinElite.attack(),
// });
// console.table({
//   boss_LVL: CerfBoss.level,
//   boss_GOLD: CerfBoss.gold,
//   boss_EXPERIENCE: CerfBoss.experience,
//   boss_LIFE: CerfBoss.life,
//   boss_STRONG: CerfBoss.strong,
//   boss_ATK: CerfBoss.attack(),
// });

// console.table([AbeilleWhite, LapinElite, CerfBoss]);
const ListMob = {
  normal: [AbeilleWhite2],
  elite: [LapinElite],
  boss: [CerfBoss],
};

export default ListMob;
