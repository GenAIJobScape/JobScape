import Card from './Card';
import type { CardProps } from './Card';

interface CardGridProps {
  cards: CardProps[];
}

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <div className=" grid grid-cols-3 gap-[84px]">
      {cards.map((c) => (
        <Card key={c.number} {...c} />
      ))}
    </div>
  );
}
