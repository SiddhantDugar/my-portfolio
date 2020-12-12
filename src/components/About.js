import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import plumeria from "../grass.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={plumeria} alt="Plumeria Flower" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="custom1 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Siddhant"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-4xl mb-4">
              Hey there! I'm{" "}
              <span className="text-black-200">{author.name}</span>
            </h1>
            <br></br>
            <p className="text-black-200 cursive text-xl">
🎓 I am a pre-final year undergraduate pursuing my Bachelors in Computer Engineering from 
Delhi Technological University (Formerly DCE)
<br></br>

👨‍💻 I’m  passionate about Web Development,Machine Learning,Blockchain and exploring new technologies.
<br></br>
💻 Skills : C++ , Full-Stack Web Development(MERN stack) , Machine Learning 
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
