import CardClass from "./Card";

const rankValues: Record<string, number> = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
};

class PokerHand {
  public hand: CardClass[];
  constructor(hand: CardClass[]) {
    this.hand = hand;
  }
  public getOutcome = () => {
    const rankCounts: Record<string, number> = {};
    const suitCounts: Record<string, number> = {};

    for (const card of this.hand) {
      const rank = card.rank;
      const suit = card.suit;

      rankCounts[rank] = (rankCounts[rank] || 0) + 1;
      suitCounts[suit] = (suitCounts[suit] || 0) + 1;
    }

    const resultCounts = Object.values(rankCounts);
    const resultSuits = Object.values(suitCounts);

    const numericRanks = this.hand.map((card) => rankValues[card.rank]).sort((a, b) => a - b);

    const isFlush = resultSuits.includes(5);
    const isNormalStraight = numericRanks[4] - numericRanks[0] === 4 && resultCounts.length === 5;

    const isAceLowStraight = numericRanks.join(",") === "2,3,4,5,14";
    const isStraight = isNormalStraight || isAceLowStraight;

    if (isNormalStraight && isFlush && numericRanks[0] === 10) return "РОЯЛ-ФЛЕШ";
    if (isNormalStraight && isFlush) return "СТРИТ-ФЛЕШ";

    if (resultCounts.includes(4)) return "КАРЕ";
    if (resultCounts.includes(3) && resultCounts.includes(2)) return "ФУЛЛ ХАУС";

    if (isFlush) return "ФЛЕШ";
    if (isStraight) return "СТРИТ";
    if (resultCounts.includes(3)) return "ТРОЙКА";

    const allPairs = resultCounts.filter((number) => number === 2);
    if (allPairs.length === 2) return "ДВЕ ПАРЫ";
    if (allPairs.length === 1) return "ПАРА";

    return "СТАРШАЯ КАРТА";
  };
}
