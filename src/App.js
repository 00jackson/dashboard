
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';


function App() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    fetch('/demo/dashboard/src/data.csv')
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true, 
          dynamicTyping: true, 
          complete: (result) => {
            setCsvData(result.data);
          },
        });
      });
  }, []);

  return (
    <div>
      {/* Use csvData in your component */}
      {csvData.map((row, index) => (
        <div key={index}>
          <span>{row.column1}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
