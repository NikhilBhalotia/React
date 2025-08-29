import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "purple" }}
            >
            purple
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "gray" }}
            >
              gray
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("silver")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "silver" }}
            >
              silver
            </button>
            <button
              onClick={() => setColor("gold")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "gold" }}
            >
            gold
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-5 rounded-full"
              style={{ backgroundColor: "aqua" }}
            >
              aqua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
