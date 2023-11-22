import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "../src/assets/vendor/bootstrap/css/bootstrap.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/css/style.default.css";
import { Login } from "./components/auth/login/Login";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import LoginContainer from "./components/LoginContainer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <LoginContainer/>
      </header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
