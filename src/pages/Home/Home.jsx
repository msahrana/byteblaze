import Hero from "../../components/Hero/Hero";
import wave from "../../assets/wave.svg";
import {useEffect} from "react";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="flex relative flex-col min-h-[calc(100vh-116px)] justify-center items-center">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
