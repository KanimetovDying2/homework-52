import { useState } from "react";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import "./App.css";

const App = () => {
  const [cardBox, setCardBox] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const cardsFromDeck = deck.getCards(5);
    setCardBox(cardsFromDeck);
  };

  return (
    <div className="app">
      <button onClick={dealCards}>Раздать карты</button>
      {cardBox.length > 0 && (
        <div className="playingCards faceImages">
          {cardBox.map((card, index) => (
            <div key={index}>
              {card.rank} {card.suit}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
