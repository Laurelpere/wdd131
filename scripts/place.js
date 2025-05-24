'use strict';

const currentYearElements = document.querySelector('#currentyear');
const modifiedYearElements = document.querySelector('#lastModified');

let today = new Date();
let modified = new Date(document.lastModified);

currentYearElements.innerHTML = `${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}
).format(today)}`;


modifiedYearElements.innerHTML = `Last Modified ${new Intl.DateTimeFormat('en-UK', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}
).format(modified)}`;

// ...existing code...

// Example values (replace with your actual data)
const temperatureC = 30; // Celsius
const windSpeedKmh = 5;  // km/h

// Convert to Fahrenheit and mph
const temperatureF = (temperatureC * 9/5) + 32;
const windSpeedMph = windSpeedKmh * 0.621371;

// Calculate wind chill if applicable
let windChill = "N/A";
if (temperatureC <= 10 && windSpeedMph > 4.8) {
    windChill = Math.round(
        35.74 + 0.6215 * temperatureC
        - 35.75 * Math.pow(windSpeedMph, 0.16)
        + 0.4275 * temperatureC * Math.pow(windSpeedMph, 0.16)
    ) + " °F";
}

// Display in the spans
document.getElementById('wind-chill').textContent = windChill;