import React from 'react';
import './collection-preview.scss';

import CollectionItem from '../collection-item/collection-item';

const CollectionPreview  = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherCollectionItems}) => {
                        return <CollectionItem key={id} {...otherCollectionItems} />
                    })}
            </div>
        </div>
    )
}

export default CollectionPreview;