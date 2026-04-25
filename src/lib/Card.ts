export type Rank = | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
export type Suit = "diams" | "hearts" | "clubs" | "spades";

class CardClass {
    public rank: Rank;
    public suit: Suit;
  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

export default CardClass;
