const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('Navbar');
navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});


fetch(
	'https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=a7164953b3c5b0bb763c88ca0a0b9f60&units=metric'
)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		console.log(data.main.temp);
		temperature.textContent =
			'Temperature: ' + data.main.temp + '\u00B0C';
		description.textContent =
			'Description: ' + data.weather[0].description;
		hightemp.textContent =
			"Today's High: " + data.main.temp_max + '\u00B0C';
		lowtemp.textContent =
			"Today's Low: " + data.main.temp_min + '\u00B0C';
		feelslike.textContent =
			'Feels Like: ' +
			data.main.feels_like +
			'\u00B0C';
        });