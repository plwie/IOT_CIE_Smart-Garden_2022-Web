import React, { useState } from "react";
import "../src/component/Card.css"
import ReactiveButton from "reactive-button";
import ProgressBar from "./component/ProgressBar.jsx"
import Axios from 'axios'

export default function App() {

  const [plantStat, setPlantStat] = useState([]);
  Axios.get("http://localhost:3001/plant_pot").then((response) => {
      setPlantStat(response.data)
  })
  plantStat.map((val, key) => {
    hvd1 = val.date_harvest
  })
  // Take data from database
  let water_status = 75;
  let fertilizer_status = 50;
  let temperature = 25;
  let humidity = 100;
  let moisture1 = 100;
  let moisture2 = 80;
  let N1 = 30;
  let N2 = 25;
  let P1 = 30;
  let P2 = 25;
  let K1 = 17;
  let K2 = 15;
  let hvd1;
  let hvd2;

  const [sunshade_status, setSSstate] = useState('OFF');

    const sunClickHandler = () => {
        setSSstate('loading');
        setTimeout(() => {
          if (sunshade_status === "OFF"){
            setSSstate('On');
          } else {
            setSSstate('OFF');
          }
        }, 2000);
    }

    const [coolingfan_status, setfanState] = useState('OFF');

    const fanClickHandler = () => {
        setfanState('loading');
        setTimeout(() => {
          if (coolingfan_status === "OFF"){
            setfanState('On');
          } else {
            setfanState('OFF');
          }
        }, 2000);
    }
  
  // const [value, setValue] = useState(0);

  // useEffect(() => {
    // const interval = setInterval(() => {
    //   setValue(oldValue => {
    //     const newValue = oldValue + 10;

    //     if (newValue === 100) {
    //       clearInterval(interval);
    //     }

    //     return newValue;
    //   });
    // }, 1000);
  // }, []);
  return (
    <body>
      {/* Left Side */}
      <div className="leftcolumn">
        {/* <img className="logo" src={"https://media.istockphoto.com/vectors/greenhouse-with-glass-walls-agricultural-building-cartoon-vector-vector-id1262621399?k=20&m=1262621399&s=170667a&w=0&h=gKCRh7FegfrjtKe_XQh3HznMuwPdNecr1pXGdWVVVgc="} alt="Logo" /> */}
        <div className="left_box">
          <div className="row">
            <div className="column">
              <div className="pot_box">
                <div className="__text_box">
                  <h2>Pot NO.1</h2>
                </div>
                <img className="lemon" src={"https://www.technologychaoban.com/wp-content/uploads/2018/10/IMG_6630-e1560853153371.jpg"}/>
                <div>
                  <div className="pot_info">
                    <div className="__pot_border">
                      Moisture: {moisture1} 
                      <br/><br/><br/>
                      Nitrogen: {N1}
                      <br/><br/><br/>
                      Phosphorus: {P1}
                      <br/><br/><br/>
                      Protassium: {K1}
                      <br/><br/><br/>
                      Harvest date: {hvd1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="pot_box">
                <div className="__text_box">
                  <h2>Pot NO.2</h2>
                </div>
                <img className="lemon" src={"https://www.nanagarden.com/Picture/Product/400/298906.jpg"}/>
                <div className="pot_info">
                  <div className="__pot_border">
                    Moisture: {moisture2} 
                    <br/><br/><br/>
                    Nitrogen: {N2}
                    <br/><br/><br/>
                    Phosphorus: {P2}
                    <br/><br/><br/>
                    Protassium: {K2}
                    <br/><br/><br/>
                    Harvest date: {hvd2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="rightcolumn">
        <div className="card">
          <div className="left_ele">
            <h3 className="left_text_box">Water & Fertilizer Status</h3>
            <div className="progress_bar">
              {/* Water & Fertilizer status bar value change to % of water and fertilizer left */}
              <h5> 
                <span>Water Status ({water_status}%)</span>
              <span>
                <ProgressBar color={"#34dbf4"} width={"150px"} value={water_status} max={100} />
                <br/><br/>
                <span>Fertilizer Status ({fertilizer_status}%)</span>
                <ProgressBar color={"#33a2a2"} width={"150px"} value={fertilizer_status} max={100} />
              </span>
              </h5>
            </div>
          </div>
          <div className="left_ele">
            <h3 className="left_text_box">Ambient Status</h3>
              <div className="__ambient">
                <div className="__ambient_border">
                  <h4>Temperature</h4>
                  <h5>{temperature} c</h5>
                </div>
                <div className="__ambient_border">
                  <h4>Humidity</h4>
                  <h5>{humidity}</h5>
                </div>
                <div className="__ambient_border">
                <h4>Sunshade Status</h4>
                <h5>{sunshade_status}</h5>
                <h5><ReactiveButton
                idleText={"Turn On/Off"}
                rounded={true}
                color={'blue'}
                onClick={sunClickHandler}
                /></h5>
              </div>
              <div className="__ambient_border">
                <h4>Cooling fan</h4>
                <h5>{coolingfan_status}</h5>
                <h5><ReactiveButton
                idleText={"Turn On/Off"}
                rounded={true}
                color={'blue'}
                onClick={fanClickHandler}
                /></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}