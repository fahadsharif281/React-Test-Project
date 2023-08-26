import React, { useEffect, useState } from "react";
import "./ListView.css";
import { useNavigate } from "react-router-dom";
const arr = [
  {
    name: "John",
    carName: "Audi",
    color: "Red",
  },
  {
    name: "Harry",
    carName: "BMW",
    color: "Orange",
  },
  {
    name: "Harry",
    carName: "BMW",
    color: "Black",
  },
];
const ListView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const listView = JSON.parse(localStorage.getItem('listview'));
    setData(listView)
  }, []);

  const handleDelete = (id) => {
    const findIndex = data.findIndex((listId) => listId.id === id);
    data.splice(findIndex, 1);
    localStorage.setItem('listview', JSON.stringify([...data]));
    setData([...data])
  }

  const handleEdit = (item) => {
    localStorage.setItem('editId', item.id);
    localStorage.setItem('name', item.name)
    localStorage.setItem('make', item.make)
    localStorage.setItem('code', item.code)
    localStorage.setItem('color', item.color)
    navigate('/make')
  }

  return (
    <div>
      <div className="MainContainer">
        <div className="innerdive">
          <div>
            <div className="col1">
              <div>List View</div>
              <button
                onClick={() => {
                  navigate('/make');
                  localStorage.setItem('name', '')
                  localStorage.setItem('make', '')
                  localStorage.setItem('code', '')
                  localStorage.setItem('color', '')
                  localStorage.setItem('editId', '')
                }}
                className="button0">Add</button>
            </div>
            {data && data?.map((item) => (
              <div key={item.id} className="con">
                <div className="con-item">{item.name}</div>
                <div className="con-item">{item.make}</div>
                <div className="con-item">{item.color}</div>
                <div>
                  <button onClick={() => handleDelete(item.id)} className="button1">Delete</button>
                  <button onClick={() => handleEdit(item)} className="button2">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;