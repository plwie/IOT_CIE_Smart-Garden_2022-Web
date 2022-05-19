import './App.css';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, set } from "firebase/database";
import ProgressBar from './component/progress';
import axios from 'axios';
import { useState, useEffect } from 'react';
import waterIcon from'./component/h2o.png'
import plantIcon from'./component/plant.png';
import tempIcon from'./component/temperatures.png';
import logoIcon from'./component/greenhouse-2.png';

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = getDatabase();


function App() {


  const [soilInfo, setSoilInfo] = useState([]);
  const [ambient, setAmbient] = useState([]);
  const [waterHeightGet, setWaterLevel] = useState([]);
  
  const getAmbient = async () => {
    const response = await axios.get("http://localhost:8081/ambient")
    setAmbient(response.data)
  }

  const getSoil = async () => {
    const response = await axios.get("http://localhost:8081/soil_info")
    setSoilInfo(response.data)
  }

  const getWater = async () => {
    const response = await axios.get("http://localhost:8081/water")
    setWaterLevel(response.data)
  }

  useEffect(() => {
    getWater()
    getAmbient()
    getSoil()
  })

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

  const soil_info = soilInfo[soilInfo.length-2];


  const moisture = soil_info["moisture_level"];
  const N = soil_info["nitrogen_level"];
  const P = soil_info["phosphorus_level"];
  const K = soil_info["potassium_level"];
  const F = soil_info["fertility"];

  const temp = ambient[ambient.length-1]["temperature"];
  const humid = ambient[ambient.length-1]["humidity_level"];

  const waterHeight = waterHeightGet[waterHeightGet.length-1]["water_level"]
  const waterLevel = 16 - waterHeight;
  const waterLeft = waterLevel/15 *100

  return (
    <body>
      <div className='Main'>
          <div className='Main_header'>
            <img  src={logoIcon} className="logo_img" alt="logoicon"/>
          </div>
        <div className='Row'>
          <div className='Column'>
            <div className='Plant_box'>
              <img  src={plantIcon} className="plant_img" alt="plant"/>
              <h2 className='Watering'>Moisture</h2>
              <h3 className='fetches'>{moisture}</h3>
              <h2 className='Watering'>Fertility</h2>
              <h3 className='fetches'>{F} %</h3>
              <h2 className='Watering'>Nitrogen</h2>
              <h3 className='fetches'>{N}</h3>
              <h2 className='Watering'>Phosphorus</h2>
              <h3 className='fetches'>{P}</h3>
              <h2 className='Watering'>Potassium</h2>
              <h3 className='fetches'>{K}</h3>
            </div>
          </div>
          <div className='Column'>
            <div className='Plant_box'>
              <img  src={plantIcon} className="plant_img" alt="plant"/>
              <h2 className='Watering'>Moisture</h2>
              <h3 className='fetches'>{moisture}</h3>
              <h2 className='Watering'>Fertility</h2>
              <h3 className='fetches'>{F} %</h3>
              <h2 className='Watering'>Nitrogen</h2>
              <h3 className='fetches'>{N}</h3>
              <h2 className='Watering'>Phosphorus</h2>
              <h3 className='fetches'>{P}</h3>
              <h2 className='Watering'>Potassium</h2>
              <h3 className='fetches'>{K}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='Right'>
        <div className='Watering_box'>
          <h1 className='Watering_head'> Water Status</h1>
          <img  src={waterIcon} className="water_img" alt="watericon"/>
          <h2 className='Watering'>Water Left {Math.round(waterLeft)} %</h2>
          <ProgressBar color={"#34dbf4"} width={"70px"} value={waterLevel} max={15}/>
        </div>
        <div className='Ambient_box'>
          <h1 className='Watering_head'> Ambient Status</h1>
          <img  src={tempIcon} className="temp_img" alt="temp"/>
          <h2 className='Watering'>Temperature</h2>
          <h3 className='fetches'>{temp}</h3>
          <h2 className='Watering'>Humidity</h2>
          <h3 className='fetches'>{humid}</h3>
          <h2 className='Watering'>Sunshade Status</h2>
          <button className="button" onClick={sunClickHandler}>{sunroof_status}</button>
        </div>
      </div>
    </body>
  );
}

export default App;
