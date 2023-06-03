import React from 'react';
import '../css/Item.css';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
    }

    render() {
        return (
            <div className="main-content">
                <h2>{ this.item.brand }</h2>
                <h1>{ this.item.title }</h1>
                <h3>{ this.item.description }</h3>
                <div className="description">
                    { this.item.descriptionFull }
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{ this.item.currency }{ this.item.price.toFixed(2) }</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

// Item.propTypes = {
//     brand: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     descriptionFull: PropTypes.string,
//     currency: PropTypes.string,
//     price: PropTypes.number,
// };
