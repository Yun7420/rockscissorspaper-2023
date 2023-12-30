# 가위바위보 게임 만들기 🧐

Javascript, Typescript, React, Css를 활용하여 만든 가위바위보(RockScissorsPaper)게임 프로젝트입니다.
사용자는 가위, 바위, 보 아이템들중 하나의 아이템을 선택하고, 컴퓨터는 아이템들중 하나를 랜덤하게 골라 대결을 진행합니다.
결과는 Win, Lose, Tie로 나뉘며, 결과가 Win이라면 점수를 1점 획득할 수 있으며 언제든지 Reset버튼을 통해서 점수를 초기화 할 수 있습니다.

1. Figma(디자인 툴) 활용

- 레이아웃 및 디자인을 제작

2. 자바스크립트 활용

- 사용자가 버튼을 통해 아이템을 선택하면 아이템이 함수 매개변수로 전달
- 사용자가 버튼을 선택할 경우 컴퓨터도 랜덤하게 아이템을 선택
- 사용자와 컴퓨터가 선택한 아이템을 비교하여 승자를 결정
- 사용자와 컴퓨터의 승자를 판별하여 점수 객체를 생성하고, 로컬스토리지에 점수 객체 반영 후 가져오기

3. 타입스크립트 활용

- 최상위 폴더에 @types/global/index.d.ts에 이미지 확장자를 추가하여 이미지를 import
- src/model/item.ts에 아이템 타입을 타입 별칭과 인덱스 시그니처 문법을 통해서 정의 후 import
- 변수의 타입, 객체의 타입, 함수 타입을 정해주고 문법 오류 수정
- 리액트에서 제공하는 useState Hook의 초기값을 정하고 타입 추론 후 제네릭 문법을 통해 추가로 들어갈 타입과 초기타입을 반영
- 로컬스토리지 string | null 타입 오류는 빈 객체라도 가져온다는 의미로 JSON.parse(localStorage.getItem("score") || "{}") 값으로 설정
- 각 컴포넌트에 props타입을 interface문법으로 정해주고 타입 설정 (setState타입, 유니온타입 등...)

4. 리액트 활용

- 디자인한 내용을 component로 구성함으로써 component의 관리, 재사용성에 대해서 생각하기
- 리액트에서 제공하는 useState Hook들의 값이 비슷할 경우 객체로 생성하여 코드를 간략화
- useState의 setState를 통해서 state에 아이템, 승리여부, 점수값 전달 및 할당
- props를 통해서 state에 값들을 전달하여 아이템, 승리여부, 점수값을 랜더링
- 삼항 연산자를 활용하여 로컬스토리지에 값이 없을 경우 점수가 0인 객체를 반영하고 있을 경우 로컬스토리지에 저장된 점수 값을 반영

5. 스타일 활용

- Css작업을 통해 디자인하고 반응형 작업을 수행

## 완성작 미리보기

미리보기 :

## 사용스택

- javascript, Typescript, react를 사용하여 사이트를 완성합니다.
- css를 사용하여 디자인합니다.
- git, github을 사용하여 파일을 관리합니다.
- build를 통해 코드와 파일, 이미지, css파일등을 패키징 합니다.

## 프로젝트 실행과 마무리

- react typescript를 설치합니다. `npx create-react-app my-app --template typescript`
- 배포 환경에서 사용할 파일을 생성합니다. `npm run build`
- static 파일 서빙 프로그램 생성합니다. `npm install -g(현재 컴퓨터 모든 경로 사용가능) serve`
- build폴더 기반으로 웹 애플리케이션 서빙합니다. `serve -s build`

## 프로젝트 참고 사이트

