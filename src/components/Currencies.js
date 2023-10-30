import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currencies = () => {
  const { dispatch, currency } = useContext(AppContext);

  return (
    <>
      <div className="   d-flex flex-row w-100  gap gap-2 align-items-center  ">
        <span className="">currency</span>
        <select
          className=" form-select-md form-select rounded-pill    "
          id="inputGroupSelect01"
          onChange={(event) =>
            dispatch({
              type: "CHG_CURRENCY",
              payload: event.target.value === "" ? "$" : event.target.value,
            })
          }
        >
          <option defaultValue={currency} label="choose.."></option>
          <option value="$" name="$ dollar">
            $ dollar
          </option>
          <option value="£" name="£ pound">
            £ pound
          </option>
          <option value="€" name="€ Euro">
            € Euro
          </option>
        </select>
      </div>
    </>
  );
};

export default Currencies;
