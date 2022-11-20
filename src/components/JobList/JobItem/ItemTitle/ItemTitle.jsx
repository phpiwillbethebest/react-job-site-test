import { Link } from 'react-router-dom';

const ItemTitle = ({ onClick, linkTo, title, screenWidth }) => {
  return (
    <Link onClick={onClick} className="job_title" to={`jobdetails/${linkTo}`}>
      {screenWidth < 1100
        ? title.length > 52
          ? title.slice(0, 52) + '...'
          : title
        : title}
    </Link>
  );
};

export default ItemTitle;
