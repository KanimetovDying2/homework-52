import Card from "./Card";
import type { Rank, Suit } from "./Card";

class CardDeck {
  public cards: Card[] = [];
  constructor() {
    const ranks: Rank[] = ["2","3","4","5","6","7","8","9","10","J","Q","K","A",];
    const suits: Suit[] = ["diams", "hearts", "clubs", "spades"];
    for (const suit of suits) {
      for (const rank of ranks) {
        const newCard = new Card(rank, suit);
        this.cards.push(newCard);
      }
    }
  }

  public getCard(): Card {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(randomIndex, 1)[0];
  }

  public getCards(howMany: number): Card[] {
    const box: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      box.push(card)
    }
  return box
  }
}

export default CardDeck;
