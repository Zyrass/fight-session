class Mob {
  _name;
  _avatar;
  _gold;
  _experience;
  _type;
  _level;
  _life;
  _strong;

  // Constructor
  constructor(name, avatar, type) {
    this._name = name;
    this._avatar = avatar;
    this._type = type;

    switch (type) {
      case "normal":
        this._level = Math.floor(Math.random() * (25 - 1 + 1)) + 1;
        this._gold = Math.floor(this._level / 2 + 1);
        this._experience = Math.floor(this._level / 2 + 5);
        this._life = Math.floor(this._level * 2 + 25);
        this._strong = Math.floor(this._level / 2 + 10);
        break;

      case "elite":
        this._level = parseInt(Math.floor(Math.random() * (50 - 26 + 1)) + 26);
        this._gold = Math.floor(this._level / 2 + 8);
        this._experience = Math.floor(this._level / 2 + 16);
        this._life = Math.floor(this._level * 2 + 50);
        this._strong = Math.floor(this._level / 2 + 26);
        break;

      case "boss":
        this._level = parseInt(Math.floor(Math.random() * (75 - 51 + 1)) + 51);
        this._gold = Math.floor(this._level / 2 + 16);
        this._experience = Math.floor(this._level / 2 + 32);
        this._life = Math.floor(this._level * 2 + 75);
        this._strong = Math.floor(this._level / 2 + 51);
        break;

      default:
        break;
    }

    // this._level = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    // this.life =
    //   Math.floor(Math.random() * (this._level * 5 - this._level * 2.5 + 1)) +
    //   Math.floor(this._level * 2.5);
    // this._strong =
    //   Math.floor(Math.random() * (this._level * 2.5 - this._level + 1)) +
    //   this._level;
  }

  /**
   * GETTERS
   */
  get name() {
    return this._name;
  }
  get avatar() {
    return this._avatar;
  }
  get gold() {
    return this._gold;
  }
  get experience() {
    return this._experience;
  }
  get type() {
    return this._type;
  }
  get level() {
    return this._level;
  }
  get life() {
    return this._life;
  }
  get strong() {
    return this._strong;
  }

  /**
   * SETTERS
   */
  set name(newValue) {
    if (newValue.length <= 11) {
      this._name = newValue.replace(" ", "_");
    }
  }
  set urlAvatar(newAvatar) {
    this._avatar = newAvatar;
  }
  set gold(newGold) {
    if (typeof newGold === "number") {
      this._gold = newGold;
    }
  }
  set experience(newExperience) {
    if (typeof newExperience === "number") {
      this._experience = newExperience;
    }
  }
  set level(newLevel = 1) {
    if (typeof newLevel === "number") {
      this._level = parseInt(newLevel);
    }
  }
  set life(newLife) {
    if (typeof newLife === "number") {
      this._life = parseInt(newLife);
    }
  }
  set strong(newStrong) {
    if (typeof newLife === "number") {
      this._strong = parseInt(newStrong);
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
}

export default Mob;
