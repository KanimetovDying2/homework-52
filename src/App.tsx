import { useState } from "react";
import CardDeck from "./lib/CardDeck";
import CardClass from "./lib/Card";
import CardView from "./components/Card";
import "./App.css";

const App = () => {
  const [cardBox, setCardBox] = useState<CardClass[]>([]);

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
            <CardView key={index} rank={card.rank} suit={card.suit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
