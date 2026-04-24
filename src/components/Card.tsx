import "cards.css";

type Rank = | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A";
type Suit = "diams" | "hearts" | "clubs" | "spades";

interface IcardProps {
  rank: Rank;
  suit: Suit;
}

const symbols: Record<string, string> = {
  diams: "♦",
  hearts: "♥",
  clubs: "♣",
  spades: "♠",
};

const Card = (props: IcardProps) => {
  return (
    <span
      className={`card rank-${props.rank.toString().toLowerCase()} ${props.suit}`}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{symbols[props.suit]}</span>
    </span>
  );
};

export default Card;
