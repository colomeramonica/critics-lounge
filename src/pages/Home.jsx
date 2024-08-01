import React from 'react';
import Poster from '../components/Poster';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex-none w-1/4 h-full">
        <NavBar />
      </div>
      <div className="flex-grow flex w-full flex-col justify-center items-center">
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