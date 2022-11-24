import React, { useState, useEffect } from "react";
import ImgCard from "./ImgCard";

function Imageload(props) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=31501551-ff9f2c4f5d36cc7afe5e354a0&q=${term}&image_type=photo&pretty=true&per_page=20`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <div className=" flex items-center justify-center h-40 bg-slate-500 inset-0 z-50">
        <input
          onChange={(e) => setTerm(e.target.value)}
          type="search"
          name="search"
          id=""
          placeholder="Search Anything...."
          className="w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none"
        />
      
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No Results Found!</h1>
      )}
      ;
      {isLoading ? (
        <h1 className="text-center text-4xl mt-44">Loading.....</h1>
      ) : (
        <main className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-10">
          {images.map((image) => (
            <ImgCard key={image.id} image={image} />
          ))}
        
        </main>
       
      )}
    </>
  );
}

export default Imageload;
