class Draw {
  constructor() {
    this.options = ['img/cherry.jpg', 'img/lemon.jpg', 'img/plum.jpg'];
    let _result = this.drawResult();
    this.getDrawResult = () => _result;
  }

  drawResult() {
    let fruits = [];
    for (let option of this.options) {
      const index = Math.floor(Math.random() * this.options.length);
      const fruit = this.options[index];
      fruits.push(fruit);
    }
    return fruits;
  }
}