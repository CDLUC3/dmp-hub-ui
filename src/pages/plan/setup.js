import {useNavigate} from 'react-router-dom';

import './setup.scss';


function PlanSetup() {
  let navigate = useNavigate();
  let dmpData = {};

  function handleSubmit(ev) {
    ev.preventDefault();
    console.log('Submit Form');

    // TODO:: Steps to complete
    // FIXME:: Where do we get the DMP ID, and we need a field to supply
    // this.

    // Collect the form data
    const form = ev.target;
    const formData = new FormData(form);
    console.log(formData.entries());
    formData.forEach((item) => {
      console.log(item);
    })

    const formJson = Object.formEntries(formData.entries());
    console.log(formJson);

    // Make the save request

    // Handle Response

    // Redirect
    navigate("/plan/overview");
  }

  return (
    <div id="planSetup">
      <h2>Plan Setup</h2>

      <form method="post" onSubmit={handleSubmit}>
        <div className="form-field required">
          <div className="form-field-label">
            <label>Project Name</label>
            <p className="help-text">
              All or part of the project name/title, e.g. 'Particle Physics'
            </p>
          </div>
          <div className="form-field-input">
            <input name="project_name" type="text" />
          </div>
        </div>

        <div className="form-field required">
          <div className="form-field-label">
            <label>Upload DMP</label>
            <p className="help-text">
              Only PDFs may be uploaded, and files should be no more than
              250kb.
            </p>
          </div>

          <div className="form-field-input todo">
            <input name="project_pdf" type="file" />
          </div>
        </div>

        <div className="form-actions todo">
          <button type="button" onClick={() => navigate("/")}>Cancel</button>
          <button
            type="submit"
            className="primary"
            onClick={() => navigate("/plan/funders")}>
            Save &amp; Continue
          </button>
        </div>

      </form>

    </div>
  )
}

export default PlanSetup
