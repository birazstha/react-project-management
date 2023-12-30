import Sidebar from "./components/Sidebar";

let tabs = ["Learning React", "Practicing React", "Mastering React"];

function App() {
  return (
    <>
      <Sidebar tabs={tabs} />
    </>
  );
}

export default App;
