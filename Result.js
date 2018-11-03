class Result {
  static moneyWonInGame(result, bid) {
    if (result) return 3 * bid;
    return 0;
  }
  static checkWinner(draw) {
    if (draw[0] === draw[1] && draw[1] === draw[2] || draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2]) return true;
    return false;
  }
}