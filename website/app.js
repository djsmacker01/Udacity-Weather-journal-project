/* Global Variables */
const button = document.getElementById('generate');
console.log('button', button);
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');

//Elements to update dynamically
const date = document.getElementById('date');
console.log(' date', date);
const temp = document.getElementById('temp');
console.log('tepmmmmm', typeof temp);
const content = document.getElementById('content');

// OpenWeatherApi configuration
const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID';
const apiKey = '8817ee18f81f83a257d684d8514bfd7c';


//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8817ee18f81f83a257d684d8514bfd7c

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Fetch Weather Data from OpenWeatherApi
const fetchWeather = async (baseURL,zip,apiKey) => {
  try {
    const request = await fetch(`${url}?zip=${zip},uk&units=metric&APPID=${apiKey}`);
    const result = await request.json();

    // destructuring  result object
    const {
      main: {temp},
    } = result;
    
    return temp;
  } catch (e) {
    throw e;
  }
};



// Update UI dynamically
const updateUI = async (temperature, newDate, feelings) => {
  date.innerText = newDate;
  temp.innerText = `${temperature} deg`;
  content.innerText = feelings;
};

//Add Event listener
button.addEventListener('click', () => {
  fetchWeather(url,zip.value,apiKey)
    .then((temp) => {
      return { date: newDate, temp, content: feelings.value };
    })

    .then(({ temp, date, content }) => updateUI(temp, date, content))
    .catch((e) => {
      
      console.error(e);
    });
});
