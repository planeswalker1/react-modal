import React, {Component} from 'react';
import classes from './Home.module.css';

import Aux from '../../hoc/Auxillary';
import Modal from '../../components/UI/Modal/Modal';
import ModalSummary from '../../components/ModalSummary/ModalSummary';

class Home extends Component {
  state = {
    isModalShown: false
  }
  
  hideModalHandler = () => {
    this.setState({
      isModalShown: false
    });
  }

  showModalHandler = () => {
    this.setState({
      isModalShown: true
    })
  }

  render () {
    return (
      <Aux>
        <Modal
          isModalShown={this.state.isModalShown}
          hideModal={this.hideModalHandler}
        >
          <ModalSummary />
        </Modal>
        <button className={classes.Button} onClick={this.showModalHandler}>Show Modal</button>
      </Aux>
    );
  }
}

export default Home;