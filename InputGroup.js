import { Fragment } from "preact";
import { useState } from "preact/hooks";

const InputGroup = ({ id, defaultValue }) => {
  const [show, setShow] = useState(true);

  const random = () => {
    setShow(Math.random() > 0.5);
  };

  return (
    <Fragment>
      {show && (
        <Fragment>
          <label htmlFor={id} />
          <x-input id={id} defaultValue={defaultValue} />
        </Fragment>
      )}
      <br />
      <button onClick={random}>?</button>
    </Fragment>
  );
};

export default InputGroup;
