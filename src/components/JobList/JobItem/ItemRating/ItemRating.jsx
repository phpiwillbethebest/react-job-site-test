import Rating from 'react-rating';
import Star from './Stars/Star';
import EmptyStar from './Stars/EmptyStar';

const ItemRating = () => {
  return (
    <Rating
      className="rating"
      emptySymbol={<EmptyStar />}
      fullSymbol={<Star />}
      placeholderSymbol={<Star />}
    />
  );
};

export default ItemRating;
