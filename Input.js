import { useState, useEffect } from "preact/hooks";

const Input = ({ defaultValue, placeholder = "Enter some text...", id = null }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const tID = setTimeout(() => {
      console.log(value);
      setValue("");
    }, 1000);

    return () => {
      clearTimeout(tID);
    };
  }, [value]);

  return (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onInput={event => setValue(event.target.value)}
    />
  );
};

export default Input;
