const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p></p>;
  
  const styles = {
        container: {
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "500px",
        margin: "auto",
      }};
  return (
    <div style={styles.container}>
      <h2>Weather in {weather.city}</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Condition: {weather.weather}</p>
    </div>
  );
};

export default WeatherDisplay;
