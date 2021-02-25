const shareButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');
const container = document.querySelector('.container');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const ques = document.querySelector('.ques');
const ans = document.querySelector('.ans');
const topnavJokes = document.querySelector('#topnavJokes');
const topnavQuotes = document.getElementById('topnavQuotes');

const title = window.document.title;
const url = window.document.location.href;
// const para = document.querySelector('.para');
// const girl = document.querySelector('#girl');

shareButton.addEventListener('click', () => {
	if (navigator.share) {
		navigator.share({
			title,
			url
		})
		.then(() => console.log('Thanks for sharing!'))
		.catch((e) => console.error(`Error: ${e}`));
	} else {
		overlay.classList.add('show-share');
		shareModal.classList.add('show-share');
	}
})


overlay.addEventListener('click', () => {
	overlay.classList.remove('show-share');
	shareModal.classList.remove('show-share');
})

const getFirstJoke = () => {
	fetch('https://official-joke-api.appspot.com/random_joke')
	.then(Response => Response.json())
	.then(data => {
		console.log(data)
		// const ques = document.createElement('h3');
		// ques.classList.add('ques');
		ques.innerText = data.setup;
		container.appendChild(ques);
		// const ans = document.createElement('p');
		// ans.add.classList('ans');
		ans.innerText = data.punchline;
		container.appendChild(ans);
	})
}

const getNewJoke = () => {
	fetch('https://official-joke-api.appspot.com/random_joke')
	.then(Response => Response.json())
	.then(data => {
		ques.innerHTML= '';
		ans.innerHTML= '';
		console.log(data)
		// const ques = document.createElement('h3');
		// ques.classList.add('ques');
		ques.innerText = data.setup;
		container.appendChild(ques);
		// const ans = document.createElement('p');
		// ans.add.classList('ans');
		ans.innerText = data.punchline;
		container.appendChild(ans);
	})
}

function getFirstQuote() {
	fetch('https://quotes.rest/qod')
	.then(Response => Response.json())
	.then(data => {
		console.log(data.contents.quotes[0])
	})
}

const getLocation = () => {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showLocation)
	}
}

function showLocation(position){
	console.log(position)
}

function startVibrate(duration) {
    navigator.vibrate(duration);
	console.log('Vibrating')
}


getFirstJoke();
// getFirstQuote();
getLocation();
startVibrate(500);
// const geo = navigator.geolocation.getCurrentPosition;
// console.log(geo);



leftArrow.addEventListener('click', getNewJoke);
rightArrow.addEventListener('click', getNewJoke);
topnavJokes.addEventListener('click', getNewJoke);
topnavQuotes.addEventListener('click', getFirstQuote);