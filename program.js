// Classes
import ListMob from "./scripts/listMob.js";
import Player from "./scripts/class/Player.class.js";

// DOM
// const sectionFormulaire = document.getElementById("formulaire");
// const sectionCombat = document.getElementById("combat");
// const inputPseudo = document.getElementById("pseudo");
// const btnNewPseudo = document.getElementById("buttonNewPseudo");
// const avatars = document.querySelectorAll(".avatars figure img");

// DOM COMBAT LEFT
// const playerh3 = document.querySelector("#combat .left .card h3");
// const playerLifeBar = document.querySelector(
//   "#combat .left .card .stats .lifebar progress"
// );
// const playerAvatar = document.querySelector("#combat .left .card");

/**
 * ================================================================
 * FORMULAIRE
 * ================================================================
 */
// let pseudo;
// let avatar;
// let type;

// btnNewPseudo.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (inputPseudo.value.length <= 11) {
//     pseudo = inputPseudo.value;
//   }

//   avatars.forEach((currentAvatar) => {
//     currentAvatar.addEventListener("click", (e) => {
//       avatar = e.target.attributes[0].nodeValue;
//       type = e.target.id;
//     });
//   });

//   if (
//     pseudo.length > 3 &&
//     pseudo.length <= 11 &&
//     avatar !== undefined &&
//     type !== undefined
//   ) {
//     // Instanciation du player
//     const newPlayer = new Player(pseudo, avatar, type);
//     console.log(newPlayer);

//     sectionFormulaire.style.display = "none";
//     sectionCombat.style.display = "block";

//     localStorage.setItem("pseudo", newPlayer.pseudo);
//     localStorage.setItem("avatar", newPlayer.avatar);
//     localStorage.setItem("type", newPlayer.type);
//     localStorage.setItem("lifeMax", newPlayer.life);
//     localStorage.setItem("strong", newPlayer.strong);
//     localStorage.setItem("gold", newPlayer.gold);
//     localStorage.setItem("experience", newPlayer.experience);
//     localStorage.setItem("inventory", newPlayer.inventory);
//     localStorage.setItem("weapon", newPlayer.weapon);
//   }
// });

/**
 * ================================================================
 * FIGHT
 * ================================================================
 */
// if (localStorage.getItem("pseudo")) {
//   sectionFormulaire.style.display = "none";
//   sectionCombat.style.display = "block";

//   playerh3.textContent = localStorage.getItem("pseudo");
//   playerLifeBar.setAttribute("max", localStorage.getItem("lifeMax"));
//   console.log(playerLifeBar);
//   console.log(playerh3);
//   playerAvatar.style.backgroundImage = `url(${localStorage.getItem("avatar")})`;
//   console.log(playerAvatar.style.backgroundImage);
// } else if (!localStorage.getItem("pseudo")) {
//   sectionFormulaire.style.display = "block";
//   sectionCombat.style.display = "none";
// }
