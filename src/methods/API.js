const API = () => {
    const API_URL = 'https://api.openweathermap.org/data/2.5/';
    const API_KEY = 'a56758b068e0436e0cacd6e5ef99693d';

    const fetchCurrentWeather = (city, code, correct, error) => {
        return fetch(`${API_URL}weather?q=${city},${code}&appid=${API_KEY}&units=metric&lang=pl`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            });
    };

    const fetchWeatherForecast = (city, code, correct, error) => {
        return fetch(`${API_URL}forecast?q=${city},${code}&appid=${API_KEY}&units=metric&lang=pl`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            });
    };

    return {
        fetchWeather: fetchCurrentWeather,
        fetchForecast: fetchWeatherForecast
    }

}

export default API();
