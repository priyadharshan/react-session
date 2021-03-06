import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: []
      };
    }
  
    componentDidMount() {
      fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              employees: result.data
            });
          },
        )
    }
  
    render() {
      const { employees } = this.state;
      return (
          <ul>
            {employees.map(employee => (
              <li key={employee.id}>
                {employee.employee_name} {employee.employee_salary}
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