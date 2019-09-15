/* eslint no-unused-vars: 0 */

import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './PreviewCollection.scss'

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item, i) => i < 4).map(({ id, ...otherItemProps }) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
)

export default PreviewCollection
