
import { useState, useEffect } from 'react';
import './App.css';

import { getTest } from '../../server/controllers/test';

function App() {
  const [data, setData] = useState["hello World"]

  useEffect(() => {
    getTest()
    .then((res) => {setData(res.message)
    })
    .catch((error) => console.log(err));
  }, []);
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
