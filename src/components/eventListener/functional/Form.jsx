import React, { useEffect } from "react";

const Form = (props) => {
  let [team, setTeam] = React.useState("");
  let [number, setNumber] = React.useState(0);
  let [hide, setHide] = React.useState(false);

  // componentDidMount()
  useEffect(() => {
    console.log("Functional :: First rendered!");
  }, []);

  // componentDidMount() + componentDidUpdate() with specific state change.
  useEffect(() => {
    console.log("Functional :: team name rendered!");
  }, [team]);

  useEffect(
    function () {
      console.log("Functional :: number rendered!");
    },
    [number]
  );

  const changeFunc = () => {
    console.log("Functional :: team name or number rendered!");
  };

  useEffect(changeFunc, [team, number]);

  // componentDidMount(), componentDidUpdate(), componentWillUnmount()
  // TODO cleanup check!
  // useEffect(() => {
  //   return () => {
  //     console.log("destoyed");
  //   };
  // });

  const changeHandler = (event) => {
    const id = event.target.id;
    console.log(event.target.value);
    if (id === "team") {
      setTeam(event.target.value);
    } else {
      setNumber(event.target.value);
    }
  };

  const clickHandler = () => {
    setHide((curr) => !curr);
  };

  return (
    <div>
      <div>
        {!hide ? <h3> :0 </h3> : null}
        <button onClick={clickHandler}>
          {!hide ? "delete face" : "show face"}
        </button>
      </div>
      <input
        type='text'
        id='team'
        placeholder='Team Name'
        value={team}
        onChange={changeHandler}
      />
      <input
        type='number'
        id='number'
        placeholder='Number of people'
        value={number}
        onChange={changeHandler}
      />
      <div>Typed Team Name: {team}</div>
      <div>Typed Team Members: {number}</div>
    </div>
  );
};

export default Form;
