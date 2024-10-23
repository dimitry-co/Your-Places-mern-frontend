import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state, // copy the state
        value: action.val, // overwrite the value
        isValid: validate(action.val, action.validators), // overwrite the isValid
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      }
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    // useReducer() is an alternative to useState(). It is useful 1. when the next state depends on the previous state. Useful 2. when the state logic is complex and involves multiple sub-values. 3. want to separate the state logic from the component. 4. want to test the state logic separately. 5. want to optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: false,
  }); // useReducer() takes two arguments: a reducer function and an initial state. It returns an array with two elements. The first element is the current state and the second element is a function that allows us to dispatch actions to the reducer function.

  const { id, onInput } = props; // We use object destructuring to extract the id and onChange props.
  const { value, isValid } = inputState; // We use object destructuring to extract the value and isValid properties from the inputState object.

  useEffect(() => {
    onInput(id, value, isValid); // props.onInput is a function that takes three arguments: id, value, and isValid. The id is the id of the input. The value is the value of the input. The isValid is a boolean that indicates whether the input is valid.
  }, [id, value, isValid, onInput]); // useEffect() is a React hook that takes a function as an argument. The function is executed after the component is rendered, or when the values in the array passed as the second argument have changed.

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    }); // dispatch() takes one argument: an action object. The action object must have a type property. The action object may have a payload property.
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? ( // if element is input, then render input
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler} // onBlur is an event that occurs when an element loses focus (ie user clicks in and then clicks out of an element)
        value={inputState.value}
      />
    ) : (
      // if element is textarea, then render textarea
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${!inputState.isValid && inputState.isTouched && 
        'form-control--invalid'}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;