import { useState } from "react";
import { WeatherResponse } from "@/types/weatherData";
import { Loader } from "./loader";
import { Cloudy, Droplets, Eye, Sunrise, Sunset, Thermometer, ThermometerSnowflake, ThermometerSun, Wind, WindArrowDown } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Progress } from "./ui/progress";

export const WeatherDetails = ({ weatherData, loading }: { weatherData: WeatherResponse | null | undefined, loading: boolean }) => {
  const [unit, setUnit] = useState<"C" | "F">("C");

  const toTemp = (k: number | undefined) => {
    if (k === undefined) return "--";
    return unit === "C"
      ? `${Math.round(k - 273.15)}°C`
      : `${Math.round((k - 273.15) * 9 / 5 + 32)}°F`;
  };

  const progress =
    weatherData?.sys?.sunset && weatherData?.sys?.sunrise
      ? Math.min(
        100,
        Math.max(
          0,
          ((Date.now() / 1000 - weatherData.sys.sunrise) /
            (weatherData.sys.sunset - weatherData.sys.sunrise)) *
          100
        )
      )
      : 0;
  return (
    <main className="flex-1 overflow-auto p-4 md:p-16">
      {
        loading || !weatherData ? <Loader /> : (
          <div className="flex flex-col items-center gap-4 w-full h-full">
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-10">
              <Image
                src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0]?.icon || "01d"}@4x.png`}
                alt={weatherData.weather?.[0]?.description || "Weather Icon"}
                className="w-60 h-60"
                width={400}
                height={400}
                style={{ aspectRatio: "96/96", objectFit: "cover" }}
              />
              <div className="text-start">
                <div className="text-5xl flex font-bold">
                  {weatherData.main ? (unit === "C"
                    ? Math.round(weatherData.main.temp - 273.15)
                    : Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32)
                  ) : "--"}°
                </div>
                <div className="text-2xl text-bold">
                  {weatherData.weather?.[0]?.main || "--"}
                </div>
                <div className="text-xl text-muted-foreground capitalize">
                  {weatherData.weather?.[0]?.description || "--"}
                </div>
              </div>
              <Separator className="bg-blue-900 dark:bg-blue-200" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 w-full mt-4">
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Thermometer className="w-10 h-10" />
                <span className="font-semibold">Feels Like</span>
                <span>{toTemp(weatherData.main?.feels_like)}</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Droplets className="w-10 h-10" />
                <span className="font-semibold">Humidity</span>
                <span>{weatherData.main?.humidity ?? "--"}%</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <WindArrowDown className="w-10 h-10" />
                <span className="font-semibold">Pressure</span>
                <span>{weatherData.main?.pressure ?? "--"} hPa</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Wind className="w-10 h-10" />
                <span className="font-semibold">Wind</span>
                <span>{weatherData.wind?.speed ?? "--"} m/s</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <ThermometerSnowflake className="w-10 h-10" />
                <span className="font-semibold">Min Temp</span>
                <span>{toTemp(weatherData.main?.temp_min)}</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <ThermometerSun className="w-10 h-10" />
                <span className="font-semibold">Max Temp</span>
                <span>{toTemp(weatherData.main?.temp_max)}</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Cloudy className="w-10 h-10" />
                <span className="font-semibold">Cloudiness</span>
                <span>{weatherData.clouds?.all ?? "--"}%</span>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Eye className="w-10 h-10" />
                <span className="font-semibold">Visibility</span>
                <span>{weatherData.visibility ? weatherData.visibility / 1000 : "--"} km</span>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row justify-evenly flex-wrap items-center w-full mt-6">
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Sunrise className="w-10 h-10" />
                <span className="font-semibold">Sunrise</span>
                <span>
                  {weatherData.sys?.sunrise
                    ? new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    : ''}
                </span>
              </div>
              <Progress value={progress} className="w-[70%] md:w-[50%]" />
              <div className="flex flex-col items-center hover:scale-105 transition-transform hover:shadow-lg hover:shadow-primary">
                <Sunset className="w-10 h-10" />
                <span className="font-semibold">Sunset</span>
                <span>
                  {weatherData.sys?.sunset
                    ? new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    : ''}
                </span>
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
            <div className="mt-4 flex gap-2 items-center">
              <span className="text-sm">Show temperature in:</span>
              <button
                className={`px-2 py-1 rounded ${unit === "C" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setUnit("C")}
              >
                °C
              </button>
              <button
                className={`px-2 py-1 rounded ${unit === "F" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setUnit("F")}
              >
                °F
              </button>
            </div>
          </div>
        )
      }
    </main>
  )
}
