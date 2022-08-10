import Archetype, { Mage } from './Archetypes/index';
import Energy from './Energy';
import Fighter from './Fighter';
import SimpleFighter from './Fighter/SimpleFighter';
import Race, { Elf } from './Races/index';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _dexterity: number = getRandomInt(1, 10);
  private _race: Race = new Elf(this._name, this._dexterity);
  private _archetype: Archetype = new Mage(this._name);
  private _maxLifePoints: number = this._race.maxLifePoints / 2;
  private _lifePoints: number = this._maxLifePoints;
  private _strength: number = getRandomInt(1, 10);
  private _defense: number = getRandomInt(1, 10);
  private _energy: Energy = {
    type_: this._archetype.energyType,
    amount: getRandomInt(1, 10),
  };

  constructor(private _name: string) {}

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const defensePoints = this.defense;
    const damage = attackPoints - defensePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }
    const lifePoints = this._lifePoints;
    return lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    const attackPoints = this.strength;
    enemy.receiveDamage(attackPoints);
  }

  levelUp(): void {
    const value = getRandomInt(1, 10);
    this._maxLifePoints += value;
    this._strength += value;
    this._dexterity += value;
    this._defense += value;
    this._energy.amount = 10;
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}
