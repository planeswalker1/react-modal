import React from 'react';

import Aux from '../../hoc/Auxillary';

const layout = (props) => {
  return (
    <Aux>
      <p>Click on this modal</p>
      <main>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;