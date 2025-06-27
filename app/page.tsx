"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WeatherDetails } from "@/components/weather-details"
import { searchWeatherByLocation } from "@/functions/fetch-by-location";

export default function Home() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (location: string) => {
    const details = await searchWeatherByLocation(location);
    setData(details);
  }

  // Fetch default data for "kochi" on mount
  useEffect(() => {
    setLoading(true);
    searchWeatherByLocation("kochi").then(setData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-background">
        <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-evenly gap-20 bg-background mt-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Weather Location Search</h1>
        <form
          className="flex max-w-5xl items-center gap-2 m-10"
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
      </div>
      <WeatherDetails weatherData={data} />
    </div>
  )
}
