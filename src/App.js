import "./App.css";
import Tableau from "./visualizations/Tableau";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Tableau Dashboard in React </h1>
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <Tableau />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Tableau />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Tableau />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
