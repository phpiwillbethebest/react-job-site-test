import ItemImg from './ItemImg/ItemImg';
import ItemTitle from './ItemTitle/ItemTitle';
import ItemAddress from './ItemAddress/ItemAddress';
import ItemRating from './ItemRating/ItemRating';
import ItemBookmark from './ItemBookmark/ItemBookmark';
import ItemPosted from './ItemPosted/ItemPosted';
import ItemRatingMobile from './ItemRating/ItemRatingMobile';
import './JobItem.css';

const JobItem = (props) => {
  return (
    <li className="item_wrap">
      <div className="img_info_wrap">
        <ItemImg />
        <div className="info_wrap">
          <ItemTitle
            onClick={props.saveScroll}
            linkTo={props.id}
            title={props.title}
            screenWidth={props.screenWidth}
          />

          <ItemAddress
            address={props.address}
            lat={props.location.lat}
            long={props.location.long}
          />
        </div>
      </div>

      <div className="rating_book_post_wrap">
        <div className="rating_wrap">
          {props.screenWidth > 899 ? <ItemRating /> : <ItemRatingMobile />}
        </div>

        <div className="post_book_wrap">
          <div className="bookmark_elem">
            <ItemBookmark />
          </div>

          <ItemPosted createdAt={props.createdAt} />
        </div>
      </div>
    </li>
  );
};

export default JobItem;
