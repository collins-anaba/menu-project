import React from 'react';
import Aux from '../../HOC/Aux';
import  '../Layout/Layout.css'

const layout = (props) => (
    <Aux>
    <div>Toolbar, sideDrawer,Backdrop</div>
    <main className='Content'>
        {props.children}
    </main>
    </Aux>
);

export default layout;