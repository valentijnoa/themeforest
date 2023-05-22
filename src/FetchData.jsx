import React from "react";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import HeaderOne from "./components/header/HeaderOne";

const FetchData = () => {
  const [Column, setColumn] = useState([]);
  const [Records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://api.technoviumunlimited.nl/v1/games")
      .then((res) => res.json())
      .then((data) => {
        setColumn(Object.keys(data.games[0]));
        setRecords(data.games);
      });
  }, []);

  return (
    <>
      <HeaderOne />
      <section className="contact-area black-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="contact-wrap">
                <div className="contact-title">
                  <h2 className="title">games</h2>
                  <table className="table">
                    <thead>
                      <tr>
                        {Column.map((c, i) => (
                          <th key={i}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Records.map((record, i) => (
                        <tr key={i}>
                          <td>{record.created_seconds}</td>
                          <td>{record.category}</td>
                          <td>{record.created_by}</td>
                          <td>{record.name}</td>
                          <td>{record.created_nanoseconds}</td>
                          <td>{record.id}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FetchData;
