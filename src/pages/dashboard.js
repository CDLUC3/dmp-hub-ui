import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  api_path,
  api_headers,
  api_options
} from '../utils.js';


function Dashboard() {
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch list of projects to populate the dashboard
    let url = api_path('/dmps/validate');
    let options = api_options({
      'method': 'post',
      'headers': api_headers(),
      'body': JSON.stringify({
        "foo": "baz",
      }),
    });

    fetch(url, options).then((resp) => {
      console.log('Decode response');
      console.log(resp);
      return resp.blob;
    }).then((resp) => {
      console.log('Handle the decoded response');
      console.log(resp);
    });

    // let url = api_path('/me');
    // let options = api_options();
    // fetch(url, options).then((resp) => {
    //   console.log('Reponse Decode...');
    //   console.log(resp);
    //   return resp.blob;
    // }).then((resp) => {
    //   console.log('Response callback..');
    //   console.log(resp);
    //   // TODO:: Handle the response result
    // });

  }, []);

  return (
    <>
      <div id="Dashboard">
        <h2>
          Dashboard
          <button onClick={() => navigate("/plan/add")}>
            Add Plan
          </button>
        </h2>

        <div className="todo">
          <p>Here we want a responsive table component</p>
        </div>
      </div>
    </>
  )
}


export default Dashboard
