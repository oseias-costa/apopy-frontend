import "./App.css";
import { SuplierList } from "./presentation/components/SuplierList";
import { getUser } from "./oldclean";

function App() {
  console.log("1234", getUser);
  return (
    <>
      <div>
        <SuplierList />
      </div>
    </>
  );
}

export default App;
