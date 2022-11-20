import { Link } from 'react-router-dom';
import arrow from './arrow_icon.svg';

const DetailsRtnBtn = () => {
  return (
    <Link className="return_btn" to="/">
      <button className="return_btn_stl">
        <img src={arrow} alt="arrow_icon" />
        <p className="retun_btn_text">RETURN TO JOB BOARD</p>
      </button>
    </Link>
  );
};

export default DetailsRtnBtn;
