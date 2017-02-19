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

   componentDidMount() {
     this.fetchData();
   }

   componentDidUpdate() {
     this.fetchData();
   }

   fetchData() {
     let REQUEST_URL;
     if (this.state.key !== "") {
       REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.key;
     } else {
       REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
     }
     axios.get(REQUEST_URL)
       .then(response => {
         const bookData = response.data.items;
         this.setState ({ bookData });
         console.log("current book data is: " + bookData);
       });
   }

   handleSubmitButton(event, keyValue) {
     debugger;
     event.preventDefault();
     this.setState({
       key: this.refs.keyValue.value,
     });
     console.log("Current key is " + this.state.key);
     debugger;
   }

  render() {
    return (
      <div>
      <input type="text" id="searchText" placeholder="Search" ref="keyValue" />
      <button id="searchButton" type="button" onClick={this.handleSubmitButton.bind(this)}>
					<i className="fa fa-search"></i> Search
				</button>

        <br />
        <br />
        <BookList bookData={this.state.bookData} />
      </div>
    );
  }
};

export default SearchBooks;
