import { CanvasContainer } from "./assets/styles/main.styles";
import { Suspense, useCallback, useState } from "react";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Loader from "./components/Loader";

function App() {
  const [page0, setPage0] = useState();
  const [page1, setPage1] = useState();
  const [page2, setPage2] = useState();
  const [page3, setPage3] = useState();
  const [page4, setPage4] = useState();
  const stateVal = useCallback(
    (open, page2, page3, page4) => {
      setPage1(open);
      setPage2(page2);
      setPage3(page3);
      setPage4(page4);
    },
    [page2, page3]
  );
  return (
    <CanvasContainer>
      <Suspense fallback={<Loader />}>
        <Header page1={page1} page2={page2} page3={page3} page4={page4} />
        <MainPage stateVal={stateVal} page0={page0} setPage0={setPage0} />
        {page2 && <Experience />}
      </Suspense>
    </CanvasContainer>
  );
}

export default App;
