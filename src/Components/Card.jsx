import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";
import img from "/src/images/doctor.jpg";

const Card = ({ item }) => {
  const { name, username, id } = item;

  const { dispatch } = useContextGlobal();
  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: item });
  };

  return (
    <div className="card">
      <Link to={"/detail/" + id}>
        <div>
          <img src={img} alt="Doctor" width={200} />
          <h3>{name}</h3>
          <h4>
            {id} - {username}
          </h4>
        </div>
      </Link>
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
