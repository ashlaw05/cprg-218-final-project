const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('Navbar');
navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});


fetch(
	'https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=eadd35fb03f50a252e72d606c5b6fe9d&units=metric'
)
	.then(response => response.json())
	.then(data => {
		console.log(data);
		console.log(data.main.temp);
		temperature.textContent =
			'Temperature: ' + data.main.temp + '\u00B0C';
		description.textContent =
			'Description: ' + data.weather[0].description;
		humidity.textContent = 'Humidity: ' + data.main.humidity;
		hightemp.textContent =
			"Today's High: " + data.main.temp_max + '\u00B0C';
		lowtemp.textContent =
			"Today's Low: " + data.main.temp_min + '\u00B0C';
		feelslike.textContent =
			'Feels Like Temperature: ' +
			data.main.feels_like +
			'\u00B0C';
        });