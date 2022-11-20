import TimeAgo from '../../TimeAgo';

const DetailsDescription = ({ title, salary, createdAt, description }) => {
  const descriptionParts = description.split('\n');

  const filtered = descriptionParts.filter((part) => {
    if (part === '  ' || part === '') {
      return false;
    }
    return true;
  });

  const finalDescription = filtered.map((item) => item.trim());

  const benefits = finalDescription[4].split('. ');

  return (
    <>
      <div className="job_title_salary_wrap">
        <p className="job_title_text">{title}</p>
        <div className="job_salary_posted_wrap">
          <div className="job_salary_wrap">
            <p className="job_salary_text">
              {'€ ' + salary.replaceAll(/k/g, ' 000').replaceAll(/-/g, '—')}
            </p>
            <p className="per_year_text">Brutto, per year</p>
          </div>
          <p className="post_time_text">
            <TimeAgo createdDate={createdAt} />
          </p>
        </div>
      </div>

      <p className="post_time_text_desk">
        <TimeAgo createdDate={createdAt} />
      </p>

      <p className="description_text">{finalDescription[0]}</p>
      <p className="description_second_title">{finalDescription[1]}</p>
      <p className="description_text">{finalDescription[2]}</p>
      <p className="description_second_title">{finalDescription[3]}</p>
      <ul className="description_text_list">
        {benefits.map((item, index) => (
          <li key={index + 'list'} className="description_list_item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default DetailsDescription;
