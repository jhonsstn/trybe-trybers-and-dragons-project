import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(playerOne: Fighter, private playerTwo: Fighter) {
    super(playerOne);
  }

  fight(): number {
    let winner = 0;
    for (let i = 0; i < 3; i += 1) {
      this.player.attack(this.playerTwo);
      if (this.playerTwo.lifePoints === -1) {
        winner = 1;
        break;
      }
      this.playerTwo.attack(this.player);
      if (this.player.lifePoints === -1) {
        winner = -1;
        break;
      }
    }
    return winner;
  }
}
