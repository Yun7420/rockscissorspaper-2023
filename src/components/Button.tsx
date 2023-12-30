import React from "react";

// 타입
import { Item } from "../model/item";

interface Props {
  item: Item;

  userPlayStart(userChoice: string): void;
}

const Button = (props: Props) => {
  return (
    <div className="buttonList">
      <button onClick={() => props.userPlayStart("바위")}>
        <img
          src={props.item["바위"].src}
          alt={props.item["바위"].alt}
        />
      </button>
      <button onClick={() => props.userPlayStart("가위")}>
        <img
          src={props.item["가위"].src}
          alt={props.item["가위"].alt}
        />
      </button>
      <button onClick={() => props.userPlayStart("보")}>
        <img
          src={props.item["보"].src}
          alt={props.item["보"].alt}
        />
      </button>
    </div>
  );
};

export default Button;
