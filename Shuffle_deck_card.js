let cards = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values = ['Ace','King','Queen','Jack', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

let res = [];

for (let card in cards) {
  for (let value in values) {
    res.push(values[value] + ' of ' + cards[card]);
  }
}

res.sort(() => Math.random() - 0.5);

console.log(res);