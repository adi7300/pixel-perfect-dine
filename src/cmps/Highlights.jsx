import React from 'react'
import HighlightsList from './Highlights/HighlightsList';

export default function Highlights() {
    const items = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: require('../assets/img/homepage/menu-items/menu-item1.jpg').default
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: require('../assets/img/homepage/menu-items/menu-item2.jpg').default
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: require('../assets/img/homepage/menu-items/menu-item3.jpg').default
        },

    ]
    return (
        <div className="highlights">
            <div className="flex hl-inner-area">
                <div className="flex">
                    <div className="flex column hl-text">
                        <img className="hl-init-sign" src={require("../assets/img/patterns/pattern-divide.svg").default} />
                        <h1 className="hl-text-header">A few highlights from our menu</h1>
                        <h3 className="hl-text-desc">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                        Our menu is revamped every season.</h3>
                    </div>
                    <HighlightsList items={items} />
                </div>
            </div>
        </div>
    )
}
