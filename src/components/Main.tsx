import React from "react";

// 타입
import { ItemValue } from "../model/item";

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
      {props.result ? <p className={props.result}>{props.result}</p> : null}
    </div>
  );
};

export default Main;
