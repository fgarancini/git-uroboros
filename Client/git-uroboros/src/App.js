import { Alert } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainProfile from "./Components/Profile/MainProfile";
import MainRepo from "./Components/Repo/MainRepo";
import MainCommits from "./Components/Commits/MainCommits";

function App() {
  return (
    <div className="App">
      <MainProfile />
      <section className="sectionRepo">
        <MainRepo />
        <MainCommits />
      </section>
    </div>
  );
}

export default App;
