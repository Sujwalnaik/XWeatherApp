import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    setLoading(true);
    setError(null);
    setWeather(null);

    try {
      const apiKey = "82936c0875014520a1e144059240305";
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: {
            key: apiKey,
            q: city,
          },
        }
      );
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button
        onClick={fetchWeather}
        style={{
          background: "red",
          outline: "0px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      {loading && <p style={{ color: "black" }}>Loading data...</p>}
      {error && <p style={{ color: "black " }}>{error}</p>}
      {weather && (
        <div className="weather-cards" style={{ display: "flex", gap: 20 }}>
          <div
            className="weather-card"
            style={{
              color: "black",
              width: "300px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "20px" }}>
                Temperature
              </span>
              <div>{weather.current.temp_c}°C</div>
            </p>
          </div>
          <div
            className="weather-card"
            style={{
              color: "black",
              width: "300px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "20px" }}>
                Humidity
              </span>
              <div>{weather.current.humidity}%</div>
            </p>
          </div>
          <div
            className="weather-card"
            style={{
              color: "black",
              width: "300px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "20px" }}>
                Condition
              </span>
              <div>{weather.current.condition.text}</div>
            </p>
          </div>
          <div
            className="weather-card"
            style={{
              color: "black",
              width: "300px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              height: "150px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <p
              style={{
                display: "flex",
                gap: 10,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "20px" }}>
                Wind Speed
              </span>
              <div>{weather.current.wind_kph} kph</div>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
