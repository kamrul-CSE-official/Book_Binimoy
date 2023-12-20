import { Link } from "react-router-dom";
import PageNotFoundImg from "../../assets/pageNotFound.jpg";
export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <img src={PageNotFoundImg} alt="Page Not Found" width={500} />
      <Link to="/">
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  );
}
