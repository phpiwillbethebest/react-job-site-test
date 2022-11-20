import Rating from 'react-rating';
import StarMobile from './StarsMobile/StarMobile';
import EmptyStarMobile from './StarsMobile/EmptyStarMobile';

const ItemRating = () => {
  return (
    <Rating
      className="rating_mobile"
      emptySymbol={<EmptyStarMobile />}
      fullSymbol={<StarMobile />}
      placeholderSymbol={<StarMobile />}
    />
  );
};

export default ItemRating;
