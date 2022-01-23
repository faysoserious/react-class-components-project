import React from "react";
import './SearchBar.css'

const sortByOptions = {
  "Best Match": "https://api.yelp.com/v3/businesses/search?sort_by=best_match",
  "Highest Rated": "https://api.yelp.com/v3/businesses/search?sort_by=rating",
  "Most Reviewed": "https://api.yelp.com/v3/businesses/search?sort_by=review_count"
}

export class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      console.log(sortByOption, sortByOptionValue);

      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">

          <div className="search">
            <input type="text" name="search-business" id="search-business" placeholder="Search Business" required />
          </div>
          <div className="search">
            <input type="text" name="location" id="location" placeholder="Where?" required />
          </div>
        </div>
          <div className="SearchBar-submit">
            <button>Let's Go</button>
          </div>


        
      </div>





    );
  }
}