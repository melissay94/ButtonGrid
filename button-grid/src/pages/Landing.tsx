import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import ButtonRules from "../components/ButtonRules";

function Landing() {
  const buttons: string[] = ["green", "blue", "orange", "purple"]

  return(
    <div>
      <h2>Objective</h2>
      <p>Press the buttons into different patterns until they match the pattern in the top left corner. An active button will be lighter than a deactivated one.</p>
      <h4>Sounds simple right??</h4>
      <h2 className="section-header">Here's the twist!</h2>
      <p>Each different colored button activates a number of other buttons besides itself that are adjacent to it!</p>
      <ButtonRules activeButtons={buttons} />
      <p className="subtext">You won't know exactly which buttons will be activated either until you've played around with the board!</p>
      <Form className="form-horizontal">
        <FormGroup>
          <Label for="levelCode">Enter Level Code:</Label>
          <Input type="text" name="levelCode" id="levelCode" placeholder="Skip to your level!" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Button color="success" size="lg" className="start-btn">Start Playing Now!</Button>
    </div>
  );
}

export default Landing;
