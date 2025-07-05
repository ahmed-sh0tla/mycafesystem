import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/menusview')
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      axios.delete(`http://localhost:8000/api/menusview/${id}`)
        .then(() => {
          alert('Item deleted');
          setMenus(menus.filter(menu => menu.id !== id));
        })
        .catch(error => {
          console.error('Delete failed:', error);
          alert('Failed to delete item');
        });
    }
  };

  return (
    <div>
      <p className='text-white fs-3'>Menu items</p>
      <ul className='text-white'>
        {menus.map(menu => (
          <li className='mt-3' key={menu.id}>
            <span className='text-warning'>price :</span> {menu.price} - 
            <span className='text-warning'> components :</span> {menu.components} - 
            <span className='text-warning'> categories :</span> {menu.categories}
            
            <button
              className="btn btn-danger btn-sm ms-3"
              onClick={() => handleDelete(menu.id)}
            >
              Delete
            </button>

            <button
              className="btn btn-secondary btn-sm ms-2"
              onClick={() => navigate(`/update-menu/${menu.id}`)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
