import { OFFER_BENEFITS } from "../../../data/Offer.data";

import OfferBenefit from "../OfferBenefit/OfferBenefit.component";

const OfferBenefits = () => (
  <div className="space-y-4 mt-8">
    {OFFER_BENEFITS.map((benefit, index) => (
      <OfferBenefit
        key={benefit.id}
        {...benefit}
        index={index}
      />
    ))}
  </div>
);

export default OfferBenefits; 