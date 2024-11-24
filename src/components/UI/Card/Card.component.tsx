const Card = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-4 flex-col w-fit h-full transition-all duration-500 cursor-pointer items-start justify-center shadow-headerBoxShadow p-8 rounded-xl md:flex-row hover:shadow-cardBoxShadowHover">
      <img
        className="w-12 h-12"
        src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732469080/Course-site/fail_hsyjvz.svg"
        alt="excuse"
      />
      <h3 className="text-2xl font-semibold">
        { text }
      </h3>
    </div>
  );
};

export default Card;
