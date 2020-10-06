import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Body from '../src/components/Body';

class App extends Component {
	constructor(props) {
		super(props);

		let users = JSON.parse(localStorage.getItem('user'));
		this.state = {
			user: users,
		}
	};

  // eslint-disable-next-line no-unused-vars
  componentDidMount() {
    const users = [
      {
        'id': 1,
        'name': 'Nguyen Van A',
        'email': 'nguyenvana@gmail.com',
      },
      {
        'id': 2,
        'name': 'Nguyen Van B',
        'email': 'nguyenvanb@gmail.com',
      },
      {
        'id': 3,
        'name': 'Nguyen Van C',
        'email': 'nguyenvanc@gmail.com',
      },
      {
        'id': 4,
        'name': 'Nguyen Van D',
        'email': 'nguyenvand@gmail.com',
      },
      {
        'id': 5,
        'name': 'Nguyen Van E',
        'email': 'nguyenvane@gmail.com',
      },
    ];

	localStorage.setItem('user', JSON.stringify(users));
  };

  render() {
    return (
      <div className="App">
         <Header />
         <Body data={this.state.user} />
      </div>
    );
  }
}

export default App;
