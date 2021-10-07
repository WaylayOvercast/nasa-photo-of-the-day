import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";





function App() {
  const [data2, setData2] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [showFolder, setshow] = useState(0);

  useEffect(() =>{
    
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ZTjEdHib1QVTaB4qhg6c0uqXsOaf1xKjuxqdGArG')
    .then(res =>{
      setData(res.data)
      console.log(res)
  
    }).catch(err => console.log(err))

    axios.get('https://api.spaceflightnewsapi.net/v3/blogs')
    .then(res =>{
      setData2(res.data)
      console.log(res.data)
  
    }).catch(err => console.log(err))}, [])

    
    const currentPhoto=()=>{
      if(page === 2){
        return data2[0].imageUrl
      }else if (page === 3){
        return data2[5].imageUrl
      }else if(page === 4){
        return data2[7].imageUrl
      }else if(page === 5){
        return data2[9].imageUrl
      }else{
        return data.url
      }
    }
    const currentTitle=()=>{
      if(page === 2){
        return data2[0].title
      }else if (page === 3){
        return data2[5].title
      }else if(page === 4){
        return data2[7].title
      }else if(page === 5){
        return data2[9].title
      }else{
        return data.title
      }
    }
    const currentPara=()=>{
      if(page === 2){
        return data2[0].summary
      }else if (page === 3){
        return data2[5].summary
      }else if(page === 4){
        return data2[7].summary
      }else if(page === 5){
        return data2[9].summary
      }else{
        return data.explanation
      }
    }
    const currentDate=()=>{
      if(page === 2){
        return data2[0].publishedAt
      }else if (page === 3){
        return data2[5].publishedAt
      }else if(page === 4){
        return data2[7].publishedAt
      }else if(page === 5){
        return data2[9].publishedAt
      }else{
        return data.date
      }
    }
    console.log(currentPhoto(page))
    const increment = (num) => {
      num < 5 ? setPage((page) => page += 1) : setPage((page => page = 1))
    };
    const decrement = (num) => {
      num > 1 ? setPage((page) => page -= 1) : setPage((page => page = 1))
    };
    
  const dePad = isOpen ? {padding:'0'} : null
  const pGrow = isOpen ? { width:'100%'} : null
  const imgGrow = isOpen ? { width:'70rem', Transition:'all 1s' } : null

  
  return (
    <div className="App">
      <div className='top' style={isOpen ? {flexDirection:"column", justifyContent:"center", alignItems:"center"} : null}>
        <div className='h-con'>
          <h1 className='title'>{`${currentTitle()}`}</h1>
          <div className='p-con' style={dePad}>
            <p style={pGrow}>{`${currentPara()}`}</p>
          </div>
        </div>
        <div className='img-con' style={dePad}>
          <p>{` Posted: ${currentDate(page)}`}</p>
          <img src={currentPhoto(page)} style={imgGrow}></img>
          <div className='nxt-img'>
            <button onClick={()=>decrement(page)}className='btns btn1'>{`<<`}</button> 
            <button onClick={()=> setOpen(!isOpen)} className='btns btn2'>{`Full View`}</button>
            <button onClick={()=>increment(page)} className='btns btn3'>{`>>`}</button>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='folderButtons'>
          <button onClick={showFolder >1 || showFolder < 1 ?()=>setshow(1):null} className='fldrs btn-folder3'>1</button>
          <button onClick={showFolder >2 || showFolder < 2 ?()=>setshow(2):null} className='fldrs btn-folder2'>2</button>
          <button onClick={showFolder >3 || showFolder < 3 ?()=>setshow(3):null}className='fldrs btn-folder1'>3</button>
        </div>
        { 
          showFolder === 1 ?<div className='folder tab1'>
            <img src="https://camo.githubusercontent.com/58d5697aa105ca19af3ecbdfcbfb31af99a2395871c45da2ca605f90c11fe0e2/68747470733a2f2f692e696d6775722e636f6d2f6f3178707355322e676966">  
            </img>
            <p>Earth is Unique, but is it Really One of a Kind?
Earth is such a beautiful planet. With all of its’ oceans, plants, animals and land. The variety of life on Earth is what makes it so special. Actually, the fact that Earth has life at all already makes it unique! Earth is the only known planet that can support life (for now at least). Astronomers have been studying deep space looking for another planet with any life at all, but the technology isn’t advanced enough to know whether or not they have found one in their many candidates! Although there are people who disagree, there is evidence that shows there must be another planet like Earth in our universe, or at least another planet with life.</p>
          </div>:null
        }
        { 
          showFolder === 2 ?<div className='folder tab2'></div>:null
        }
        { 
          showFolder === 3 ?<div className='folder tab3'></div>:null
        }
      </div>
    </div>
  );
}

export default App;
