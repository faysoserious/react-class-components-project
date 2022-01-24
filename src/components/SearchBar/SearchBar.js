import React from "react";
import './SearchBar.css'

/* const sortByOptions = {
  "Best Match": "https://api.yelp.com/v3/businesses/search?sort_by=best_match",
  "Highest Rated": "https://api.yelp.com/v3/businesses/search?sort_by=rating",
  "Most Reviewed": "https://api.yelp.com/v3/businesses/search?sort_by=review_count"
} */

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "term": '',
      "location": '',
      "sortBy": 'best_match'
    };
    //Bind event methods to 'this'
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }
  }
  //validate and update the CSS effect for each search type
  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      console.log("active", sortByOption);

      return 'active';
    } else {
      return '';
    }
  }
  handleSortByChange(sortByOption) {
    this.setState({
      "sortBy": sortByOption
    });
  }
  //update input element to reflect the text typed into the search field
  handleTermChange(event) {
    this.setState({
      "term": event.target.value
    });
  }
  handleLocationChange(event) {
    this.setState({
      "location": event.target.value
    });
  }
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];

      return (
        <li className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>
          {sortByOption}
        </li>);
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
            <input type="text"
              name="search-business"
              id="search-business"
              placeholder="Search Business"
              onChange={this.handleTermChange}
              required />
          </div>
          <div className="search">
            <input type="text"
              name="location"
              id="location"
              placeholder="Where?"
              onChange={this.handleLocationChange}
              required />
          </div>
        </div>
        <div className="SearchBar-submit">
          <button onClick={this.handleSearch}>Let's Go</button>
        </div>



      </div>





    );
  }
}