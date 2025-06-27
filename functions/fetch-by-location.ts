import { WeatherResponse } from "@/types/weatherData";

export async function searchWeatherByLocation(
  location: string
): Promise<WeatherResponse | undefined> {

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=${API_KEY}`;

  const response = await fetch(endpoint);

  if (response.status === 404) {
    // Location not found
    return undefined;
  }
  if (response.status !== 200) {
    throw new Error('Failed to fetch weather data');
  }

  const data: WeatherResponse = await response.json();
  return data;
}
