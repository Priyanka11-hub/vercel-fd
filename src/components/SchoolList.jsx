import React, { useEffect, useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

const SchoolList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/schools");
        setSchools(res.data); // ✅ correct
      } catch (error) {
        console.error("Error fetching schools", error);
      }
    };

    fetchSchools();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("School List", 20, 20);

    let y = 30;

    schools.forEach((school, index) => {
      doc.text(`${index + 1}. ${school.name}`, 20, y);
      y += 8;

      if (y > 280) {
        doc.addPage();
        y = 20;
      }
    });

    doc.save("schools.pdf");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">School List</h1>

      <ul className="mb-6 list-disc list-inside">
        {schools.map((school) => (
          <li key={school._id}>{school.name}</li>
        ))}
      </ul>

      <button
        onClick={downloadPDF}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  );
};

export default SchoolList;
