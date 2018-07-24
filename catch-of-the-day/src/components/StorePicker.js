import React from 'react';
import { getFunName } from '../helpers';

//

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    console.log(this.myInput.value.value);
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please select a store.</h2>
        <input
          type="text"
          ref={this.myInput}
          onChange={this.handleInput}
          required
          placeholder="enter a store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
