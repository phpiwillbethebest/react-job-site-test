import star from './star_icon_mobile.svg';

const EmptyStarMobile = () => {
  return (
    <img
      style={{
        filter:
          'invert(64%) sepia(6%) saturate(171%) hue-rotate(91deg) brightness(95%)contrast(80%)',
      }}
      src={star}
      alt="star_icon_mobile"
    />
  );
};

export default EmptyStarMobile;
