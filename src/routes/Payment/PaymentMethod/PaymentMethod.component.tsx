type PaymentMethodProps = {
  id: string;
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
};

const PaymentMethod = ({
  id,
  title,
  description,
  icon,
  selected,
  onClick
}: PaymentMethodProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-colors duration-300 ${
      selected
        ? "border-primary bg-primary/5"
        : "border-gray-200 hover:border-primary/50"
    }`}
  >
    <img src={icon} alt={title} className="w-12 h-12" />
    <div className="text-left">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </button>
);

export default PaymentMethod; 