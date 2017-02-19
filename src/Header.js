import React from 'react';

const Header = (props) => {
    return (
      <div>
      <h2>Welcome to the {props.name} app! </h2>
      </div>
    );
};

Header.defaultProps = { name: "Google Books"}
Header.propTypes = { name: React.PropTypes.string}

export default Header;
