import React from "react";
import { useNavigate } from "react-router-dom";

const GeneratedText = () => {
  const navigate = useNavigate()
  const make = localStorage.getItem('make');
  const code = localStorage.getItem('code');
  const color = localStorage.getItem('color');
  const editID = localStorage.getItem('editId');

  const handleClick = () => {
    const listView = JSON.parse(localStorage.getItem('listview'));
    if (editID) {
      for (const item of listView) {
        if (item.id == editID) {
          item.id = editID;
          item.name = localStorage.getItem('name');
          item.color = localStorage.getItem('color');
          item.make = localStorage.getItem('make')
        }
      }
      localStorage.setItem('listview', JSON.stringify(listView));
      navigate('/');
    } else {
      const newItem = {
        id: Date.now(),
        name: localStorage.getItem('name'),
        color: localStorage.getItem('color'),
        make: localStorage.getItem('make'),
        code: localStorage.getItem('code'),
      };
      const updatedListView = [...listView, newItem];
      localStorage.setItem('listview', JSON.stringify(updatedListView));
      navigate('/');
    }
  };

  return (
    <div className="width_div">
      <div className="inputs_div">
        <div>
          <p>Generated Text</p>
          <p>I have a {make} and the colour is {color}.</p>
          {color.toLowerCase() === 'red' && <p>THE CAR IS RED! NICE!!</p>}
          <p>REF: {code}</p>
        </div>
      </div>
      <div className="Right_items">
        <div className="nextBtn">
        </div>
        <div className="nextBtn">
          <button onClick={handleClick} className="btnstyles">Save</button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedText;
