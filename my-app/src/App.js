import Navbar from "./components/Navbar";

function App() {
  return (
    <Navbar title="Textutils" aboutText = "About Us" homeText = "Home"/> // navBar with title props title and aboutText ye sab naam hum apne according dete hai
  );
}
export default App;

/*
  notes:-
        props kuch complex cheez nahi hai ye basically ek argument hai jo ki kahi pe bheja ja sakta hai kisi bhi html ke component me 

        jaise function aur function call and function argument hota hai waise hi props bhi kuch isi perkar ka hota hai jab hum kisi componet ke jariye props pass kerte hai wo ek tarah se function call me argument ki tarh kaam karega aur jahan per wo component hai waha pe hum isko recive bhi ker sakte hai
*/