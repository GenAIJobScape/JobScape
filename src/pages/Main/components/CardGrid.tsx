import Card from './Card';
import type { ICardProps } from './Card';

interface ICardGridProps {
  cards: ICardProps[];
}

export default function CardGrid({ cards }: ICardGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-1 md:grid-cols-2 xl:grid-cols-3
        gap-[18px] md:gap-[26px] xl:gap-[84px]
        "
    >
      {cards.map((c) => (
        <Card key={c.number} {...c} />
      ))}
    </div>
  );
}
