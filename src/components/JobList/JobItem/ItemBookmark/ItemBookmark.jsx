import bookmark from './bookmark_icon.svg';

const ItemBookmark = () => {
  return (
    <div className="bookmark_wrap">
      <button
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <img src={bookmark} alt="" />
      </button>
    </div>
  );
};

export default ItemBookmark;
