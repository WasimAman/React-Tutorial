import Card from "./components/Card";

function App() {
  let myArr = [1,2,3,4,5,6];
  return (
    <>
    <h1 className="bg-green-400 text-white p-2 rounded-xl mb-4">Tailwind</h1>
    <Card username='Aliza' btnText = "visit me"/>
    <Card username='Fatima' btnText = "Click me"/>
    </>
  );
}

export default App;
