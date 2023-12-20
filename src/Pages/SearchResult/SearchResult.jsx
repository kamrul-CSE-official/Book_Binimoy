import { useParams } from "react-router-dom";

export default function SearchResult() {
  const searchInput = useParams();
  console.log(searchInput?.searchInput);
  return (
    <div>
      <h1 className="text-6xl">{searchInput?.searchInput}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minus
      necessitatibus consequatur, nulla dolor amet, quidem, sit doloremque
      impedit ducimus laboriosam deleniti assumenda! Necessitatibus beatae,
      fugiat labore laudantium iure ab!
    </div>
  );
}
