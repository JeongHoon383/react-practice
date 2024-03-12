import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  return (
    <div className="flex flex-col w-[500px] m-auto gap-[20px] mt-[20px]">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
