import logo from './logo.svg';
import './App.css';
import React from 'react'
import gmc from './gmc.jpg'

function App() {
  return (
  <>
    <div style={{ border:"solid black",maxwidth:100}}>

    <h1 className="title_red">Thabet Hamdi</h1>
   
    <br /> 
   
    <img  className ="img_hamdi" src="hamdi.jpg" style={{width:'150px'}} />
    <h4  className ="txt"> J'ai passé deux mois chez go my code </h4>

    <img  className ="img_gmc" src={gmc} style={{width:'150px'}} />
   
   </div> 
   
   <video width="320" height="240" controls>
   
    <source src="myVideo.mp4" type="video/mp4" />
   
   </video>
   </>
  );
}

export default App;
