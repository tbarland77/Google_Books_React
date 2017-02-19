import React, {Component} from 'react';
import _ from 'lodash';
class BookList extends Component {

  constructor(props) {
    super();
    this.state = {
      bookData: props.bookData,
    };
  }

  render() {
    var Bookinfo = [];
    for (var i=0; i < this.props.bookData.length; i++) {
      Bookinfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3'>Title: {this.props.bookData[i].volumeInfo.title}</div>);
      Bookinfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3'>Author: {(this.props.bookData[i].volumeInfo.authors !== undefined) ? this.props.bookData[i].volumeInfo.authors[0] : null}</div>);
      Bookinfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3'>Publisher: {this.props.bookData[i].volumeInfo.publisher}</div>);
      Bookinfo.push(<div key={_.uniqueId()} className='jumbotron col-sm-3 col-md-3 col-lg-3'>Publisher Date: {this.props.bookData[i].volumeInfo.publishedDate}</div>);

    }

    return (
      <div>
      <h2>Returned books:</h2>
      <div className='container'>
      <div className='row'>
      {Bookinfo}
      </div>
      </div>
      </div>
    );
  }
};

BookList.propTypes = { bookData: React.PropTypes.array}

export default BookList;
