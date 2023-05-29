import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  api_path,
  api_headers,
  api_options
} from '../utils.js';

import './dashboard.scss';


function Dashboard() {
  const [projects, setProjects] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let url = api_path('/me');
    let options = api_options({headers: api_headers()});
    fetch(url, options).then((resp) => {
      console.log('Decode response');
      console.log(resp);
      return resp.json();
    }).then((data) => {
      console.log('Response data?');
      console.log(data);
    });

    // let url = api_path('/wips', {
    //   owner: "jane.doe@example.com",
    // });
    // let options = api_options({
    //   headers: api_headers(),
    // });
    // fetch(url, options).then((resp) => {
    //   switch (resp.status) {
    //     case 200:
    //       return resp.json();
    //       break;

    //     default:
    //       // TODO:: Error handling
    //       // TODO:: Log and report errors to a logging services
    //       // TODO:: Message to display to the user?
    //       console.log('Error fetching from API');
    //       console.log(resp);
    //   }
    // }).then((data) => {
    //   console.log(data);
    //   let list_data = JSON.parse(data.items);
    //   console.log(list_data);
    //   setProjects(list_data);
    // });

  }, []);

  let projectList = projects.map(proj => {
    // TODO::FIXME:: Decode the json in the response items
    console.log(proj);
    return (
      <div>{proj}</div>
    )
  });

  return (
    <div id="Dashboard">
      <h2>
        Dashboard
        <button className="primary" onClick={() => navigate("/plan/add")}>
          Add Plan
        </button>
      </h2>

      <div className="project-list">
        <div className="data-cell data-heading">Project Name</div>
        <div className="data-cell data-heading">Funder</div>
        <div className="data-cell data-heading tablet">Grant ID</div>
        <div className="data-cell data-heading laptop">DMP ID</div>
        <div className="data-cell data-heading laptop">Status</div>
        <div className="data-cell data-heading laptop"></div>

        <div className="data-cell">Project A Name</div>
        <div className="data-cell">NIH</div>
        <div className="data-cell tablet">12345-A</div>
        <div className="data-cell laptop">—</div>
        <div className="data-cell laptop todo">Incomplete</div>
        <div className="data-cell laptop actions">
          <a href="#">Complete</a>
        </div>

      </div>
    </div>
  )
}


export default Dashboard
