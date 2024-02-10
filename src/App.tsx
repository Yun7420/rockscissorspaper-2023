import React from "react";
import { useState,useEffect } from "react";
// Components
import Score from "./components/Score";
import Main from "./components/Main";
import Button from "./components/Button";
// Style
import "./App.css";
// Image
import Rock from "../src/image/rock.png"
import Scissors from "../src/image/scissors.png"
import Paper from "../src/image/paper.png"
// Types
import { Item, ItemValue } from "./types/Item";

const item: Item = {
  Rock: {
    name: "바위",
    src: Rock,
    alt: "바위 이미지",
  },

  Scissors: {
    name: "가위",
    src: Scissors,
    alt: "가위 이미지",
  },

  Paper: {
    name: "보",
    src: Paper,
    alt: "보 이미지",
  },
};

function App() {
  // 아이템 선택
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });

  // 승패 결과
  const [result, setResult] = useState<
    | { userResult: string; computerResult: string }
    | { userResult: null; computerResult: null }
  >({
    userResult: null,
    computerResult: null,
  });

  // 점수
  const [score, setScore] = useState<{
    userScore: number;
    computerScore: number;
  }>(
    !JSON.parse(localStorage.getItem("score") as string)
      ? {
          userScore: 0,
          computerScore: 0,
        }
      : JSON.parse(localStorage.getItem("score") as string)
  );

  // 유저 아이템 선택 시작
  const userPlayStart = (userChoice: string) => {
    // 사용자, 컴퓨터 선택 기능 구현
    let userSelect: ItemValue = item[userChoice];
    let computerSelect: ItemValue = item[computerPlayStart()];

    setSelectItem({
      userItem: userSelect,
      computerItem: computerSelect,
    });

    // 유저, 컴퓨터 승리 판별 기능 구현
    let userJudgementResult: string = userJudgement(userSelect, computerSelect);
    let computerJudgementResult: string =
      computerJudgement(userJudgementResult);

    setResult({
      userResult: userJudgementResult,
      computerResult: computerJudgementResult,
    });

    // 점수 추가 기능 구현
    scoreAdd(userJudgementResult, computerJudgementResult);
  };

  // 컴퓨터 아이템 선택 시작
  const computerPlayStart = (): string => {
    // 아이템 key 배열
    let itemKey: string[] = Object.keys(item);

    // 랜덤 1 ~ 2 까지의 숫자 출력
    let randomNumber: number = Math.floor(Math.random() * itemKey.length);

    return itemKey[randomNumber];
  };

  // 사용자 승리 판별
  const userJudgement = (
    userSelect: ItemValue,
    computerSelect: ItemValue
  ): string => {
    let userJudgement = "";

    if (userSelect.name === computerSelect.name) {
      userJudgement = "Tie";
    } else if (userSelect.name === "바위")
      userJudgement = computerSelect.name === "가위" ? "Win" : "Lose";
    else if (userSelect.name === "가위")
      userJudgement = computerSelect.name === "보" ? "Win" : "Lose";
    else if (userSelect.name === "보")
      userJudgement = computerSelect.name === "바위" ? "Win" : "Lose";

    return userJudgement;
  };

  // 컴퓨터 승리 판별
  const computerJudgement = (userJudgementResult: string): string => {
    let computerJudgement = "";

    if (userJudgementResult === "Tie") {
      computerJudgement = "Tie";
    } else if (userJudgementResult === "Win") {
      computerJudgement = "Lose";
    } else if (userJudgementResult === "Lose") {
      computerJudgement = "Win";
    }

    return computerJudgement;
  };

  // 점수 추가
  const scoreAdd = (
    userJudgementResult: string,
    computerJudgementResult: string
  ) => {
    if (userJudgementResult !== "Tie" && userJudgementResult === "Win") {
      setScore({
        ...score,
        userScore: score.userScore + 1,
      });
    } else if (
      computerJudgementResult !== "Tie" &&
      computerJudgementResult === "Win"
    ) {
      setScore({
        ...score,
        computerScore: score.computerScore + 1,
      });
    }
  };

  // 로컬스토리지 점수 저장
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  })
  
  return (
    <div className="App">
      <div className="box">
        <Score score={score} setScore={setScore} />
        <div className="main">
          <Main
            title="User"
            selectItem={selectItem.userItem}
            result={result.userResult}
          />
          <Main
            title="Computer"
            selectItem={selectItem.computerItem}
            result={result.computerResult}
          />
        </div>
        <Button item={item} userPlayStart={userPlayStart} />
      </div>
    </div>
  );
}

export default App;
