import React from 'react';
import classes from './Modal.module.css';

import Aux from '../../../hoc/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  let modalClass = '';
  if (props.isModalShown) {
    modalClass = classes['Modal--animate'];
  }

  return (
    <Aux>
      <Backdrop
        show={props.isModalShown}
        hide={props.hideModal}
      />
      <div className={[classes.Modal, modalClass].join(' ')}>
        {props.children}
      </div>
    </Aux>
  );
}

export default modal;