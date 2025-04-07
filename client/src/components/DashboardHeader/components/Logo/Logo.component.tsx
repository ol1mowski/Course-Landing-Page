import { memo } from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/mojekonto">
    <img
      className="w-3/4 cursor-pointer hover:scale-105 transition-all duration-300"
      src="https://res.cloudinary.com/dbbuav0rj/image/upload/v1732100151/Course-site/site-logo_oyzuwi.svg"
      alt="Logo platformy Kariera W IT"
    />
  </Link>
);

export default memo(Logo); 