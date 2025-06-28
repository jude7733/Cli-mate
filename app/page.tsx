"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WeatherDetails } from "@/components/weather-details"
import { searchWeatherByLocation } from "@/functions/fetch-by-location";
import { WeatherResponse } from "@/types/weatherData";

type Location = {
  latitude: number;
  longitude: number;
} | null;

export default function Home() {
  const [data, setData] = useState<WeatherResponse | null | undefined>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<Location>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
      );
    }
    // TODO: fix location access error 
    console.log("Current Location:", location);
    searchWeatherByLocation("kochi").then(setData)
    setLoading(false);
  }, [location]);

  const handleSearch = async (location: string) => {
    setLoading(true);
    setError(null);
    setData(null);
    const timeout = setTimeout(() => {
      if (!data && !error) setError("Location not found.");
      setLoading(false);
    }, 4000);
    const details = await searchWeatherByLocation(location).catch((err) => {
      setError(err.message || "Location not found.");
    });
    if (!details) {
      setError("Location not found.");
      setLoading(false);
      clearTimeout(timeout);
      return;
    }
    setData(details);
    setLoading(false);
    clearTimeout(timeout);
  }

  return (
    <div className="flex flex-col items-center justify-start py-10 bg-linear-to-b from-cyan-100 via-blue-300 to-indigo-400 dark:bg-linear-to-b dark:from-zinc-500 dark:via-stone-600 dark:to-zinc-900">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl p-4 md:px-20 bg-secondary/50 shadow-primary rounded-lg shadow-sm">
        <form
          className="flex w-full max-w-4xl items-center gap-2 m-4 bg-secondary p-4 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch((e.target as HTMLFormElement).location.value);
          }}
        >
          <Input
            type="text"
            name="location"
            placeholder="Search for a location..."
          />
          <Button type="submit" className="">
            Search
          </Button>
        </form>
        {error ? (
          <div className="text-red-500 my-20 text-xl text-center">
            {error}
          </div>
        )
          :
          <WeatherDetails loading={loading} weatherData={data} />
        }
      </div>
    </div>
  )
}
