import { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  function crg() {
    inputRef.current.style.background = "blue";
  }

  return (
    <div>
      <input ref={inputRef} type="text" onClick={crg} />
    </div>
  );
};

export default App;    
    
   
  
      

 

