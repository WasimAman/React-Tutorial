import { useState } from "react";

function App() {
  const [color, setColor] = useState("#212121");
  return (
    <>
      <div className="w-screen h-screen" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center rounded-2xl bg-yellow-200 px-3 py-2 gap-3">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 rounded-xl p-2 text-white text-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("black");
              }}
              className="outline-none px-4 rounded-xl p-2 text-white text-2xl"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => {
                setColor("white");
              }}
              className="outline-none px-4 rounded-xl p-2 text-black text-2xl"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none px-4 rounded-xl p-2 text-white text-2xl"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 rounded-xl p-2 text-white text-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 rounded-xl p-2 text-white text-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("pink");
              }}
              className="outline-none px-4 rounded-xl p-2 text-black text-2xl"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("violet");
              }}
              className="outline-none px-4 rounded-xl p-2 text-black text-2xl"
              style={{ backgroundColor: "violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => {
                setColor("gray");
              }}
              className="outline-none px-4 rounded-xl p-2 text-black text-2xl"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => {
                setColor("aqua");
              }}
              className="outline-none px-4 rounded-xl p-2 text-black text-2xl"
              style={{ backgroundColor: "aqua" }}
            >
              Aqua
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
