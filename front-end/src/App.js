import Login from "./components/Login";
import Profile from "./components/Profile";
import "./App.css";
import Nav from "./components/Nav";
import Balance from "./components/Balance";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <Main />

      {/* <Profile /> */}
    </div>
  );
}

export default App;