1. 타입스크립트 파일 import
   (https://velog.io/@nsunny0908/TIL-46-Typescript-image-import)
2. 타입스크립트 로컬스토리지 string | null 오류
   (https://stackoverflow.com/questions/54715260/typescript-json-parse-error-type-null-is-not-assignable-to-type-string)
3. 타입스크립트 props 타입 좁히기1
   (https://ahnheejong.gitbook.io/ts-for-jsdev/06-type-system-deepdive/type-narrowing)
4. 타입스크립트 props 타입 좁히기2
   (https://www.yongdam.sh/blog/effective-typescript-narrowing)
5. 타입스크립트 props setState 타입 정의
   (https://til.b41.kr/posts/TIL-react-setState-type-220715/)
6. 리액트 이미지파일은 어디서 관리하는게 좋을까 public 혹은 src
   (https://velog.io/@rimo09/React-Create-react-app-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95)
7. 인프런 강사님과 질의 응답
   (https://www.inflearn.com/questions/1117907/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A1%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9C-%EA%B6%81%EA%B8%88%ED%95%9C-%EC%82%AC%ED%95%AD%EC%9D%B4-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-import-%ED%83%80%EC%9E%85-%EC%B6%94%EB%A1%A0-%EC%96%B4%EB%94%94%EA%B9%8C%EC%A7%80)

## 프로젝트를 통해 배운 내용

### Javascript

1. 컴퓨터 아이템을 랜덤하게 선택

```
  // 컴퓨터 아이템 선택 시작
  const computerPlayStart = (): string => {
    // 아이템 key 배열
    let itemKey: string[] = Object.keys(item);

    // 랜덤 1 ~ 2 까지의 숫자 출력
    let randomNumber: number = Math.floor(Math.random() * itemKey.length);

    return itemKey[randomNumber];
  };
```

2. 사용자의 승리 판별

```
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
```

### Typescript

1. 이미지 소스 확장자 문법 오류

```
  // 경로 오류 발생 시
  import Rock from "../src/image/rock.png"
  import Scissors from "../src/image/scissors.png"
  import Paper from "../src/image/paper.png"

  // 최상위 폴더 @types/global/index.d.ts에 확장자 추가
  declare module '*.png';
  declare module '*.svg';
  declare module '*.gif';

  // tsconfig.json폴더 안에 compilerOptions에 옵션 추가
  "typeRoots": ["./node_modules/@types", "@types"]
```

2. useState 제네릭 타입 설정

```
  // 아이템 선택
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });
```

3. 로컬스토리지 string | null 오류

```
  // 점수
  const [score, setScore] = useState<{
    userScore: number;
    computerScore: number;
  }>(
    !JSON.parse(localStorage.getItem("score") || "{}")
      ? {
          userScore: 0,
          computerScore: 0,
        }
      : JSON.parse(localStorage.getItem("score") || "{}")
  );
```

4. props타입 설정과 null 타입 좁히기

```
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
```

5. props setState 타입 설정

```
  interface Props {
    score: { userScore: number; computerScore: number };
    setScore: React.Dispatch<
      React.SetStateAction<{ userScore: number; computerScore: number }>
    >;
  }
```

### React

1. 이미지 소스 관리 src폴더 권장

```
  // 이미지 소스
  import Rock from "../src/image/rock.png"
  import Scissors from "../src/image/scissors.png"
  import Paper from "../src/image/paper.png"
```

2. useState의 비슷한 state값 객체화

```
  // 아이템 선택
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });
```

## 프로젝트를 하면서 아쉬운점

가위바위보 게임은 저의 두번쨰 프로젝트입니다.
타입스크립트를 처음으로 사용하기 위해 한입타입스크립트 강의를 3주동안 들었고 이론을 바탕으로 리액트에 적용해보니 상당히 오래걸리고 어려웠습니다.
타입스크립트의 이미지 폴더 경로 문제, State Hook의 제네릭 타입, 로컬스토리지 string | null 타입 오류, props타입의 null타입 좁히기, props타입의 setState타입 설정,
리액트의 useState의 객체화 등 알아보고 적용하는데 많은 시간이 걸렸지만 그만큼 얻어가는것도 많은 좋은 시간이였습니다.
현재는 타입에 적응하고 싶어 모든 곳에 타입을 정하는 식이지만 후에 타입 추론을 잘 활용하여 필요한 곳에만 넣을 수 있는 실력이 되면 좋겠습니다.
현재는 타입에 적응하고 싶어 모든 곳에 타입을 정하는 식이지만 후에 타입 추론을 잘 활용하여 필요한 곳에만 넣을 수 있는 실력이 되면 좋겠습니다.