import {useNavigate} from 'react-router-dom';

import './funder.scss';


function PlanFunders() {
  let navigate = useNavigate();

  return (
    <>
      <div id="funderPage">
        <h2>Project: Funder</h2>

        <div className="form-field required">
          <div className="form-field-label">
            <label>Do you have a funder?</label>
            <p className="help-text">
              Is there a funder associated with this project?
            </p>
          </div>
          <div className="form-field-input">
            <input name="funder_yes" type="checkbox" /> yes <br />
            <input name="funder_no" type="checkbox" /> no
          </div>
        </div>

        <div className="form-field required">
          <div className="form-field-label">
            <label>Funder</label>
            <p className="help-text">
              Begin typing to select your funder from a list.
            </p>
          </div>
          <div className="form-field-input">
            <label htmlFor="">Funder</label>
            <input name="" type="text" value="" />
            <input name="" type="checkbox" /> My funder isn't listed
          </div>
        </div>

        <div className="form-actions todo">
          <button>Cancel</button>
          <button className="primary">Save &amp; Continue</button>
        </div>
      </div>
    </>
  )
}

export default PlanFunders;
