import { useState, useRef ,useMemo} from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryInfo from "./components/DiaryInfo";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  
  // react는 state 가 바뀌면 화면을 다시 그린다. 즉 함수를 다시 실행한다. 이때 안에 있는 변수들은 다시 초기화 된다.
  const dummy = [
    { id: 1, author: "홍길동", contents: "눈이 옵니다. 집에 어떻게 가나요?", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "GD야 요즘 어떻게 지내니?", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "자기야 깝치지 좀 마", emotion: 5, date: new Date().getTime() },
    { id: 4, author: "지석진", contents: "유투브 만들어야지", emotion: 4, date: new Date().getTime() },
  ];
  const dataId = useRef(4);
  const [diaryListArray, setDiaryListArray] = useState([...dummy]);
  const insertDiary = (author, contents, emotion) => {
    const newDiaryItem = { id: ++dataId.current, author: author, contents: contents, emotion: emotion, date: new Date().getTime() };
    setDiaryListArray([newDiaryItem, ...diaryListArray]);
  };
  const deleteDiary = (id) => {
    //console.log(id + "   deleteDiary");
    const newDiaryList = diaryListArray.filter((item, idx) => item.id !== id);
    setDiaryListArray(newDiaryList);
  };

  const modifyDiary = (id,localContents)=>{
    const modifiedDiaryListArray = diaryListArray.map((item,idx)=>  item.id===id ? {...item,contents:localContents}:item   );
    setDiaryListArray(modifiedDiaryListArray);
  };

  const diaryAnalysis = useMemo(
    ()=>{
      console.log("일기를 분석합니다.");
      const total = diaryListArray.length;
      const good = diaryListArray.filter((item,idx)=> item.emotion>3).length; //  3점이상 일기의 갯수
      const bad = total-good;
      const percent = (good/total*100);
      //  return {total:total,good:good,bad:bad,percent:percent}
      return {total,good,bad,percent}
    }, [diaryListArray.length]);
  const {good,bad,total,percent} = diaryAnalysis;



  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <div className="info">
        
          <DiaryInfo good={good} bad={bad} total={total} percent={percent}></DiaryInfo>       
       
      </div>
      <DiaryList diaryList={diaryListArray} deleteDiary={deleteDiary} modifyDiary={modifyDiary}></DiaryList>
    </div>
  );
}

export default App; 



