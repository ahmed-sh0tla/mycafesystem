import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DailyReport() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    axios.get('/api/daily-report')
      .then(response => {
        setReport(response.data);
      })
      .catch(error => {
        console.error("Error fetching daily report:", error);
      });
  }, []);

  // إذا البيانات بعد ما وصلتش
  if (!report) {
    return <div className="p-4">Loading daily report...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-warning text-white">
           Daily Report - {report.date}
        </div>
        <div className="card-body bg-dark">
          <div className="row mb-4">
            <div className="col-md-6 mb-3">
              <label className="form-label text-white">Total Items Added Today</label>
              <input
                type="text"
                value={report.total_count}
                readOnly
                className="form-control"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label text-white">Total Quantity</label>
              <input
                type="text"
                value={report.total_quantity}
                readOnly
                className="form-control"
              />
            </div>
          </div>

          <h5 className="mb-3 text-white"> Materials Added:</h5>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody className="table-dark">
                {report.materials.map(material => (
                  <tr key={material.id}>
                    <td className='text-warning'>{material.id} </td>
                    <td >{material.name}</td>
                    <td>{material.quantity}</td>
                    <td>{material.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
