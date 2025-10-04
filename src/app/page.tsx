"use client";

import { SportCard } from "./components/SportCard";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";
import { League } from "@/types/leagues";

const mockLeagues: League[] = [
  {
    idLeague: "4328",
    strLeague: "English Premier League",
    strSport: "Soccer",
    strLeagueAlternate: "EPL",
  },
  {
    idLeague: "4387",
    strLeague: "NBA",
    strSport: "Basketball",
    strLeagueAlternate: "National Basketball Association",
  },
  {
    idLeague: "4391",
    strLeague: "NFL",
    strSport: "American Football",
    strLeagueAlternate: "National Football League",
  },
  {
    idLeague: "4380",
    strLeague: "La Liga",
    strSport: "Soccer",
    strLeagueAlternate: "Primera División",
  },
  {
    idLeague: "4424",
    strLeague: "NHL",
    strSport: "Ice Hockey",
    strLeagueAlternate: "National Hockey League",
  },
  {
    idLeague: "4334",
    strLeague: "Bundesliga",
    strSport: "Soccer",
    strLeagueAlternate: "",
  },
];

const mockSearchBar = {
  placeholder: "Search leagues by name...",
  value: "",
  onChange: (value: string) => {
    console.log(value);
  },
};

const mockDropdown = {
  value: "",
  onChange: (value: string) => {
    console.log(value);
  },
  options: [
    "All Sports",
    "Soccer",
    "Basketball",
    "American Football",
    "Ice Hockey",
    "Motorsport",
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Sports Leagues
        </h1>

        <p className="text-gray-600 mb-8">
          Explore the most popular sports leagues from around the world
        </p>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <SearchBar {...mockSearchBar} />
          <Dropdown {...mockDropdown} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockLeagues.map((league) => (
            <SportCard key={league.idLeague} {...league} />
          ))}
        </div>
      </div>
    </div>
  );
}
