import React from "react";
import { Checkbox, Button, Form } from "semantic-ui-react";

function HeadSymptoms({
  state: { hearingLoss, frequentHeadaches },
  handleClick,
  handleCheckBox,
  handleChaneRadio
}) {
  return (
    <div className="form-section-wrapper">
      <p style={{ marginBottom: 50 }}>
        Check any of the following head symptoms that you are or have recently
        experienced
      </p>
      <div className="checkbox-wrapper">
        <div>
          <Checkbox
            label="Frequent headaches"
            name="frequentHeadaches"
            onChange={handleCheckBox}
            checked={frequentHeadaches.active}
          />
          <Checkbox
            label="Hearing loss"
            name="hearingLoss"
            onChange={handleCheckBox}
            checked={hearingLoss.active}
          />
          {/* show the Rate hearing Radios if hearing los is active */}
          {hearingLoss.active && (
            <div className="radio-form-wrapper">
              <h2>Rate your hearing for your left ear</h2>
              <Form.Field>
                <Checkbox
                  radio
                  label="perfect"
                  name="hearingLoss"
                  value="perfect"
                  checked={hearingLoss.condition === "perfect"}
                  onChange={handleChaneRadio}
                />
                <Checkbox
                  radio
                  label="average"
                  name="hearingLoss"
                  value="average"
                  checked={hearingLoss.condition === "average"}
                  onChange={handleChaneRadio}
                />
                <Checkbox
                  radio
                  
                  label="poor"
                  name="hearingLoss"
                  value="poor"
                  checked={hearingLoss.condition === "poor"}
                  onChange={handleChaneRadio}
                />
              </Form.Field>
            </div>
          )}
          {/* show the headache level  if the user have headache issue */}
           {frequentHeadaches.active && (
            <div className="radio-form-wrapper">
              <h2>Tell us more about your headaches</h2>
              <Form.Field>
                <Checkbox
                  radio
                  label="Front"
                  name="frequentHeadaches"
                  value="Front"
                  checked={frequentHeadaches.condition === "Front"}
                  onChange={handleChaneRadio}
                />
                <Checkbox
                  radio
                  label="Back"
                  name="frequentHeadaches"
                  value="Back"
                  checked={frequentHeadaches.condition === "Back"}
                  onChange={handleChaneRadio}
                />
                <Checkbox
                  radio
                  label="Left Side"
                  name="frequentHeadaches"
                  value="Left Side"
                  checked={frequentHeadaches.condition === "Left Side"}
                  onChange={handleChaneRadio}
                />
                <Checkbox
                  radio
                  label="Right Side"
                  name="frequentHeadaches"
                  value="Right Side"
                  checked={frequentHeadaches.condition === "Right Side"}
                  onChange={handleChaneRadio}
                />
              </Form.Field>
            </div>
          )}
        </div>
        <div style={{ marginTop: 100 }}>
          <Button
            size="huge"
            onClick={e => handleClick(e, { title: "Esophegal symptoms" })}
            disabled={!frequentHeadaches && !hearingLoss.active}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
export default HeadSymptoms;
