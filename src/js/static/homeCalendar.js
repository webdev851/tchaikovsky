document.addEventListener("DOMContentLoaded", function (event) {

  // Получаем элементы из DOM
  const prevMonth = document.querySelector('.prev-month-calendar');
  const nextMonth = document.querySelector('.next-month-calendar');
  const monthDisplay = document.querySelector('.month-calendar');
  const activeDay = document.querySelector('.active-day');
  const calendarDates = document.querySelectorAll('.calendar-date');

  // Определяем текущий месяц и год
  let today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Функция для получения количества дней в месяце
  function daysInMonth(month, year) {
    return new Date(year,month + 1,0).getDate();
  }

  function getFirstDayOfWeek(month, year) {
    return (new Date(year,month,1).getDay() + 6) % 7;
  }

  function clearCalendar() {
    for (let date of calendarDates) {
      date.classList.remove('active-day', 'off');
      date.querySelector('.text-data-calendar').textContent = '';
    }
  }

  function getMonthName(monthNum) {
    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return monthNames[monthNum];
  }

  // Функция для заполнения сетки дат
  function fillCalendar() {
    let numDays = daysInMonth(currentMonth, currentYear);
    let firstDayOfWeek = getFirstDayOfWeek(currentMonth, currentYear);
    let dayOfMonth = 1;
    let currentDate = new Date(currentYear,currentMonth,dayOfMonth);

    for (let i = 0; i < calendarDates.length; i++) {
      let date = calendarDates[i];
      if (i < firstDayOfWeek) {
        date.classList.add('off');
        let prevMonthDays = daysInMonth(currentMonth - 1, currentYear);
        let prevMonthDay = prevMonthDays - firstDayOfWeek + i + 1;
        let prevMonthDate = new Date(currentYear,currentMonth - 1,prevMonthDay);
        date.querySelector('.text-data-calendar').textContent = prevMonthDay;
        date.dataset.date = prevMonthDate.toISOString().split('T')[0];
      } else if (dayOfMonth <= numDays) {
        date.querySelector('.text-data-calendar').textContent = dayOfMonth;
        if (dayOfMonth === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
          date.classList.add('active-day');
        }
        date.dataset.date = currentDate.toISOString().split('T')[0];
        dayOfMonth++;
        currentDate = new Date(currentYear,currentMonth,dayOfMonth);
      } else {
        date.classList.add('off');
        let nextMonthDay = i - firstDayOfWeek - numDays + 1;
        let nextMonthDate = new Date(currentYear,currentMonth + 1,nextMonthDay);
        date.querySelector('.text-data-calendar').textContent = nextMonthDay;
        date.dataset.date = nextMonthDate.toISOString().split('T')[0];
      }
    }
  }

  function updateCalendar() {
    clearCalendar();
    fillCalendar();
    monthDisplay.textContent = getMonthName(currentMonth) + ' ' + currentYear;
  }

  updateCalendar();

  prevMonth.addEventListener('click', ()=>{
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    }
  );

  nextMonth.addEventListener('click', ()=>{
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    }
  );

  calendarDates.forEach(date=>{
      date.addEventListener("click", ()=>{
          calendarDates.forEach(date=>{
              date.classList.remove("active-day");
            }
          );

          date.classList.add("active-day");

          const selectedDate = new Date(date.dataset.date);
          const selectedMonth = selectedDate.toLocaleString('default', {
            month: 'long'
          });
          const selectedYear = selectedDate.getFullYear();
          const selectedDateString = `${selectedDate.getDate()} ${selectedMonth} ${selectedYear}`;

          showNews(selectedDate.toISOString().split('T')[0]);
        }
      );
    }
  );

  var currentDate = new Date();
  var newsItems = document.querySelectorAll('.news-item-calendar');

  for (var i = 0; i < newsItems.length; i++) {
    var newsDate = newsItems[i].querySelector('.text-data-afisha').textContent;
    var newsDateObj = new Date(newsDate);

    if (newsDateObj.toDateString() === currentDate.toDateString()) {
      newsItems[i].style.display = 'block';
    } else {
      newsItems[i].style.display = 'none';
    }
  }
  function showNews() {

    var currentDate = new Date();

    var newsItems = document.querySelectorAll('.news-item-calendar');

    var activeDateElem = document.querySelector('.active-day');
    var activeDateStr = activeDateElem.dataset.date;
    var [year,month,day] = activeDateStr.split('-');
    var activeDateObj = new Date(year,month - 1,day);
    activeDateObj.setDate(activeDateObj.getDate() + 1);

    for (var i = 0; i < newsItems.length; i++) {
      var newsDateStr = newsItems[i].querySelector('.text-data-afisha').textContent;
      var newsDateObj = parseRussianDate(newsDateStr);

      if (newsDateObj.getFullYear() === activeDateObj.getFullYear() && newsDateObj.getMonth() === activeDateObj.getMonth() && newsDateObj.getDate() === activeDateObj.getDate()) {

        newsItems[i].style.display = 'block';
      } else {

        newsItems[i].style.display = 'none';
      }
    }
  }

  function parseRussianDate(str) {
    var months = {
      'января': 0,
      'февраля': 1,
      'марта': 2,
      'апреля': 3,
      'мая': 4,
      'июня': 5,
      'июля': 6,
      'августа': 7,
      'сентября': 8,
      'октября': 9,
      'ноября': 10,
      'декабря': 11
    };
    var parts = str.split(' ');
    var day = parseInt(parts[0]);
    var month = months[parts[1]];
    var year = parseInt(parts[2]);
    return new Date(year,month,day);
  }

})

