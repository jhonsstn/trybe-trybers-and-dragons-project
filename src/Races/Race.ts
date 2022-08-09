export default abstract class Race {
  private static _instances: number;
  constructor(private _name: string, private _dexterity: number) {
    Race._instances += 1;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}