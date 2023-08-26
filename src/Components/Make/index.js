import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
const Make = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.name.value && event.target.elements.make.value) {
      localStorage.setItem('name', event.target.elements.name.value)
      localStorage.setItem('make', event.target.elements.make.value)
      navigate('/color')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="width_div">
        <div className="inputs_div">
          <div>
            <div className="colum1">
              <div style={{ fontSize: "20px" }}>Name</div>
            </div>
            <div className="inputDiv">
              <input defaultValue={localStorage.getItem('name')} type='text' name="name" className="inputStyles" />
            </div>
          </div>
          <div className="col2">
            <div className="colum1">
              <div style={{ fontSize: "20px" }}>Make</div>
            </div>
            <div className="inputDiv">
              <input defaultValue={localStorage.getItem('make')} type='text' name="make" className="inputStyles" />
            </div>
          </div>
        </div>
        <div className="Right_items">
          <div className="columDiv">
            <div className="itemTxt">AUDI</div>
            <div className="itemTxt">BMW</div>
            <div className="itemTxt">VAUXAL</div>
            <div className="itemTxt">MERCEDES</div>
            <div className="itemTxt">PEUGEOT</div>
            <div className="itemTxt">RENAULT</div>
          </div>
          <div className="nextBtn">
            <button type='submit' className="btnstyles">NEXT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Make;
