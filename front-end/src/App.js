import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Profile />
    </div>
  );
}

export default App;
