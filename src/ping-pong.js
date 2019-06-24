function Card(name, image) {
  this.name = name;
  this.image = image;
}

let queenCard = new Card('Queen', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Poker-sm-213-Qs.png/170px-Poker-sm-213-Qs.png');

let kingCard = new Card('King', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Poker-sm-222-Kh.png');

let jackCard = new Card('Jack', 'https://previews.123rf.com/images/mannaggia/mannaggia0911/mannaggia091100007/5957160-jack-of-spades-playing-card.jpg');

export let cardArray = [queenCard, kingCard, jackCard, queenCard, kingCard, jackCard];

/* eslint-disable */
export function cardJumble(cardArray) {
  cardArray.sort(function (a, b) {return 0.5 - Math.random();
  });

  return cardArray;
}
/* eslint-enable */
