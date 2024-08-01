import React from 'react';
import Poster from '../components/Poster';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="flex-none w-1/4 h-full overflow-hidden">
        <NavBar />
      </div>
      <div className="flex-grow flex relative h-full flex-col justify-center items-center left-[26px] top-[-2x] sm:left-[375px] right-[-38px]">
        <h2 className="p-3 text-black font-bold capitalize pb-[10px] text-center text-2xl">
          Lançamentos
        </h2>
        <div className="flex flex-row gap-3 bg-white rounded items-center justify-center">
          <Poster />
          <Poster />
        </div>
      </div>
    </div>
  );
}

export default Home;