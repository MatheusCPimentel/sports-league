"use client";

import { useState, useMemo } from "react";
import { SportCard } from "./components/SportCard";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";
import { useLeagues } from "@/hooks/useLeagues";

export default function Home() {
  const { data, isLoading, isError, error } = useLeagues();
  const [searchValue, setSearchValue] = useState("");
  const [sportFilter, setSportFilter] = useState("All Sports");

  const sportOptions = useMemo(() => {
    if (!data?.leagues) return ["All Sports"];
    const sports = new Set(data.leagues.map((league) => league.strSport));

    return ["All Sports", ...Array.from(sports).sort()];
  }, [data]);

  const filteredLeagues = useMemo(() => {
    if (!data?.leagues) return [];

    return data.leagues.filter((league) => {
      const matchesSearch = league.strLeague
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesSport =
        sportFilter === "All Sports" || league.strSport === sportFilter;

      return matchesSearch && matchesSport;
    });
  }, [data, searchValue, sportFilter]);

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
          <SearchBar value={searchValue} onChange={setSearchValue} />

          <Dropdown
            value={sportFilter}
            onChange={setSportFilter}
            options={sportOptions}
          />
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-gray-600">Loading leagues...</div>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center py-12">
            <div className="text-red-600">
              Error loading leagues: {error?.message}
            </div>
          </div>
        )}

        {!isLoading && !isError && (
          <>
            {filteredLeagues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLeagues.map((league) => (
                  <SportCard key={league.idLeague} {...league} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center py-12">
                <div className="text-gray-600">
                  No leagues found matching your criteria.
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
