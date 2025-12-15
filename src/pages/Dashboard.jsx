import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

const Dashboard = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/schools");
      setSchools(res.data);
    } catch (err) {
      alert("Error fetching data");
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("School List", 20, 20);

    schools.forEach((s, i) => {
      doc.text(`${i + 1}. ${s.name}`, 20, 30 + i * 8);
    });

    doc.save("schools.pdf");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📚 School List</h1>

      <button
        onClick={downloadPDF}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Download PDF
      </button>

      <ul className="border rounded p-4 space-y-2">
        {schools.map((s, i) => (
          <li key={i} className="border-b pb-2">
            {s.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
