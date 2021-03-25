import React from 'react'

export default function HighlightsPreview({ item }) {
    return (
        <div className="hl-prev-cont">
            <div className="flex highlights-preview">
                <img className="hl-prev-img" src={item.imgUrl} />
                <img className="hl-prev-divider" src={require("../../assets/img/icons/icon-minus.svg").default} />
                <div className="flex column hl-prev-txt">
                    <p className="hl-prev-title"> {item.title}</p>
                    <p className="hl-prev-desc"> {item.desc}</p>
                </div>
            </div >
        </div>
    )
}


