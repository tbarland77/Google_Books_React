import React, {Component} from 'react';
import axios from 'axios';
import BookList from './BookList';
class SearchBooks extends Component {

  constructor(props) {
    super();
    this.state = {
      bookData: [],
      key: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let REQUEST_URL;
    if (prevState.key !== this.state.key) {
      REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.key;
      axios.get(REQUEST_URL)
      .then(response => {
        const bookData = response.data.items;
        this.setState ({ bookData });
      });
    }
  }

  handleSubmitButton(event) {
    event.preventDefault();
    this.setState({
      key: this.refs.keyValue.value,
    });
  }

  render() {
    return (
      <div>
      <input type="text" id="searchText" placeholder="Search" ref="keyValue" />
      <button id="searchButton" className='btn btn-primary' type="button" onClick={this.handleSubmitButton.bind(this)}>
      <i className="fa fa-search"></i> Search
      </button>

      <br />
      <BookList bookData={this.state.bookData} />
      </div>
    );
  }
};

export default SearchBooks;
