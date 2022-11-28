class Player {
  _pseudo;
  _avatar;
  _type;
  _life;
  _strong;
  _weapon;
  _inventory = {};
  _level = 1;
  _experience = 0;
  _gold = 0;
  _series = 0;

  // Constructor
  constructor(pseudo, avatar, type) {
    this._pseudo = pseudo;
    this._avatar = avatar;
    this._type = type;

    switch (type) {
      case "archere":
        this._life = 100;
        this._strong = Math.floor(this._life / 4);
        this._weapon = "arc";
        break;
      case "assassin":
        this._life = 80;
        this._strong = Math.floor(this._life / 3);
        this._weapon = "dagues";
        break;
      case "astrologue":
        this._life = 120;
        this._strong = Math.floor(this._life / 5);
        this._weapon = "cartes";
        break;
      case "barde":
        this._life = 125;
        this._strong = Math.floor(this._life / 4.8);
        this._weapon = "harpe";
        break;
      case "guerrier":
        this._life = 90;
        this._strong = Math.floor(this._life / 3.5);
        this._weapon = "hache";
        break;
      case "invocateur":
        this._life = 150;
        this._strong = Math.floor(this._life / 6);
        this._weapon = "livre ancien";
        break;
      case "mage":
        this._life = 80;
        this._strong = Math.floor(this._life / 2.9);
        this._weapon = "bâton";
        break;
      case "ninja":
        this._life = 90;
        this._strong = Math.floor(this._life / 3.4);
        this._weapon = "shuriken";
        break;
      case "soigneur":
        this._life = 180;
        this._strong = Math.floor(this._life / 7);
        this._weapon = "sceptre";
        break;
      default:
        this._life = 50;
        this._strong = Math.floor(this._life / 2);
        this._weapon = "poing";
        break;
    }
  }
  /**
   * GETTERS
   */
  get pseudo() {
    return this._pseudo;
  }
  get avatar() {
    return this._avatar;
  }
  get type() {
    return this._type;
  }
  get life() {
    return this._life;
  }
  get strong() {
    return this._strong;
  }
  get weapon() {
    return this._weapon;
  }
  get inventory() {
    return this._inventory;
  }
  get level() {
    return this._level;
  }
  get experience() {
    return this._experience;
  }
  get gold() {
    return this._gold;
  }
  get series() {
    return this._series;
  }
  get pseudo() {
    return this._pseudo;
  }
  get avatar() {
    return this._avatar;
  }
  get type() {
    return this._type;
  }
  get life() {
    return this._life;
  }
  get strong() {
    return this._strong;
  }
  get weapon() {
    return this._weapon;
  }
  get inventory() {
    return this._inventory;
  }
  get level() {
    return this._level;
  }
  get experience() {
    return this._experience;
  }
  get gold() {
    return this._gold;
  }
  get series() {
    return this._series;
  }

  /**
   * SETTERS
   */
  set pseudo(newPseudo) {
    if (typeof newPseudo === "string") {
      this._pseudo = newPseudo;
    }
  }
  set avatar(newAvatar) {
    if (typeof newAvatar === "string") {
      this._avatar = newAvatar;
    }
  }
  set life(newLife) {
    if (typeof newLife === "number") {
      this._life = newLife;
    }
  }
  set strong(newStrong) {
    if (typeof newStrong === "number") {
      this._strong = newStrong;
    }
  }
  set level(newLevel) {
    if (typeof newLevel === "number") {
      this._level = newLevel;
    }
  }
  set experience(newExperience) {
    if (typeof newExperience === "number") {
      this._experience = newExperience;
    }
  }
  set gold(newGold) {
    if (typeof newGold === "number") {
      this._gold = newGold;
    }
  }
  set series(newSeries) {
    if (typeof newSeries === "number") {
      this._series = newSeries;
    }
  }

  /**
   * METHODS
   */
  attack() {
    if (this._type) {
      /**
       * 1 - Je prends la force qui aura été généré au départ pour obtenir le max
       * 2 - Je soustrais la force que je divise par 2 pour obtenir le minimum
       * 3 - Je rajoute + 1
       * 4 - Enfin je rajoute le nombre minimum que j'ai obtenu
       */
      return (
        Math.floor(
          Math.random() * (this._strong - Math.floor(this._strong / 2) + 1)
        ) + Math.floor(this._strong / 2)
      );
    }
  }

  levelUp() {
    this._level += 1;
    this._life += this._life / 2;
    this._strong += this._strong + 5;
  }

  win() {
    this._series += 1;
  }
}

export default Player;
