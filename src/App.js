import React from "react";
import SetUp from "./tutorial/12-memo-useMemo-useCallback/setup";
// import SetUp from "./tutorial/6-useReducer/setup"; // when their is an index.js in a folder that is our main entry, we don't need to import specific file, it will automatically load index.js. All other components will need to be their in index.js.
// import Final from "./tutorial/1-useState/final/1-error-example";

function App() {
  return (
    <div className="container">
      <SetUp />
    </div>
  );
}

export default App;
