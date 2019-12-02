import React, {Component}from 'react'
import '../MenuOptions/MenuOptions.css';
import PropTypes from 'prop-types';


class MenuOptions extends Component {
    render () {
        let option = null;
switch(this.props.type){
    case ('Bread-bottom'):
        option = <div className='BreadBottom'></div>;
        break;
    case('bread-top'):
        option = (
            <div className='BreadTop'>
            <div className='Seeds1'></div>
            <div className='Seeds2'></div>
            </div>
        );
        break; 
    case('meat'):
    option = <div className='Meat'></div>;
    break;
    case('cheese'):
    option = <div className='Cheese'></div>;
    break;
    case('bacon'):
    option = <div className='Bacon'></div>;
    break;
    case('salad'):
    option = <div className='Salad'></div>;
    break;
    default:
        option = null;
}
return option;

    }
} 
MenuOptions.proTypes = {
    type: PropTypes.string.isRequired
};
export default MenuOptions;