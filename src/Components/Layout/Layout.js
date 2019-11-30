import React from 'react';
import Aux from '../../HOC/Aux';

const layout = (props) => (
    <Aux>
    <div>Toolbar, sideDrawer,Backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;