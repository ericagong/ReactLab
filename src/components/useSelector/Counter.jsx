import { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addCounter, subCounter } from "../../redux/modules/counter";

const Counter = (props) => {
  const [payload, setPayload] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.counter.name);
  // const { c, n } = useSelector((state) => state.counter, shallowEqual);

  // never!
  // const { count, name } = useSelector((state) => state.counter);

  // const count = useSelector(({counter} => counter.count));

  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(addCounter(payload));
  };
  const subHandler = () => {
    dispatch(subCounter(payload));
  };
  return (
    <>
      <h3>Count: {count}</h3>
      <label htmlFor='payload'>payload</label>
      <input
        id='payload'
        type='number'
        value={payload}
        onChange={(e) => setPayload(parseInt(e.target.value) || 0)}
      />
      <button onClick={addHandler}>Count up!</button>
      <button onClick={subHandler}>Count down!</button>
    </>
  );
};

export default Counter;
