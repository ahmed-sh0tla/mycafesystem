import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/ordersview')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      axios.delete(`http://localhost:8000/api/ordersview/${id}`)
        .then(() => {
          alert('Order deleted');

          setOrders(orders.filter(order => order.id !== id));
        })
        .catch(error => {
          console.error('Delete failed:', error);
          alert('Failed to delete order');
        });
    }
  };

  return (
    <div>
      <p className='text-white fs-3'>All Orders</p>
      <ul className='text-white'>
        {orders.map(order => (
          <li className='mt-3' key={order.id}>
            <span className='text-warning'>Customer name :</span> {order.customer_name} - <span className='text-warning'>Table number : </span> {order.table_number} - <span className='text-warning'>Type : </span>{order.type} - <span className='text-warning'>Status : </span>{order.status}
            <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
                <button
              className="btn btn-secondary btn-sm ms-2"
              onClick={() => navigate(`/update-order/${order.id}`)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Orders;
