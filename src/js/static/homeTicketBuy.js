document.addEventListener("DOMContentLoaded", function (event) {


  function getMonthNumber(monthName) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const monthIndex = months.indexOf(monthName.toLowerCase());
    const paddedIndex = String(monthIndex + 1).padStart(2, '0');
    return paddedIndex;
  }

  const cards = document.querySelectorAll('.grid-item');

  cards.forEach(card=>{
      const dateElem = card.querySelector('.time-text');
      const dateStr = dateElem.textContent.trim();
      const parts = dateStr.split(' ');
      const year = parts[2];
      const month = getMonthNumber(parts[1]);
      const day = parts[0];
      const isoDateStr = `${year}-${month}-${day}`;
      const datea = new Date(isoDateStr);

      const now = new Date();

      // Установить время для даты на 0 часов, 0 минут, 0 секунд и 0 миллисекунд
      now.setHours(0, 0, 0, 0);
      console.log('Текущая дата (без времени): ', now);

      if (now > datea) {

        const buyTicketElem = card.querySelector('.cod-ticket-main');
        buyTicketElem.style.display = 'none';
      }
    }
  );
})

