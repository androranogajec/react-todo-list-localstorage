import s from "./App.module.css";
import Todolist from "./todos/components/Todolist";

function App(props) {
  return (
      <div className={s.container}>
            <Todolist />
      </div>

  );
}

export default App;
