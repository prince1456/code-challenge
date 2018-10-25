import React from "react";
import { Checkbox, Button } from "semantic-ui-react";

function GeneralSymptoms({
  recentWeightGain,
  recentWeightLost,
  handleClick,
  handleCheckBox
}) {
  return (
    <div className="form-section-wrapper">
      <p style={{ marginBottom: 50 }}>
        Check any of the following symptoms that you are or have recently
        experienced
      </p>
      <div className="checkbox-wrapper">
        <div>
          <Checkbox
            label="Recent weight gain"
            name="recentWeightGain"
            onChange={handleCheckBox}
            checked={recentWeightGain.active}
          />
          <Checkbox
            label="Recent weight Lost"
            name="recentWeightLost"
            onChange={handleCheckBox}
            checked={recentWeightLost.active}
          />
        </div>
        <div style={{marginTop: 100}}>
          <Button
            size="huge"
            onClick={e => handleClick(e, { title: "Head Symptoms" })}
            disabled={!recentWeightGain.active && !recentWeightLost.active}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default GeneralSymptoms;
