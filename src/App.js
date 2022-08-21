import "./App.css";
import "./style/variables.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components";
import { HomePage, CoinPage } from "./Pages";
import classes from "./style/Main.module.scss";

function App() {
  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
