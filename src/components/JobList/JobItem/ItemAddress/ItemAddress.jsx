import locations from './location_icon.svg';

const ItemAddress = ({ address, lat, long }) => {
  return (
    <>
      <p className="address_text">{address}</p>

      <div className="location_wrap">
        <img className="location_icon" src={locations} alt="location_icon" />

        <p className="location_text">{`${lat}, ${long}`}</p>
      </div>
    </>
  );
};

export default ItemAddress;
