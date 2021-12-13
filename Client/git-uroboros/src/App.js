import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainProfile from "./Components/Profile/MainProfile";
import MainRepo from "./Components/Repo/MainRepo";
import MainCommits from "./Components/Commits/MainCommits";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 profile">
            <MainProfile />
          </div>
          <div className="col-lg-8 ms-auto">
            <MainRepo />
            <MainCommits />
          </div>
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
