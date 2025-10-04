"use client";

import { League } from "@/types/leagues";

export const SportCard = (league: League) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border-2 border-transparent transition-all duration-300 hover:border-blue-100 cursor-pointer">
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            {league.strLeague}
          </h2>

          {league.strLeagueAlternate && (
            <p className="text-sm text-gray-500 italic">
              Also known as: {league.strLeagueAlternate}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            {league.strSport}
          </span>
        </div>
      </div>
    </div>
  );
};
