import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import MenuBuilder from './Containers/MenuBuilder/MenuBuilder'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MenuBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
