import { createContext, useEffect, useState, useMemo } from "react";
import debounce from "lodash/debounce";

export const DataContext = createContext({
  data: [],
  isLoading: true,
  error: null,
  setSearchText: () => {},
});

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("Programming");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useMemo(
    () =>
      debounce(async () => {
        try {
          const controller = new AbortController();
          const signal = controller.signal;

          const response = await fetch(
            `https://openlibrary.org/search.json?title=${searchText}`,
            { signal }
          );

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const result = await response.json();
          setData(result);
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted: ", err.message);
          } else {
            setError(err);
          }
        } finally {
          setIsLoading(false);
        }
      }, 300),
    [searchText]
  );

  useEffect(() => {
    fetchData();

    return () => fetchData.cancel();
  }, [fetchData]);

  const contextValue = {
    data,
    setSearchText,
    isLoading,
    error,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
