import workImage from './work_image.png';

const ItemImg = () => {
  return (
    <div className="img_wrap">
      <img className="img" src={workImage} alt="job_item_img" />
    </div>
  );
};

export default ItemImg;
