import React, { useReducer } from "react";

export default function StateTutorial() {
  const reducer = (state, action) => {
    switch (action) {
      case "nhan2":
        return state * 2;
      case "chia2":
        return state / 2;
      case "xoa":
        return 0;
      default:
        return state;
    }
  };
  const reducer2 = (state, action) => {
    switch (action.type) {
      case "GAN":
        return action.data;

      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 2);
  const [count2, dispatch2] = useReducer(reducer2, 0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "toggleShowtext" });
        }}
      >
        click here
      </button>

      <button onClick={() => dispatch("nhan2")}>tang</button>
      <button onClick={() => dispatch("chia2")}>giam</button>
      <button onClick={() => dispatch("xoa")}>xoa</button>
      <h2>{count2}</h2>
      <button
        onClick={() =>
          dispatch2({
            type: "GAN",
            data: 10,
          })
        }
      >
        gan gia tri
      </button>
    </div>
  );
}
