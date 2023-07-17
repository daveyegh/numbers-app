import { useCallback, useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NumCards from "./components/NumCards";
import Instructions from "./components/Instructions";

import "./App.css";

const LOCAL_STORAGE_NAME = "NUMS";

function App() {
  const [nums, setNums] = useState(() => {
    const localStorageNums = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_NAME),
    );

    if (localStorageNums?.length > 0) {
      return localStorageNums;
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(nums));
  }, [nums]);

  const handleAddNumClick = useCallback(() => {
    const randomNum = Math.floor(Math.random() * 1000);

    if (!nums.includes(randomNum)) {
      setNums((prevState) => [...prevState, randomNum]);
    }
  }, [nums]);

  const handleSortNumsClick = useCallback(() => {
    if (!nums.length) {
      return;
    }

    const sortedNums = [...nums].sort((a, b) => a - b);

    setNums(sortedNums);
  }, [nums]);

  const handleNumRemoveClick = useCallback(
    (num) => {
      const filteredNums = nums.filter((filterNum) => filterNum !== num);

      setNums(filteredNums);
    },
    [nums],
  );

  return (
    <div className="App">
      <div className="main">
        <Header
          onAddNumClick={handleAddNumClick}
          onSortNumsClick={handleSortNumsClick}
        />
        <NumCards nums={nums} onNumRemoveClick={handleNumRemoveClick} />
        <Footer />
      </div>
      <Instructions />
    </div>
  );
}

export default App;
