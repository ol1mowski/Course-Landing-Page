const Card = ({ text, type }: { text: string; type: string }) => {

    const classes = type === "excuse" ? "flex gap-4 flex-col w-fit h-full transition-all duration-500 cursor-pointer items-start justify-center shadow-headerBoxShadow p-8 rounded-xl md:flex-row hover:shadow-cardBoxExcusesShadowHover" : "flex gap-4 flex-col w-fit h-full transition-all duration-500 cursor-pointer items-start justify-center shadow-headerBoxShadow p-8 rounded-xl md:flex-row hover:shadow-cardBoxBenefitsShadowHover"

  return (
    <div className={classes}>
      <img
        className="w-12 h-12"
        src={
          type === "excuse"
            ? "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732469080/Course-site/fail_hsyjvz.svg"
            : "https://res.cloudinary.com/dbbuav0rj/image/upload/v1732119121/Course-site/check_xddkrs.svg"
        }
        alt="excuse"
      />
      <h3 className="text-2xl font-semibold">{text}</h3>
    </div>
  );
};

export default Card;
