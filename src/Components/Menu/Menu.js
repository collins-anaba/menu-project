import React from 'react';
import '../Menu/Menu.css';
import MenuBuilder from '../../Containers/MenuBuilder/MenuBuilder';

const menu = (props) => {
    return (
        <div className='Menu'>
<MenuBuilder type='bread-top'/>
<MenuBuilder type='bread-cheese'/>
<MenuBuilder type='bread-meat'/>
<MenuBuilder type='bread-bottom'/>
        </div>
    );
};

export default menu;