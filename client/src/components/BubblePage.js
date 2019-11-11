import React, { useState, useEffect } from "react";
import axios from 'axios'
import api from '../utils/AxiosAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts 

  useEffect(() => {
    api().get('/api/colors')
    .then(res => { 
       // set that data to the colorList state property
      setColorList(res.data)

    })
    .catch(err => {
      console.log(err.message)
    })
  
},[colorList.length])

 


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
