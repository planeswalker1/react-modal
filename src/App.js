import React, {Component} from 'react';

import Layout from './components/Layout/Layout';
import Home from './containers/Home/Home';

class App extends Component {
  render () {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
