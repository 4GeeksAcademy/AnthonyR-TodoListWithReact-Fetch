import React, { useState } from "react";

//create your first component
const Card = (props) => {
  let secondCardStyles = {
    margin: "auto",
    marginTop: "-15px",
    width: "34.5rem",
    height: "20px",
    zIndex: "-1",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    background: "white",
    borderRadius: "0",
    boxShadow: "0px 0px 5px 1px #cbcbcb",
  };

  let thirdCardStyles = {
    margin: "auto",
    marginTop: "-14.5px",
    width: "34rem",
    height: "20px",
    zIndex: "-2",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    background: "white",
    borderRadius: "0",
    boxShadow: "0px 0px 5px 1px #cbcbcb",
  };

  let inputStyles = {
    border: "0px",
    color: "#797979",
    fontSize: "25px",
    fontWeight: "100",
  };

  let [taskList, setTaskList] = useState([]);
  let [newtask, setNewTask] = useState("");
  let [hoveredTask, setHoveredTask] = useState(null);

  return (
    <>
      <div className="card" style={props.cardStyle}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <input
              className="form-control"
              type="text"
              aria-label="input example"
              placeholder="What needs to be done?"
              value={newtask}
              style={inputStyles}
              onChange={(e) => {
                setNewTask(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (e.target.value !== "") {
                    setTaskList((prev) => {
                      return [...prev, newtask];
                    });
                    setNewTask("");
                  }
                }
              }}
            />
          </li>
          {taskList.length === 0 ? (
            <li className="list-group-item px-4" style={{ color: "#797979" }}>
              There are no pending tasks, add tasks...
            </li>
          ) : (
            taskList.map((task, idx) => {
              return (
                <li
                  key={idx}
                  className="list-group-item d-flex justify-content-between align-items-center px-4"
                  style={{ color: "#797979" }}
                  onMouseEnter={() => {
                    setHoveredTask(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredTask(null);
                  }}
                >
                  {task}
                  <i
                    className="fa-solid fa-x exis"
                    style={{
                      visibility: hoveredTask === idx ? "visible" : "hidden",
                      cursor: "pointer",
                      color: "#f0cace",
                      fontWeight: "100",
                    }}
                    onClick={(e) => {
                      setTaskList((prev) =>
                        prev.filter((task, i) => i !== idx)
                      );
                    }}
                  ></i>
                </li>
              );
            })
          )}
        </ul>
        <div
          className="card-footer"
          style={{ height: "38px", fontSize: "15px" }}
        >
          {taskList.length} Item left
        </div>
      </div>
      <div className="card" style={secondCardStyles}></div>
      <div className="card" style={thirdCardStyles}></div>
    </>
  );
};

export default Card;