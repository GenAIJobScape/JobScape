import Card from './Card';
import type { CardProps } from './Card';

interface CardGridProps {
  cards: CardProps[];
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1 gap-[18px] 
        md:grid-cols-2 md:gap[26px] 
        xl:grid-cols-3 xl:gap-[84px]"
    >
      {cards.map((c) => (
        <Card key={c.number} {...c} />
      ))}
    </div>
  );
}
