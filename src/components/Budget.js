import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget, dispatch,currency } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
  };

  return (
    <div className="alert alert-secondary d-flex flex-row gap gap-2 align-items-center flex-wrap ">
      {!active && (
        <span className="d-flex flex-row align-items-center  flex-wrap">
          Budget:{currency}{budget >= 20000 ? 20000 : budget}
        </span>
      )}
      <div className="d-flex flex-row">
        <button
          onClick={() => setActive(!active)}
          className={`btn btn-primary  btn-sm  ${active ? "disabled" : ""}`}
        >
          Edit
        </button>
        {active && (
          <>
            <input
              type="number"
              step="10"
              value={newBudget >= 20000 ? 20000 : newBudget}
              onChange={handleBudgetChange}
            />
            <button
              onClick={() => setActive(!active)}
              className="btn btn-success "
            >
              Save
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Budget;
