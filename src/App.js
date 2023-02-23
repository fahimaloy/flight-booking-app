import Header from "./components/Header";
import InputFields from "./components/InputFields";
import PreviewTable from "./components/PreviewTable";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputFields />
      <PreviewTable />
    </Provider>
  );
}

export default App;
