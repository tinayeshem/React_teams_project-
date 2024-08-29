import React from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';
import '../assets/styles/Home.css';

const names = [
  { name: "John", Speciality: "Nodejs Dev" },
  { name: "Susan", Speciality: "ReactDev" },
  { name: "Bill", Speciality: "Java Dev" },
  { name: "Jane", Speciality: "C++ Dev" },
  { name: "Aulyn", Speciality: "Laravel Dev" },
  { name: "David", Speciality: "Spring Dev" },
  { name: "Loveness", Speciality: "Nodejs Dev" },
  { name: "Moses", Speciality: "Python Dev" },
  { name: "Justice", Speciality: "Java Dev" },
  { name: "Ian", Speciality: "Systems Dev" },
  { name: "Youry", Speciality: "Nodejs Dev" },
   { name: "James", Speciality: "Nodejs Dev" }
];

function Home() {
  const num_Rows = 4;
  const num_Columns = 3;

  // Create rows and columns dynamically inside the component function
  const rows = [];
  let count = 0;

  

  for (let i = 0; i < num_Rows; i++) {
    const columns = [];

    for (let j = 0; j < num_Columns; j++) {
      if (count < names.length) {
        columns.push(
          <div className="col-sm" key={`col-${i}-${j}`}>
            <Card name={names[count].name} spec={names[count].Speciality} />
          </div>
        );
        count++;
      }
    }

    rows.push(
      <div className="row" key={`row-${i}`}>
        {columns}
      </div>
    );
  }

  return (
    <>
      <div className="page">
        <Navbar />
        <div className="container">
          {rows}
        </div>
      </div>
    </>
  );
}

export default Home;
