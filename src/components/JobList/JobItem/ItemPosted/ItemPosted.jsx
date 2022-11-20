import TimeAgo from '../../../TimeAgo';

const ItemPosted = ({ createdAt }) => {
  return (
    <p className="posttime_text">
      <TimeAgo createdDate={createdAt} />
    </p>
  );
};

export default ItemPosted;
