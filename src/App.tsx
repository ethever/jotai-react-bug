import { useState } from "react";
import "./App.css";
import { useAtom, useAtomValue } from "jotai";
import { TestAtom } from "./state";

function App() {
  const [mount, setMount] = useState<boolean>(true);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      is mount? {mount.toString()}
      <button onClick={() => setMount(!mount)}>
        toggle to mount or unmount bellow component
      </button>
      {mount && <TestView />}
      {/* When enable View2, the bug will be fixed. */}
      {/* <View2 /> */}
    </div>
  );
}

function TestView() {
  const [state, mutate] = useAtom(TestAtom);
  return (
    <div style={{ background: "#fff", color: "#000" }}>
      <p>test view</p>
      <p>loading state: {state.status}</p>
      <button disabled={state.isLoading} onClick={() => mutate([1])}>
        mutate
      </button>
    </div>
  );
}

function View2() {
  const state = useAtomValue(TestAtom);

  return (
    <div>
      <p>loading state observed at a standalone view: {state.status}</p>
    </div>
  );
}

export default App;
