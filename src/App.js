
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';


function App() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Replace 'data.csv' with the path to your CSV file.
    fetch('/demo/dashboard/src/data.csv')
      .then((response) => response.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true, // Use the first row as headers
          dynamicTyping: true, // Convert numeric values to numbers
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
          <span>{row.column2}</span>
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default App;
