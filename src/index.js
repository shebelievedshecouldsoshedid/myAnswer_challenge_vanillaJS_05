// What
import './styles.css';
const clockTitle = document.querySelector('.js-clock');

// How
function getTime() {
	const xmasDay = new Date('2020-12-24:00:00:00+0900');
	const now = new Date();

	const difference = new Date(xmasDay - now);
	const secondsInMs = Math.floor(difference / 1000);
	const minutesInMs = Math.floor(secondsInMs / 60);
	const hoursInMs = Math.floor(minutesInMs / 60);
	const days = Math.floor(hoursInMs / 24);
	const seconds = secondsInMs % 60;
	const minutes = minutesInMs % 60;
	const hours = hoursInMs % 24;
	const daysStar = `${days < 10 ? `0${days}` : days}d`;
	const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
	const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
	const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
	clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

// When
function init() {
	console.log(secondsInMs);
	getTime();
	setInterval(getTime, 1000);
}

/*

  const secondsInMs = Math.floor(difference / 1000);
  const minutesInMs = Math.floor(secondsInMs / 60);
  const hoursInMs = Math.floor(minutesInMs / 60);
  const days = Math.floor(hoursInMs / 24);
  const seconds = secondsInMs % 60;
  const minutes = minutesInMs % 60;
  const hours = hoursInMs % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}d`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
  const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
  clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
*/
