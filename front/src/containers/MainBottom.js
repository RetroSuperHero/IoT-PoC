import React, { useState, useEffect } from 'react';
import '../App.css';
import carPool from '../carPool';

const MainBottom = (props) => {
  const [necessities, setNecessities] = useState(0)
  const [usages, setUsages] = useState(0)

  useEffect(() => {
    carPool.methods.getNecessitiesNumber().call()
      .then(fetchedNumber => setNecessities(fetchedNumber));
    carPool.methods.getUsagesNumber().call()
      .then(fetchedNumber => setUsages(fetchedNumber));
  }, [])

  return (      
    <div className="bottom">
        <div className="bottom-container usages">
            <h2 style={{margin: 0, color: "#282d35", fontWeight: 200, fontSize: 25}}>Usages:</h2>
            {usages}
        </div>
        <div className="bottom-container necessities">
            <h2 style={{margin: 0, color: "#282d35", fontWeight: 200, fontSize: 25}}>Necessities:</h2>
            {necessities}
        </div>
    </div>
  );
}

export default MainBottom;
