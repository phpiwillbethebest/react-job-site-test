const DetailsAdtnInfo = ({ employmentType, benefits }) => {
  return (
    <div>
      <div className="pagetitle_book_share">
        <p className="page_title">Additional info</p>
      </div>

      <hr className="hr_line" />

      <p className="description_text">Employment type</p>

      <div className="employment_type_wrap">
        {employmentType.map((item, index) => (
          <button key={index + 'employ'} className="employment_type">
            {item}
          </button>
        ))}
      </div>

      <p className="description_text">Benefits</p>

      <div className="employment_type_wrap">
        {benefits.map((item, index) => (
          <button key={index + 'benefit'} className="benefits">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DetailsAdtnInfo;
