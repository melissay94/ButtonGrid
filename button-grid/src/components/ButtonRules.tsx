import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

type RulesProps = { activeButtons: string[] };

interface Rules {
  green: string,
  blue: string,
  orange: string,
  purple: string,
  [key: string]: string
}

const rulesList: Rules = {
  green: "Activates only itself",
  blue: "Activates itself plus one other adjacent button",
  orange: "Activates itself plus two other adjacent buttons",
  purple: "Activates itself plus three other adjacent buttons"
}

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);


function ButtonsRules({ activeButtons }: RulesProps) {
  return(
    <ListGroup>
      { activeButtons.map((item: string, index: number) => (
      <ListGroupItem key={ index } className={`light-${item} bold`}>{ capitalize(item) }: { rulesList[item] }</ListGroupItem>
      )) }
    </ListGroup>
  )
}

export default ButtonsRules;
