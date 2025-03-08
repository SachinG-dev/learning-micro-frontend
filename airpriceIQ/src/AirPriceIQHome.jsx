import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "./AirPriceIQHome.css";

const airlinePrices = [
  { flightCode: "AI-101", airline: "Air India", price: 5500 },
  { flightCode: "6E-202", airline: "IndiGo", price: 4700 },
  { flightCode: "SG-303", airline: "SpiceJet", price: 5200 },
  { flightCode: "UK-404", airline: "Vistara", price: 4900 },
];

const AirPriceIQHome = ({ title }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  return (
    <div
      className="airpriceiq-home"
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff5f5",
      }}
    >
      <header
        style={{ textAlign: "center", color: "#d9534f", marginBottom: "20px" }}
      >
        <h2>{title}</h2>
      </header>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <section style={{ width: "40%" }}>
          <h3 style={{ color: "#d9534f" }}>Airline Prices</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {airlinePrices.map((flight) => (
              <li
                key={flight.flightCode}
                style={{
                  margin: "10px 0",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "#ffecec",
                }}
              >
                <label>
                  <input
                    type="radio"
                    name="flight"
                    onChange={() => setSelectedFlight(flight.flightCode)}
                  />
                  <strong style={{ marginLeft: "8px" }}>
                    {flight.flightCode}
                  </strong>{" "}
                  - {flight.airline}
                  <div style={{ fontSize: "small", color: "#a94442" }}>
                    {selectedFlight === flight.flightCode &&
                      `Price: ₹${flight.price}`}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ width: "55%" }}>
          <h3 style={{ color: "#d9534f" }}>Best Price Comparison</h3>
          <BarChart width={500} height={300} data={airlinePrices}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="airline" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#d9534f" />
          </BarChart>
        </section>
      </div>
    </div>
  );
};

export default AirPriceIQHome;
