import { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
// import { Buttons } from "./components/Buttons";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  const { theme } = useContext(ThemeContext);//themeContext ko use karke hum theme ko la rahe hain.

  return (
    <div className="App" id={theme ? "Dark" : "Light"}>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
