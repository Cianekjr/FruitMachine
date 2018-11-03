class Statistics {
  constructor() {
    this.gameResults = [];

  }
  addGameToStatistics(win, bid) {
    let gameResult = {
      win,
      bid,
    }
    this.gameResults.push(gameResult);
  }
  showGameStatistics() {
    let plays = this.gameResults.length;
    let wins = this.gameResults.filter(result => result.win).length;
    let losses = this.gameResults.filter(result => !result.win).length;
    return [plays, wins, losses]
  }
}