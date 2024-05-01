document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', function() {
        const startDateInput = document.getElementById('start-date-input').value;
        const endDateInput = document.getElementById('end-date-input').value;
        fetchEarthquakeData(startDateInput, endDateInput);
    });
});

function fetchEarthquakeData(startDate, endDate) {
    const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&minmagnitude=1`;
    
    fetch(https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${startDate}&endtime=${endDate}&minmagnitude=1)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayEarthquakeData(data.features);
        })
        .catch(error => {
            console.error('Error fetching earthquake data:', error);
            alert('An error occurred while fetching earthquake data. Please try again.');
        });
}

function displayEarthquakeData(earthquakes) {
    const earthquakeList = document.getElementById('earthquake-list');
    earthquakeList.innerHTML = ''; // Clear previous earthquake data
    earthquakes.forEach(earthquake => {
        const properties = earthquake.properties;
        const listItem = document.createElement('li');
        listItem.classList.add('earthquake-item');
        listItem.textContent = `${properties.place} - Magnitude: ${properties.mag}`;
        earthquakeList.appendChild(listItem);
    });
}
