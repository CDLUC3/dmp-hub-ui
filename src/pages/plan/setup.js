
function PlanSetupPage() {
  return (
    <>
      <div id="addPlan">
        <h2>Plan Setup</h2>

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

          <div className="form-field-input">
            <input name="project_pdf" type="file" />
          </div>
        </div>

        <div className="page-actions">
          <button>Cancel</button>
          <button>Save &amp; Continue</button>
        </div>
      </div>
    </>
  )
}

export default PlanSetupPage
