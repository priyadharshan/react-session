import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
        )
    }
  
    render() {
      const { items } = this.state;return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
    
  

  ReactDOM.render(
    <MyComponent />,
    document.getElementById('root')
  );