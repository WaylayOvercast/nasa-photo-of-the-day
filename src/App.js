import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";





function App() {

  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZTjEdHib1QVTaB4qhg6c0uqXsOaf1xKjuxqdGArG')
    .then(res =>{
      setData(res.data)
      console.log(res)
  
    }).catch(err => console.log(err))}, [])

  function imgPop (data){
    return(
      <div className='hd-pop'>
        <img className='hd-img' src={`${data.hdurl}`} ></img>
      </div>
    );
  }


  return (
    <div className="App">
      <div className='top'>
        <div className='h-con'>
          <h1 className='title'>{`${data.title}`}</h1>
          <div className='p-con'>
            <p>{`${data.explanation}`}</p>
          </div>
        </div>
        <div className='img-con'>
          <p>{` Posted: ${data.date}  By: ${data.copyright}`}</p>
          <img src={`${data.url}`}></img>
          <div className='nxt-img'>
            <button className='btns btn1'>{`<<`}</button> 
            <button onClick={() =>imgPop(data)} className='btns btn2'>{`+`}</button>
            <button className='btns btn3'>{`>>`}</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='folderButtons'>
          <button className='fldrs opened-folder'></button>
          <button className='fldrs btn-folder2'></button>
          <button className='fldrs btn-folder3'></button>
        </div>
        <div className='folder tab1'>
        </div>
        <div className='folder tab2'>
        </div>
        <div className='folder tab3'>
        </div>
      </div>
    </div>
  );
}

export default App;
