import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    player: Fighter,
    private environment: (Fighter | SimpleFighter)[],
  ) {
    super(player);
  }

  private turn(enemy: Fighter | SimpleFighter): number {
    let winner = 0;
    while (winner === 0) {
      this.player.attack(enemy);
      if (enemy.lifePoints === -1) {
        winner = 1;
        break;
      }
      enemy.attack(this.player);
      if (this.player.lifePoints === -1) {
        winner = -1;
        break;
      }
    }
    return winner;
  }

  fight(): number {
    let winner = 0;
    for (let i = 0; i < this.environment.length; i += 1) {
      winner = this.turn(this.environment[i]);
      if (winner === -1) break;
    }
    return winner;
  }
}
