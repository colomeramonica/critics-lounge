import { Link } from "react-router-dom";
import Poster from "./Poster";

export default function Container({ list }) {
  console.log('list', list);
  return (
    <div className="flex flex-row gap-3 bg-white rounded items-center justify-center">
      {list.slice(13).map((item) => (
        <Link to={`/movie/${item.id}`}>
          <Poster
            key={item.id}
            title={item.title}
            poster={item.poster_path}
          />
        </Link>
      ))};
    </div>
  );
}