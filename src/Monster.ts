import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints = 85;
  private _strength = 63;

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    const lifePoints = this._lifePoints;
    return lifePoints;
  }

  attack(target: SimpleFighter | Fighter): void {
    const attackPoints = this.strength;
    target.receiveDamage(attackPoints);
  }
}