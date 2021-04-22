import { useEffect, useMemo, useRef, useState } from "react";

function UseMemo(props) {
  const [count, setState] = useState(0);
  const [dsds, setName] = useState(0);
  const inputRef=useRef(null);
  const value = useMemo(() => ({
    title: "dsdsd",
  }),[]);
  
  useEffect(() => {
    console.log("value changed");
  }, [value]);

  const checkEvenNumber = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 == 0;
  }, [count]);
  const changeInputProps=()=>{
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return (
    <div>
      {`${checkEvenNumber} Number`}
      This is usememo component
      {dsds}
      <input type="text" ref={inputRef}/>
      <button onClick={() => setState(count + 1)}>Change Count</button>
      <button onClick={() => setName(dsds + 1)}>Change Count</button>
      <button onClick={changeInputProps}>Click me</button>
    </div>
  );
}

export default UseMemo;
