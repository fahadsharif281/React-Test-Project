import React from "react";
import { useNavigate } from "react-router-dom";

const Code = () => {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.elements.code.value) {
      localStorage.setItem('code', event.target.elements.code.value)
      navigate('/text')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="width_div">
        <div className="inputs_div">
          <div>
            <div className="colum1">
              <div style={{ fontSize: "20px" }}>CODE</div>
            </div>
            <div className="inputDiv">
              <input defaultValue={localStorage.getItem('code')} name="code" className="inputStyles" />
            </div>
          </div>
        </div>
        <div className="Right_items">
          <div className="nextBtn">
          </div>
          <div className="nextBtn">
            <button type="submit" className="btnstyles">DONE</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Code;
