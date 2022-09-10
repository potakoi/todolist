import logo from './logo.svg';
import './App.css';
import { GroceryList } from './GroceryList';

function App() {
  return(
    <div className="app">
        <div className="container">
            <h1>Grocery List</h1>
        </div>
        <GroceryList />
    </div>
)
}

export default App;
