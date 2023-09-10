import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import Todos from './components/Todos';

function App() {
  // const theme = {
  //   txt_color : '#2c3e50',
  // }
  return (
    <>
      <Header/>
      <AddForm/>
      <Todos/>
    </>
  );
}

export default App;
