import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        photos: []
      };
    }
  
    componentDidMount() {
      fetch("http://www.splashbase.co/api/v1/images/latest")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              photos: result.images
            });
          },
        )
    }
  
    render() {
      const { photos } = this.state;
      return (
          <ul>
            {photos.map(photo => (
              <li key={photo.id}>
                <img src={photo.url} alt={photo.id} />
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