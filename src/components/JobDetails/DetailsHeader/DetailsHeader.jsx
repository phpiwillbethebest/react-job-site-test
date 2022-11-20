import bookmark from './bookmark_icon.svg';
import share from './share_icon.svg';

const DetailsHeader = () => {
  return (
    <div className="page_header">
      <div className="pagetitle_book_share">
        <p className="page_title">Job Details</p>
      </div>

      <hr className="hr_line_mobile" />

      <div className="book_share_wrap">
        <button className="book_wrap btn_stl">
          <img className="book_share_img" src={bookmark} alt="bookmark_icon" />
          <span className="btn_text">Save to my list</span>
        </button>
        <button className="share_wrap btn_stl">
          <img className="book_share_img" src={share} alt="share_icon" />
          <span className="btn_text">Share</span>
        </button>
      </div>
    </div>
  );
};

export default DetailsHeader;
