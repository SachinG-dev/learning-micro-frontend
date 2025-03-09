import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import "./CroHome.css";

const flightDetails = [
  {
    flightNo: "AI-101",
    origin: "Delhi",
    destination: "Mumbai",
    occupancy: 78,
    details: "Depart: 10 AM, Arrive: 12 PM, Duration: 2h",
  },
  {
    flightNo: "6E-202",
    origin: "Bangalore",
    destination: "Delhi",
    occupancy: 85,
    details: "Depart: 3 PM, Arrive: 6 PM, Duration: 3h",
  },
  {
    flightNo: "SG-303",
    origin: "Mumbai",
    destination: "Chennai",
    occupancy: 92,
    details: "Depart: 8 AM, Arrive: 10:30 AM, Duration: 2.5h",
  },
  {
    flightNo: "UK-404",
    origin: "Kolkata",
    destination: "Hyderabad",
    occupancy: 65,
    details: "Depart: 4 PM, Arrive: 6 PM, Duration: 2h",
  },
];

const occupancyData = flightDetails.map((flight) => ({
  flightNo: flight.flightNo,
  occupancy: flight.occupancy,
}));

const CroHome = ({ title, flightCodeFromParent, setFlightCodeFromParent }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  useEffect(() => {
    if (selectedFlight !== flightCodeFromParent) {
      setSelectedFlight(flightCodeFromParent);
    }
    console.log({ flightCodeFromParent, setFlightCodeFromParent });
  }, [flightCodeFromParent]);

  return (
    <div
      className="cro-home"
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
          <h3 style={{ color: "#d9534f" }}>Flight Information</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flightDetails.map((flight) => (
              <li
                key={flight.flightNo}
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
                    value={flight.flightNo}
                    checked={flight.flightNo === selectedFlight}
                    onChange={() => {
                      setSelectedFlight(flight.flightNo);
                      if (setFlightCodeFromParent) {
                        setFlightCodeFromParent(flight.flightNo);
                      }
                    }}
                  />
                  <strong style={{ marginLeft: "8px" }}>
                    {flight.flightNo}
                  </strong>{" "}
                  - {flight.origin} ➜ {flight.destination}
                  <div style={{ fontSize: "small", color: "#a94442" }}>
                    {selectedFlight === flight.flightNo && flight.details}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ width: "55%" }}>
          <h3 style={{ color: "#d9534f" }}>Occupancy Chart</h3>
          <LineChart width={500} height={300} data={occupancyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="flightNo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="occupancy"
              stroke="#d9534f"
              strokeWidth={2}
            />
          </LineChart>
        </section>
      </div>
    </div>
  );
};

export default CroHome;
