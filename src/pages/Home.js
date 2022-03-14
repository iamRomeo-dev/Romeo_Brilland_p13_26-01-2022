import { useDispatch, useSelector } from "react-redux";
import { Banner } from "../components/Banner";
import { UnderBanner } from "../components/UnderBanner";
import { playPause } from "../store";

const Home = () => {
  const dispatch = useDispatch();
  const player1Score = useSelector((state) => state.status);
  console.log("player1Score", player1Score);
  return (
    <>
      <Banner />
      {/* <button
        className="button"
        onClick={() => {
          dispatch(playPause());
        }}
      >
        Pause / Reprendre
      </button> */}
      <UnderBanner />
    </>
  );
};

export default Home;
