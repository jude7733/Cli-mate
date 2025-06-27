import { WeatherResponse } from "@/types/weatherData";

export const WeatherDetails = ({ weatherData }: { weatherData: WeatherResponse }) => {
  console.log("Weather Data:", weatherData);

  if (!weatherData || !weatherData.main || !weatherData.weather) {
    return null;
  }
  return (
    <main className="flex-1 overflow-auto p-4 md:p-6">
      <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon || "01d"}@4x.png`}
            alt={weatherData.weather?.[0]?.description || "Weather Icon"}
            className="w-24 h-24"
            width="96"
            height="96"
            style={{ aspectRatio: "96/96", objectFit: "cover" }}
          />
          <div className="text-center">
            <div className="text-5xl font-bold">
              {weatherData.main ? Math.round(weatherData.main.temp - 273.15) : "--"}°
            </div>
            <div className="text-lg text-muted-foreground">
              {weatherData.weather?.[0]?.main || "--"}
            </div>
            <div className="text-base text-muted-foreground capitalize">
              {weatherData.weather?.[0]?.description || "--"}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Feels Like</span>
            <span>{weatherData.main ? Math.round(weatherData.main.feels_like - 273.15) : "--"}°C</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Humidity</span>
            <span>{weatherData.main?.humidity ?? "--"}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Pressure</span>
            <span>{weatherData.main?.pressure ?? "--"} hPa</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Wind</span>
            <span>{weatherData.wind?.speed ?? "--"} m/s</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-4">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Min Temp</span>
            <span>{weatherData.main ? Math.round(weatherData.main.temp_min - 273.15) : "--"}°C</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Max Temp</span>
            <span>{weatherData.main ? Math.round(weatherData.main.temp_max - 273.15) : "--"}°C</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Cloudiness</span>
            <span>{weatherData.clouds?.all ?? "--"}%</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Visibility</span>
            <span>{weatherData.visibility ? weatherData.visibility / 1000 : "--"} km</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground mt-4">
          Location: {weatherData.name}, {weatherData.sys?.country}
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated:{" "}
          {weatherData.dt
            ? new Date(weatherData.dt * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
            : "--"}
        </div>
      </div>
    </main>
  )
}
