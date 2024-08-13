
import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  const [Data, setData] = useState([]); //! Initialize Data as an empty array

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data)); 
    
  }, []);

  return (
    <> 
      <h1>Axios React</h1>
      <div className="grid">           
      {Data.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h1>{id}</h1>
            <h2>{title.slice(0,15).toUpperCase()}</h2>
            <p>{body.slice(0,100)}</p>
          </div>
        );
      })
        }
        </div>
    </>
  );   
};

export default App;