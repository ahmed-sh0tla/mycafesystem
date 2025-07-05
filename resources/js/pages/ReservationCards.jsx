import React, { useState } from 'react';

function ReservationCards() {
  const [tables, setTables] = useState([
    { id: 1, name: "Table 1", status: "ready" },
    { id: 2, name: "Table 2", status: "busy" },
    { id: 3, name: "Table 3", status: "ready" },
    { id: 4, name: "Table 4", status: "busy" },
    { id: 5, name: "Table 5", status: "ready" },
    { id: 5, name: "Table 6", status: "busy" },
    { id: 5, name: "Table 7", status: "busy" },
    { id: 5, name: "Table 8", status: "ready" }
  ]);

  const handleReserve = (id) => {
    setTables(prevTables => {
  return prevTables.map(table => {
    if (table.id === id) {
      return {id: table.id,name: table.name,status: 'busy'};
    }
    return table;
  });
});


    
    setTimeout(function() {
  setTables(function(prevTables) {
    return prevTables.map(function(table) {
      if (table.id === id) {
        return {
          id: table.id,
          name: table.name,
          status: 'ready'
        };
      } else {
        return table;
      }
    });
  });
}, 30000);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tables Reservation</h2>
      <div className="row">
        {tables.map(table => (
          <div className="col-md-3 mb-4" key={table.id}>
            <div className={`card shadow-sm ${table.status === 'busy' ? 'border-danger' : 'border-success'}`}>
              <div className="card-body">
                <h5 className="card-title">{table.name}</h5>
                <p className={`card-text ${table.status === 'busy' ? 'text-danger' : 'text-success'}`}>
                  Status: {table.status}
                </p>
                {table.status === 'ready' && (
                  <button className="btn btn-primary" onClick={() => handleReserve(table.id)}>
                    Reserve
                  </button>
                )}
                {table.status === 'busy' && (
                  <button className="btn btn-secondary" disabled>Busy (auto reset)</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReservationCards;
