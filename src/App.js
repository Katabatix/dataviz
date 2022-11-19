import "./App.css";
import Tableau from "./visualizations/Tableau";
import { Tab, Tabs, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const heatmapURL =
    "https://prod-apnortheast-a.online.tableau.com/t/4462dataviz/views/OpeningHoursAnalysisHeatmapSmallMultiples/Dashboard1";
  const mapURL =
    "https://prod-apnortheast-a.online.tableau.com/t/4462dataviz/views/BusinessesInPennysylvania/Dashboard1";

  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <Tableau url={mapURL} />
        </div>
        <div className="col-6">
          <Tableau url={heatmapURL} />
        </div>
      </div>
    </div>
  );
}

export default App;
