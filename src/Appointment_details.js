import React from "react";

export default function Appointment_details() {
  return (
    <div className="appointment-container">
      <div className="second-container">
        <div className="detail">
          <h4>Detail</h4>
          <select placeholder="Select Doctor">
            <option>{"Select Doctor"}</option>
            <option>{1}</option>
          </select>
          <div>
            <select placeholder="Select Appointment Channel">
              <option>{"Select Appointment Channel"}</option>
              <option>{2}</option>
            </select>
          </div>
          <input
            className="app-title"
            placeholder="Application Title"
            style={{ width: "97%" }}
          />
          <div></div>
        </div>

        <div className="appointment-detail">
          <h4>Appointment-Detail</h4>
          <div>
            <span>{"Username"}</span>
            <span>{"PID"}</span>
          </div>
          Walk-In-Appointment <input type="checkbox" />
          <div className="user Data">
            <span>
              <select className="time">
                <option>Time</option>
              </select>
            </span>
            <span>
              <input type="date" />
            </span>
          </div>
          <select className="">
            <option>Select Apponintment Type</option>
          </select>
          {/* <h4>Vital Information</h4> */}
          {/* <div>
        <input placeholder="weight"/>
        <input placeholder="SPO2"/>
        <input placeholder="Pulse Rate"/>
    </div> */}
          {/* <input placeholder="Note For Doctor"/> */}
          {/* <div>
      <button>SUBMIT</button>
      </div> */}
        </div>
      </div>
      <div className="vital-info">
        <h4>Vital Information</h4>
        <input placeholder="BP" />
        <input placeholder="Temp" />
        <input placeholder="Height" />
        <input placeholder="Temp" />
        <input placeholder="Height" />
        <input placeholder="Temp" />
        {/* <input placeholder="Height"/> */}
        <div>
          <input placeholder="Reason" style={{ width: "40%" }} />
          <input placeholder="Note a Doctor" style={{ width: "40%" }} />
        </div>
        <div className="">
          <button>RESET</button>
          <button>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
