import { use, useState, useCallback, useEffect, useRef } from "react";
// import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charaterAllowed, setcharaterAllowed] = useState(false);
  const [Password, setPassword] = useState("");


  //  without using usecallBack : -

  //  const passwordGenerator =() => {
  //    let pass = "";
  //    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //    if (numberAllowed) str += "0123456789";
  //    if (charaterAllowed) str += "@#$%&";

  //    for (let i = 1; i <= length; i++) {
  //      let char = Math.floor(Math.random() * str.length);
  //      pass += str[char];
  //    }
  //    setPassword(pass);
  //  };

  //  let gen = document.querySelector("#generate");
  //  useEffect(() => {
  //    passwordGenerator();
  //  }, [length, numberAllowed, charaterAllowed]);



//  by using usecallback :-

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charaterAllowed) str += "@#$%&_:/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass)
  }, [length, numberAllowed, charaterAllowed, setPassword ]);

    useEffect(() => {
      passwordGenerator();
    }, [length, numberAllowed, charaterAllowed, passwordGenerator]);

  const copyTextToClipBoard = useCallback(() => {
    reference.current?.select()
    reference.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(Password)
  },[Password])
  
  const reference = useRef(null)
  
 

  return (
    <>
      <div className="fixed top-10 left-50 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
        <div className="text-center text-2xl">Password generator</div>
        <div className="flex justify-center shadow mb-4 text-black gap-5">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3 mt-2 bg-blue-50 rounded-lg"
            placeholder="Password"
            ref={reference}
            readOnly
          />
          <button
            className=" text-white shrink-0"
            style={{ backgroundColor: "red" }}
            onClick={copyTextToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            id="lengthRange"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label>Length:{length}</label>

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Number</label>

          <input
            type="checkbox"
            defaultChecked={charaterAllowed}
            id="charInput"
            onChange={() => {
              setcharaterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number">Character</label>
        </div>
        {/* <button className="mt-5 ml-5"
      style={{backgroundColor:"green"}} id="generate">Generate</button> */}
      </div>
    </>
  );
}

export default App;
