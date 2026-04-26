import { useState } from "react";
import CardDeck from "./lib/CardDeck";
import CardClass from "./lib/Card";
import PokerHand from "./lib/PokerHand";
import CardView from "./components/Card";
import "./App.css";

const App = () => {
  const [selectedByUser, setSelectedByUser] = useState<number[]>([]);
  const [deck, setDeck] = useState<CardDeck | null>(null);
  const [cardBox, setCardBox] = useState<CardClass[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const cardsFromDeck = deck.getCards(5);
    setCardBox(cardsFromDeck);
    setDeck(deck);
    setSelectedByUser([]);
  };

  const toggleSelection = (index: number) => {
    if (selectedByUser.includes(index)) {
      setSelectedByUser(selectedByUser.filter((i) => i !== index));
    } else {
      setSelectedByUser([...selectedByUser, index]);
    }
  };

  const replaceCards = () => {
    if (!deck || selectedByUser.length === 0) return;
    const newHand = [...cardBox];
    selectedByUser.forEach((index) => {
      newHand[index] = deck.getCard();
    });
    setCardBox(newHand);
    setSelectedByUser([]);
  };

  return (
    <div className="app">
      <div className="controls">
        <button className="btn-main" onClick={dealCards}>
          Раздать карты
        </button>

        <button className="btn-main replace-btn" onClick={replaceCards} disabled={selectedByUser.length === 0}>
          Заменить выбранные ({selectedByUser.length})
        </button>
      </div>

      {cardBox.length > 0 && (
        <div className="outcome-display">
          <h2 className="outcome-text">
            {new PokerHand(cardBox).getOutcome()}
          </h2>
        </div>
      )}

      {cardBox.length > 0 && (
        <div className="playingCards faceImages">
          {cardBox.map((card, index) => (
            <div
              key={index}
              className={`card-wrapper ${selectedByUser.includes(index) ? "selected" : ""}`}
              onClick={() => toggleSelection(index)}>
              <CardView rank={card.rank} suit={card.suit} />
              <input
                type="checkbox"
                checked={selectedByUser.includes(index)}
                readOnly
                className="hidden-checkbox"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
