import { Alert } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import MainProfile from "./Components/Profile/MainProfile";
import MainRepo from "./Components/Repo/MainRepo";

function App() {
  return (
    <div className="App">
      <MainProfile/>
      <MainRepo/>
    </div>
  );
}

export default App;
