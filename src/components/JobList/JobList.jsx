import React, { useEffect } from 'react';
import JobItem from './JobItem/JobItem';

const JobList = (props) => {
  function saveScroll() {
    localStorage.setItem('storeScrollPosition', window.scrollY);
  }

  const scrollPos = localStorage.getItem('storeScrollPosition');

  if (!scrollPos) {
    localStorage.setItem('storeScrollPosition', window.scrollY);
  }

  useEffect(() => {
    window.scroll(0, scrollPos);
  }, [scrollPos]);

  return (
    <div className="job_list_wrap">
      <ul className="job_list">
        {props.jobs.map((item) => (
          <JobItem
            screenWidth={props.screenWidth}
            timeAgo={props.timeAgo}
            saveScroll={saveScroll}
            location={item.location}
            address={item.address}
            title={item.title}
            key={item.id}
            createdAt={item.createdAt}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default JobList;
