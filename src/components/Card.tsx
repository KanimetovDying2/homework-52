import "../cards.css";
import type { Rank, Suit } from "../lib/Card";

interface IcardProps {
  rank: Rank;
  suit: Suit;
}

const symbols: Record<Suit, string> = {
  diams: "♦",
  hearts: "♥",
  clubs: "♣",
  spades: "♠",
};

const Card = (props: IcardProps) => {
  return (
    <span className={`card rank-${props.rank.toString().toLowerCase()} ${props.suit}`}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{symbols[props.suit]}</span>
    </span>
  );
};

export default Card;
