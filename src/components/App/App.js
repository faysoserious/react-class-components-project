import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <section>
          <SearchBar />
        </section>
        <section>
          <BusinessList />
        </section>
      </main>

    </div>
  );
}

export default App;
