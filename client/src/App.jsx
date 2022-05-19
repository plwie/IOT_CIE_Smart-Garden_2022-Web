import './App.css';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import ProgressBar from './component/progress';
import axios from 'axios';
import { useState, useEffect } from 'react';

//Firebase Setup
const firebaseConfig = {
  apiKey: "AIzaSyCWbT1AaMcrxS5rCVS7j8fIka1RSUpyuEE",
  authDomain: "iotgreenhouse-a5b3a.firebaseapp.com",
  databaseURL: "https://iotgreenhouse-a5b3a-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "iotgreenhouse-a5b3a",
  storageBucket: "iotgreenhouse-a5b3a.appspot.com",
  messagingSenderId: "1015580356691",
  appId: "1:1015580356691:web:ef9ea09b6cdca3690356a6",
  measurementId: "G-B93B4H7958"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = getDatabase();


function App() {


  const [soilInfo, setSoilInfo] = useState([]);
  const [ambient, setAmbient] = useState([]);
  
  const getAmbient = async () => {
    const response = await axios.get("http://localhost:8081/ambient")
    setAmbient(response.data)
  }

  useEffect(() => {
    getAmbient()
  },[])

  const getSoil = async () => {
    const response = await axios.get("http://localhost:8081/soil_info")
    setSoilInfo(response.data)
  }

  useEffect(() => {
    getSoil()
  },[])

  const [sunroof_status, setSSstate] = useState('OFF');

     const sunClickHandler = () => {
         setSSstate('loading');
         setTimeout(() => {
           if (sunroof_status === "OFF"){
            setSSstate('On');
            set(ref(database), {
              sunroof_status: 1
            });

           } else {
            setSSstate('OFF');
            set(ref(database), {sunroof_status: 0});
         }
        }, 2000);
     }

  const soil_info1 = soilInfo[soilInfo.length-2];
  const soil_info2 = soilInfo[soilInfo.length-1];


  const moisture1 = soil_info1["moisture_level"];
  const N1 = soil_info1["nitrogen_level"];
  const P1 = soil_info1["phosphorus_level"];
  const K1 = soil_info1["potassium_level"];

  const moisture2 = soil_info2["moisture_level"];
  const N2 = soil_info2["nitrogen_level"];
  const P2 = soil_info2["phosphorus_level"];
  const K2 = soil_info2["potassium_level"];

  const temp = ambient[ambient.length-1]["temperature"];
  const humid = ambient[ambient.length-1]["humidity_level"];


  return (
    <body>
      <div className='Main'>
        <div className='Main_header'>
          <h1>Smart GreenHouse Dashboard</h1>
        </div>
        <div className='Row'>
          <div className='Column'>
            <div className='Plant_box'>
              <h1>Pot NO.1</h1>
              <h2>Moisture</h2>
              <h3>{moisture1}</h3>
              <h2>Nitrogen</h2>
              <h3>{N1}</h3>
              <h2>Phosphorus</h2>
              <h3>{P1}</h3>
              <h2>Potassium</h2>
              <h3>{K1}</h3>
            </div>
          </div>
          <div className='Column'>
            <div className='Plant_box'>
              <h1>Pot NO.2</h1>
              <h2>Moisture</h2>
              <h3>{moisture2}</h3>
              <h2>Nitrogen</h2>
              <h3>{N2}</h3>
              <h2>Phosphorus</h2>
              <h3>{P2}</h3>
              <h2>Potassium</h2>
              <h3>{K2}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='Right'>
        <div className='Watering_box'>
          <h1 className='Watering_head'> Water & Fertilizer Status</h1>
          <h2 className='Watering'>Water Status</h2>
          <ProgressBar color={"#34dbf4"} width={"70px"} value={75} max={100}/>
          <h2 className='Watering'>Fertilizer Status</h2>
          <ProgressBar color={"#33a2a2"} width={"70px"} value={75} max={100}/>
        </div>
        <div className='Ambient_box'>
          <h1 className='Watering_head'> Ambient Status</h1>
          <h2 className='Watering'>Temperature</h2>
          <h3>{temp}</h3>
          <h2 className='Watering'>Humidity</h2>
          <h3>{humid}</h3>
          <h2 className='Watering'>Sunshade Status</h2>
          <h3>{sunroof_status}</h3>
          <button className={"button"} onClick={sunClickHandler}></button>
        </div>
      </div>
    </body>
  );
}

export default App;
