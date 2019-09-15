/* eslint no-unused-vars: 0 */

import React from 'react'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'
import SHOP_DATA from './ShopData'

class ShopPage extends React.Component {
  constructor () {
    super()

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
