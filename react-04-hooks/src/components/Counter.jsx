import { useRef, useState } from "react";

function Counter() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const handleCountRef = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  //   const inputRef = useRef("");

  //   const handleNumber = () => {
  //     // console.log(inputRef.current.value);
  //     countRef.current = inputRef.current.value;
  //     console.log(countRef.current);
  //   };

  return (
    <>
      <h2>Counter</h2>

      <p>countState: {countState}</p>

      <button type="button" onClick={() => setCountState(countState + 1)}>
        Sumar 1 al estado
      </button>

      <p>countRef: {countRef.current}</p>

      <button type="button" onClick={handleCountRef}>
        Sumar 1 a la referencia
      </button>

      {/* <input type="number" ref={inputRef} onInput={handleNumber} /> */}
    </>
  );
}

export default Counter;
