import React from "react";
import { Checkbox, Button } from "semantic-ui-react";

function Aggreement({ handleCheckBox, agreement, handleClick }) {
  return (
    <div className="form-section-wrapper">
      <p className="note">
        A note about the symptoms you are or have recently been feeling{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <p>A Preuvo scan is a screen for cancer and many major diseases.</p>
      <p>
        The symptoms that you are feeling now or recently are important context
        for our review of the images that we acquire of your body.
      </p>
      <p style={{ marginBottom: 50 }}>
        However, if you are feeling acute symptoms, it is important that you
        visit your family doctor to determine what is the best diagnostic
        approach that you should follow. A Prenuvo scan can diagnose many
        conditions, can provide additional insight to a diagnosis but it is not
        always the most diagnostically relevant approach for any one particular
        condition.
      </p>
      <div className="checkbox-wrapper">
        <div>
          <Checkbox
            label="I undrestand this"
            name="agreement"
            onChange={handleCheckBox}
            checked={agreement.active}
          />
        </div>
        <div style={{marginTop: 100}}>
          <Button
            size='huge'
            onClick={e => handleClick(e, { title: "General Symptoms" })}
            disabled={!agreement.active}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Aggreement;
