import React from "react";

export default function Comments() {
  return (
    <div className="flex flex-col w-full p-5 ">
      <h3 className="text-slate-800 font-bold capitalize pb-[10px] text-start text-xl">
        Reviews
      </h3>
      <div className="add-comment-section flex flex-col">
        <input type="text"
          className="backdrop-filter backdrop-blur-lg bg-opacity-20 w-full p-3 rounded-lg bg-slate-200 drop-shadow focus:border-slate-800"
          placeholder="Write a review..." />
        <div className="flex justify-end">
          <button className="flex w-20 p-3 rounded-full bg-slate-800 font-bold drop-shadow mt-3 justify-center align-middle">
            Send
          </button>
        </div>
      </div>
      <div className="comments-section flex flex-col my-6">
        <div className="backdrop-filter backdrop-blur-lg bg-opacity-20 w-full p-3 rounded-lg bg-slate-200 drop-shadow">
          <h2 className="px-2 text-slate-800 font-bold capitalize text-start text-xl">
            Título Resenha
          </h2>
          <p className="px-2 text-slate-800 text-sm ">Escrita por Nome da pessoa</p>
          <span className="mt-6 text-slate-800 hyphens-auto">
            "Mad Max: Fury Road" é um dos meus filmes favoritos de todos os tempos, portanto, esperava ansiosamente pela prequela "Furiosa". Infelizmente, o filme parece que pegou num argumento típico de um "Fast & Furious" ou de um filme de ação genérico e aplicou um template para ficar com um visual semelhante a "Fury Road".
          </span>
        </div>
      </div>
    </div >
  );
}