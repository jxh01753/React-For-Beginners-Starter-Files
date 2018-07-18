import React from 'react';
import { format } from 'util';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          <h2>Please select a store.</h2>
          <input type="text" required placeholder="enter a store name" />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
