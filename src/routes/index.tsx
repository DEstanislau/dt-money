import {
  BrowserRouter,
  Routes as Router,
  Route,
} from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";

export const Routes = () => {
  return(
  <BrowserRouter>
    <Router>
      <Route path="/" element={<Dashboard />} />
    </Router>
  </BrowserRouter>
  )
}
