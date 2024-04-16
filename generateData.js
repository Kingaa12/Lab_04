const fs = require('fs');
const path = require('path');

const generatePatientData = () => {
  let data = "PatientID,Age,Gender,BMI,BloodPressure,Cholesterol,Diabetes,Smoker,PhysicalActivity,HeartDisease\n";
  for (let i = 2; i <= 30; i++) { // Assuming 1 row already exists, and we're adding 29 more
    data += `${i},${Math.floor(Math.random() * (80 - 20 + 1)) + 20},${Math.random() < 0.5 ? 'Male' : 'Female'},${(Math.random() * (35 - 18) + 18).toFixed(1)},${Math.floor(Math.random() * (180 - 110 + 1)) + 110},${Math.floor(Math.random() * (240 - 150 + 1)) + 150},${Math.random() < 0.5 ? 'Yes' : 'No'},${Math.random() < 0.5 ? 'Yes' : 'No'},${(Math.random() * 5).toFixed(1)},${Math.random() < 0.5 ? 'Yes' : 'No'}\n`;
  }
  fs.appendFileSync(path.join(__dirname, 'public', 'data', 'patient-data.csv'), data);
};

generatePatientData();

const generateWeatherData = () => {
    const cities = ["CityA", "CityB", "CityC"];
    let data = {};
  
    cities.forEach(city => {
      data[city] = {};
      for (let i = 0; i < 30; i++) {
        const date = new Date(2024, 1, i + 1); // February 2024
        data[city][date.toISOString().split('T')[0]] = {
          Temperature: parseFloat((Math.random() * (35 - 15) + 15).toFixed(1)),
          Humidity: Math.floor(Math.random() * (100 - 30 + 1)) + 30,
          Weather: ["Cloudy", "Rainy", "Windy", "Sunny"][Math.floor(Math.random() * 4)],
          Wind: {
            Speed: parseFloat((Math.random() * (70 - 10) + 10).toFixed(1)),
            Direction: ["North", "South", "East", "West"][Math.floor(Math.random() * 4)]
          }
        };
      }
    });
  
    fs.writeFileSync(path.join(__dirname, 'public', 'data', 'weather-data.json'), JSON.stringify(data, null, 2));
  };
  
  generateWeatherData();
  