import "./App.css";
import { CategoryList } from "./presentation/components/category/CategoryList";
import { SuplierList } from "./presentation/components/suplier/SuplierList";

function App() {
  return (
    <>
      <div>
        <SuplierList />
        <CategoryList />
      </div>
    </>
  );
}

export default App;
