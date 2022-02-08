import './App.css';
import GoodsList from './container/GoodsList';
import CartList from './container/CartList';
import Cart from './components/Cart';

function App() {
  return (
    <>
      {/* Comp 1 - Outputing data from store */}
        < GoodsList />
      {/* Comp 2 - Showing buy cart*/}
        < CartList />
    </>
  );
}

export default App;
