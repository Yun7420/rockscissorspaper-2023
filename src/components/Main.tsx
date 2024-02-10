import React from "react";
// Types
import { ItemValue } from "../types/Item";

interface Props {
  title: string;
  selectItem: ItemValue | null;
  result: string | null;
}

const Main = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.selectItem ? <img src={props.selectItem.src} alt={props.selectItem.alt} /> : null}
      {props.result ? <h3 className={props.result}>{props.result}</h3> : null}
    </div>
  );
};

export default Main;
