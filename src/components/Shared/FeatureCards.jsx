import { Fragment } from "react";
import { cards } from "../../Data/sharedData";
import Card from "./Card";
import Pattern from "./Pattern";

export default function FeatureCards() {
  return (
    <div className="class-features">
      <Pattern
        patternWrapper={"classPatternWrapper"}
        pattern={"classPattern"}
      />
      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {cards.map((card) => (
          <Card
            key={card.id}
            cardName={card.name}
            cardDescription={card.des}
            src={card.src}
            alt={card.alt}
          />
        ))}
      </div>
      <Pattern
        patternWrapper={"classPatternWrapper"}
        pattern={"classPattern"}
      />
    </div>
  );
}