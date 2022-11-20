const DetailsImg = ({ pictures }) => {
  return (
    <div>
      <p className="page_title">Attached images</p>

      <hr className="hr_line" />

      <div className="attached_images_wrap">
        {pictures.map((item, index) => (
          <div key={index + 'detai_img'} className="picture_wrap">
            <img
              className="pictures"
              src={`${item}?random=${Math.random()}`}
              alt="detail_pics"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsImg;
