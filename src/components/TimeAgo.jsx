const TimeAgo = ({ createdDate }) => {
  const date = Date.now();
  const diff = date - Date.parse(createdDate);

  let seconds = Math.floor(diff / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24),
    weeks = Math.floor(days / 7),
    months = Math.floor(days / 30),
    years = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  weeks %= 7;
  months %= 12;

  const timeObj = {
    year: years,
    month: months,
    week: weeks,
    day: days,
    hour: hours,
    minute: minutes,
    second: seconds,
  };

  for (const [key, value] of Object.entries(timeObj)) {
    if (value !== 0) {
      return `Posted ${
        value > 1 ? value + ' ' + key + 's' : value + ' ' + key
      } ago`;
    }
  }
  return;
};

export default TimeAgo;
