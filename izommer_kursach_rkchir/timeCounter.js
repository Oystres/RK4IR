document.addEventListener('DOMContentLoaded', () => { //только при работе сайта
  	const olimpGames = new Date('Sep 09 2023 00:00:00'); //установка нужной даты

    const daysVal = document.querySelector('.time-count__days .time-count__val'); // получем значения дней
	  const hoursVal = document.querySelector('.time-count__hours .time-count__val'); // получем значения часов
	  const minutesVal = document.querySelector('.time-count__minutes .time-count__val'); // получем значения минут
	  const secondsVal = document.querySelector('.time-count__seconds .time-count__val'); // получем значения секунд

	  const timeCount = () => { //создаём функцию, которая считает разницу времени и переводит мелесикунды в
                              //нужный временной формат
      let now = new Date();
		  let leftUntil = olimpGames - now;

		  let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		  let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
		  let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
		  let seconds = Math.floor(leftUntil / 1000) % 60;

		  daysVal.textContent = days;//вносим значения в переменные
	   	hoursVal.textContent =	hours;
		  minutesVal.textContent = minutes;
		  secondsVal.textContent = seconds;
    };
    timeCount();//вызов функции
	  setInterval(timeCount, 1000);//обновление каждую секунду
});
