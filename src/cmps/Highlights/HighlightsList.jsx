import React from 'react'
import HighlightsPreview from './HighlightsPreview'

export default function HighlightsList({ items }) {
    return (
        <div className="flex column">
            { items.map((item, idx) => {
                return <HighlightsPreview key={idx} item={item} />
            })}
        </div>
    )
}
