export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  ground_level?: number;
}

export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherSys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  coord: Coordinates;
  weather: WeatherDescription[];
  main: WeatherMain;
  wind: WeatherWind;
  clouds: WeatherClouds;
  sys: WeatherSys;
  dt: number;
  visibility?: number;
  name: string;
  id: number;
  cod: number;
}

