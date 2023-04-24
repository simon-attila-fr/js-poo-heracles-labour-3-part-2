class Arena {
  constructor(size, monsters, hero) {
    this.monsters = monsters;
    this.hero = hero;
    this.size = size;
  }

  // Methods

  getDistance(fighter1, fighter2) {
    const posF1x = fighter1.x;
    const posF1y = fighter1.y;
    const posF2x = fighter2.x;
    const posF2y = fighter2.y;

    const xB_xA = posF2x - posF1x;
    const yA_yB = posF2y - posF1y;

    return Math.sqrt(Math.pow((xB_xA), 2) + Math.pow((yA_yB), 2)).toFixed(2);
  }

  isTouchable(attacker, defender) {
    const distance = this.getDistance(attacker, defender);
    if (distance <= attacker.getRange()) {
      return true;
    }
    return false;
   }
}