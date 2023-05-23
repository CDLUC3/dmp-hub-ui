import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Dashboard from './pages/dashboard';
import PlanSetup from './pages/plan/setup';
import PlanOverview from './pages/plan/overview';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },

  {
    path: "/plan/add",
    element: <PlanSetup />
  },

  {
    path: "/plan/overview",
    element: <PlanOverview />
  },
]);

function App() {
  return (
    <div id="App">
      <h1>DMPTool v5</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
