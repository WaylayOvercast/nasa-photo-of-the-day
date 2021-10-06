import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";





function App() {

  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() =>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZTjEdHib1QVTaB4qhg6c0uqXsOaf1xKjuxqdGArG')
    .then(res =>{
      setData(res.data)
      console.log(res)
  
    }).catch(err => console.log(err))}, [])



  function imgPop (){
    return(
      <div className='hd-pop'>
        <img className='hd-img' src={`${data.hdurl}`} ></img>
      </div>
    );
  }

  const imgGrow = isOpen ? { width:'70rem', Transition:'all 1s' } : null

  return (
    <div className="App">
      <div className='top' style={isOpen ? {flexDirection:"column", justifyContent:"center", alignItems:"center"} : null}>
        <div className='h-con'>
          <h1 className='title'>{`${data.title}`}</h1>
          <div className='p-con'>
            <p>{`${data.explanation}`}</p>
          </div>
        </div>
        <div className='img-con'>
          <p>{` Posted: ${data.date}  By: ${data.copyright}`}</p>
          <img src={isOpen ? data.hdurl : data.url} style={imgGrow}></img>
          <div className='nxt-img'>
            <button className='btns btn1'>{`<<`}</button> 
            <button onClick={() => setOpen(!isOpen)} className='btns btn2'>{`+`}</button>
            <button className='btns btn3'>{`>>`}</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='folderButtons'>
          <button className='fldrs btn-folder3'></button>
          <button className='fldrs btn-folder2'></button>
          <button className='fldrs btn-folder1'></button>
        </div>
        <div className='folder tab3'>
        </div>
        <div className='folder tab2'>
        </div>
        <div className='folder tab1'>
        </div>
      </div>
    </div>
  );
}

export default App;
