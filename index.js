let current_date = document.getElementById('current-date');

const getCurrentDate = (date = new Date()) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

current_date.innerText = `Current Date : ${getCurrentDate()}`;
