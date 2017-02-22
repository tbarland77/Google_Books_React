import React, {Component} from 'react';
import _ from 'lodash';
class BookList extends Component {

  constructor(props) {
    super();
    this.state = {
      bookData: props.bookData,
      showDetails: false,
    };
    this.toggleDetailsState = this.toggleDetailsState.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showDetails !== this.state.showDetails) {
    }
  }

  toggleDetailsState(event) {
    event.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }


  render() {
    var bookInfo = [];
    var bookDetails = [];
    for (var i=0; i < this.props.bookData.length; i++) {
      bookInfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3 col-xl-3'>Title: {this.props.bookData[i].volumeInfo.title}</div>);
      bookInfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3 col-xl-3'>Author: {(this.props.bookData[i].volumeInfo.authors !== undefined) ? this.props.bookData[i].volumeInfo.authors[0] : null}</div>);
      bookInfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3 col-xl-3'>Publisher: {this.props.bookData[i].volumeInfo.publisher}</div>);
      bookInfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3 col-xl-3'>Publisher Date: {this.props.bookData[i].volumeInfo.publishedDate}</div>);
      if (this.state.showDetails)
      {
        bookDetails.push(<img key={_.uniqueId()} className='jumbotron col-sm-2 col-md-2 col-lg-2 col-xl-2 img-responsive' src={(this.props.bookData[i].volumeInfo.imageLinks.smallThumbnail !== undefined) ? this.props.bookData[i].volumeInfo.imageLinks.smallThumbnail : null} alt='Book Cover' />);
        bookDetails.push(<div key={_.uniqueId()} className='jumbotron col-sm-2 col-md-2 col-lg-2 col-xl-2'>Rating: {this.props.bookData[i].volumeInfo.ratingsCount}</div>);
        bookDetails.push(<div key={_.uniqueId()} className='jumbotron col-sm-2 col-md-2 col-lg-2 col-xl-2'>Print Type: {this.props.bookData[i].volumeInfo.printType}</div>);
        bookDetails.push(<div key={_.uniqueId()} className='jumbotron col-sm-2 col-md-2 col-lg-2 col-xl-2'>Page Count: {this.props.bookData[i].volumeInfo.pageCount}</div>);
        bookDetails.push(<a key={_.uniqueId()} className='jumbotron col-sm-2 col-md-2 col-lg-2 col-xl-2' href={this.props.bookData[i].volumeInfo.previewLink}>Preview Link</a>);
        bookDetails.push(<div key={_.uniqueId()} className='jumbotron col-sm-12 col-md-12 col-lg-12 col-xl-12'>DESC: {this.props.bookData[i].volumeInfo.description}</div>);
      }
    }

    return (
      <div>
      <h2>Returned books:</h2>
      <button className='btn btn-danger' onClick={this.toggleDetailsState}>Toggle Detail Rows</button>
      <div className='container'>
      <div className='row'>
      {bookInfo}
      </div>
      <div className='row'>
      {bookDetails}
      </div>
      </div>
      </div>
    );
  }
};

BookList.propTypes = { bookData: React.PropTypes.array}

export default BookList;
