import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import './App.css';
import Dashboard from './pages/dashboard';
import PlanSetup from './pages/plan/setup';
import PlanOverview from './pages/plan/overview';
import PlanFunders from './pages/plan/funder';


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
    // TODO::FIXME:: We need to have a plan ID here
    path: "/plan/funders",
    element: <PlanFunders />
  },

  {
    // TODO::FIXME:: We need to have a plan ID here
    path: "/plan/overview",
    element: <PlanOverview />
  },
]);

function App() {
  return (
    <div id="App">
      <header className="todo">
        <h1>DMPTool v5</h1>
      </header>

      <main>
        <RouterProvider router={router} />
      </main>

      <footer className="todo">
        <p>
          Footer content
        </p>
      </footer>
    </div>
  );
}

export default App;
