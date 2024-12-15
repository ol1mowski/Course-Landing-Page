import { OFFER_DETAILS } from "../../../../data/Offer.data";
import clsx from 'clsx';

type PriceRowProps = {
  label: string;
  value: number;
  isBold?: boolean;
  isStrikethrough?: boolean;
  className?: string;
};

const PriceRow = ({ 
  label, 
  value, 
  isBold, 
  isStrikethrough,
  className 
}: PriceRowProps) => (
  <div className={clsx(
    "flex justify-between",
    isBold && "font-bold",
    className
  )}>
    <span>{label}</span>
    <span className={clsx(isStrikethrough && "line-through")}>
      {value} {OFFER_DETAILS.currency}
    </span>
  </div>
);

export default PriceRow; 