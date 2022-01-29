import './App.css';
import { BusinessList } from '../BusinessList/BusinessList';
import { SearchBar } from '../SearchBar/SearchBar';
import React from 'react';
import { Yelp } from '../../util/Yelp';

/* const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];
 */
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);

    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });

  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>ravenous</h1>
        </header>
        <main>
          <section>
            <SearchBar searchYelp={this.searchYelp}/>
          </section>
          
          <section>
            <BusinessList businesses={this.state.businesses} />
          </section>
        </main>

      </div>
    );
    
  }
}


