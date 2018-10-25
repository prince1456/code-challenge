import React from "react";
import { Checkbox, Button } from "semantic-ui-react";

function EsophegalSymptoms({
  state: { frequentHeartburn, chestPain},
  handleClick,
  handleCheckBox
}) {
  return (
    <div className="form-section-wrapper">
      <h2>
        Throat, Neck and Esophegal symptoms
      </h2>
      <p style={{ marginBottom: 50 }}>Check any of the following symptoms that you are or have recently experienced</p>
      <div className="checkbox-wrapper">
        <div>
          <Checkbox
            label="Frequent heartburn or acid reflux"
            name="frequentHeartburn"
            onChange={handleCheckBox}
            checked={frequentHeartburn.active}
          />
          <Checkbox
            label="Chest pain that is worse with eating"
            name="chestPain"
            onChange={handleCheckBox}
            checked={chestPain.active}
          />
        </div>
        <div style={{marginTop: 100}}>
          <Button
            size="huge"
            onClick={e => handleClick(e, { title: "Head Symptoms" })}
            disabled={!frequentHeartburn.active && !chestPain.active}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default EsophegalSymptoms;
