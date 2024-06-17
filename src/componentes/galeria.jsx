import React, { useState } from "react";

import Modal from "./Modal";
import axios from "axios";
import { useEffect } from "react";


export default function Galeria() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [data,setData]=useState([]);

  useEffect(()=>{
    axios("dato.json").then((res)=> setData(res.data));
},[]);

  function handleClick(item, index) {
    setCurrentIndex(index);
    setClickedImg(item.imagen);
  };

  function handelRotationRight() {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0].imagen;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imagen;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1].imagen;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].imagen;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="row wrapper">
      {data.map((item, index) => (
        <div key={index} className="container col">
          <img
            src={item.imagen}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h4>{item.text}</h4>
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
  );
}
