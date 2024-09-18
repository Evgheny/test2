import React, { useEffect, useState } from 'react';

function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/test')
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Attributes</th>
      </tr>
      </thead>
      <tbody>
      {customers.map((customer) => (
        <tr key={customer[0]}>
          <td>{customer[0]}</td>
          <td>{customer[1]}</td>
          <td>{customer[2]}</td>
          <td>{JSON.stringify(customer[3])}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
