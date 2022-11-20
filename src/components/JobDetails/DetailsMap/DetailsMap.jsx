import mapLocation from './map_location.svg';
import textLoc from './text_loc_icon.svg';

const DetailsMap = ({ address, name, phone, email, lat, long }) => {
  return (
    <div className="map_wrap">
      <div className="contact_mobile_map">
        <p className="page_title">Contacts</p>
        <hr className="hr_line" />
      </div>
      <div className="map_inself">
        <div className="upper_wrap">
          <div className="square_bcgr">
            <div className="upper_text_wrap">
              <p className="dep_name">
                Department name. University Hospital Giessen.
              </p>
              <div>
                <div className="text_loc_wrap">
                  <img
                    className="text_loc_img"
                    src={textLoc}
                    alt="text_loc_icon"
                  />
                  <p className="text_map">{address}</p>
                </div>
                <p className="text_map">{name}</p>
              </div>
              <div>
                <p className="text_map_num_em">{phone}</p>
                <p className="text_map_num_em">{email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower_wrap">
          <img
            className="map_image"
            src={`https://maps.geoapify.com/v1/staticmap?style=klokantech-basic&width=402&height=218&center=lonlat:${lat},${long}&zoom=14&apiKey=9fe45f393fe9476aa1a6c49315d2f984`}
            alt="map_img"
          />
          <img className="map_cursor" src={mapLocation} alt="map_loc_icon" />
        </div>
      </div>
    </div>
  );
};

export default DetailsMap;
