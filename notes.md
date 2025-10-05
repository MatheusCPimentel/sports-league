## Project Notes – Frontend Engineer Assignment

### AI Tool Used

I used **Cursor with Claude**, mainly to speed up layout generation and get Tailwind styling suggestions.  
It helped set a base, but I made several manual adjustments to ensure the design looked clean and consistent with what I had in mind.

---

### Development Overview and Decisions

- **Planning and Structure**

  - I started by breaking the assignment into small, clear steps. Before connecting to any backend, I created a basic UI using mocked data to visualize how the structure would work.
  - From the problem statement, I saw that I’d need two filters: a search input and a dropdown for sports. For displaying the results, a list of cards felt like the most natural approach.
  - I used **Tailwind CSS** to speed up the process and keep the layout responsive and simple to adjust.

- **API and Data Handling**

  - The documentation mentioned two endpoints: one to fetch leagues and another for badges.
  - I initially thought about using Axios, but since there’s no complex configuration needed, **native `fetch`** was enough... Lighter and easier for a small project like this.
  - For caching and async state, I used **TanStack Query**, which I already use regularly. It handles caching, loading states, and retries out of the box, so I didn’t need to manually manage that logic with `useEffect` or `useState`.
  - I created two hooks:
    - `useLeagues` – for fetching and caching the list of leagues.
    - `useSeasonBadges` – for fetching and caching badge images.
  - All API calls were centralized in an `api.ts` file, keeping the logic organized.
  - I also added two global type definition files (`leagues.d.ts` and `seasonBadges.d.ts`) to ensure type safety and prepare for future scalability.

- **Logic and Optimization**

  - Since there’s no backend search for leagues, I implemented **client-side filtering**. It’s simple, fast, and avoids unnecessary API calls.
  - I added a **`useDebounce` hook** for the search input to avoid filtering on every key press, just a small optimization for smoother UX.
  - For the **badge modal**, I made sure it:
    - Shows a loading while fetching data.
    - Supports closing with the **ESC key** or background click.
    - Uses cached data when reopening the same league, avoiding repeated API calls.

- **Final Steps**
  - The app is fully responsive, and I created a README with GIFs to demonstrate its functionality.
  - After reviewing the first demo GIF, I noticed a layout shift in the modal. I improved it, re-recorded the GIF, and pushed the final version.
