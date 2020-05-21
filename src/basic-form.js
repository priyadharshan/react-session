import React from 'react';
import ReactDOM from 'react-dom';

class BasicForm extends React.Component {
    constructor(props) {
      super(props);
  
      // This binding is necessary to make `this` work in the callback
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      // preventing from automatically sending a post request/full page refresh
      event.preventDefault();
  
      // we can access the form element directly, console.dir(event.target)
      // one option: const username = event.target[0].value
      // If ref is not needed, then use the id
      const username = event.target.elements.usernameInput.value;
    // Alerting this to users or sending this to backend server

      alert(`You entered: ${username}`);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input id="usernameInput" type="text" />
        </div>
        {/* Forms are automatically submitted on type="submit*/}
        {/* Make sure to specify the type on the button */}
        <button type="submit">Submit</button>
      </form>
      );
    }
  }
  
  ReactDOM.render(
    <BasicForm />,
    document.getElementById('root')
  );