import React from "react";
import { useNavigate } from "react-router-dom";

const Color = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.color.value) {
      localStorage.setItem('color', event.target.elements.color.value)
      navigate('/code')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="width_div">
        <div className="inputs_div">
          <div>
            <div className="colum1">
              <div style={{ fontSize: "20px" }}>COLOUR</div>
            </div>
            <div className="inputDiv">
              <input defaultValue={localStorage.getItem('color')} type='text' name="color" className="inputStyles" />
            </div>
          </div>
        </div>
        <div className="Right_items">
          <div className="columDiv">
            <div className="itemTxt">BLUE</div>
            <div className="itemTxt">RED</div>
            <div className="itemTxt">BLACK</div>
            <div className="itemTxt">ORANGE</div>
          </div>
          <div className="nextBtn">
            <button type="submit" className="btnstyles">NEXT</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Color;
