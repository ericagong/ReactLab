import ClassSuperConverter from "./components/converter/class/ClassSuperConverter";
import SuperConverter from "./components/converter/function/SuperConverter";

function App() {
  return (
    <div className='App'>
      <h3>Converter with Functional Component</h3>
      <SuperConverter></SuperConverter>
      <hr />
      <h3>Converter with Class Component</h3>
      <ClassSuperConverter></ClassSuperConverter>
    </div>
  );
}

export default App;
