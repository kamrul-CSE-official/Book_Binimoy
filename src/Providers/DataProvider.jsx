import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  data: [],
  isLoading: true,
  error: null,
});

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("Islam");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?title=${searchText}`
        );
        if (!response) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchText]);

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
