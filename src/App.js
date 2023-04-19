import React, {useState, useEffect} from 'react'
import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';

function App() {
  const [stores, setStores] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then((r) => r.json())
    .then((data) => setStores(data))
  }, [])

  const searchedStores = stores.filter(store => store.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <NewStoreForm />
      <StoreList stores={searchedStores}/>
    </div>
  );
}

export default App;
