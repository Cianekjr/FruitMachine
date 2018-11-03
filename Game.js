class Game {
  constructor(startMoney) {
    this.wallet = new Wallet(startMoney)
    this.stats = new Statistics()
    document.querySelector('#start').addEventListener('click', this.startGame.bind(this));
    this.ownResources = document.querySelector('.wallet');
    this.cards = [...document.querySelectorAll('.fruit')];
    this.inputBid = document.querySelector('#bid');
    this.plays = document.querySelector('.plays');
    this.wins = document.querySelector('.wins');
    this.losses = document.querySelector('.losses');
    this.result = document.querySelector('.result');
    this.render();
  }

  render(fruits = ['img/bar.jpg', 'img/bar.jpg', 'img/bar.jpg'], money = this.wallet.getWalletValue(), stats = [0, 0, 0], wonMoney = 0, bid = 0, result = '') {
    this.cards.forEach((card, index) => {
      card.style.backgroundImage = `url(${fruits[index]})`;
    })
    this.ownResources.textContent = `${money}$`;
    this.plays.textContent = stats[0];
    this.wins.textContent = stats[1];
    this.losses.textContent = stats[2];
    if (result) {
      result = `You won ${wonMoney}$`
    } else if (!result && result !== "") {
      result = `You lost ${bid}$`
    }
    this.result.textContent = result;
  }

  startGame() {
    if (this.inputBid.value < 1) return alert('Minimum bid is 1$');
    const bid = Math.floor(this.inputBid.value);
    if (!this.wallet.checkCanPlay(bid)) {
      return alert('You have not enought cash or incorrect value!');
    } else {
      this.wallet.changeWallet(bid, '-');
      this.draw = new Draw();
      const fruits = this.draw.getDrawResult();
      const win = Result.checkWinner(fruits);
      const wonMoney = Result.moneyWonInGame(win, bid);
      this.wallet.changeWallet(wonMoney);
      this.stats.addGameToStatistics(win, bid);
      this.render(fruits, this.wallet.getWalletValue(), this.stats.showGameStatistics(), wonMoney, bid, win);

      this.result.classList.add('active');
      setTimeout(() => {
        this.result.classList.remove('active')
      }, 1000)
    }
  }
}