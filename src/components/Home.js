import React from "react";
import image from "../background.jpg";

export default function Home() {
  return (
    <main className="responsive">
      <img
        src={image}
        alt="Monstera Leaves"
        className="absolute image responsive w-full h-full"
      />
      <section className="relative flex justify-center  pt-12  lg:pt-42 px-8">
        
        <h1 className="home-name1  align-middle text-white flex justify-center cursive"> <br></br>Hi ! I'm SIDDHANT</h1>
         
        
      </section>
    </main>
  );
}
