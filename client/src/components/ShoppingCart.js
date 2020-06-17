import React from 'react'

export default class ShoppingCardPanel extends React.Component {
  constructor (props) {
    super(props)

    this.handleOverlayClick = this.handleOverlayClick.bind(this)
  }

  handleOverlayClick (e) {
    // How to make modal close on click outside:
    // https://stackoverflow.com/questions/37573608/how-to-make-modal-close-on-click-outside/37573735

    if (e.target === document.getElementById('cart-panel-overlay')) {
      this.props.handleCartToggle()
    }
  }

  render () {
    return (
      <>
        <div id='cart' className={`cart__panel ${this.props.isOpen ? 'active' : ''}`}>
          <div>
            <div className='cart__panel-header'>
              <span>購物車</span>
              <button className='btn btn-outline-primary'>結帳</button>
            </div>

            <div className='cart__panel-content'>
              <div className='cart__items'>
                {/* ITEM */}
                {
                  this.props.cartData.map(item => {
                    return (
                      <div className='cart__item' data-id={item.id} key={`cart-product-${item.id}`}>
                        {/* ITEM IMG */}
                        <div className='cart__item-img-wrapper'>
                          <div className='cart__item-img' style={{ backgroundImage: `url("${item.imgSrc}")` }} />
                        </div>
                        {/* ITEM CONTENT */}
                        <div className='cart__item-content'>
                          <span>{item.name} <br />尺寸：{item.size} / {item.amount} 件</span>
                        </div>
                        {/* <a className='cart__item-action' href='#'>刪除</a> */}
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </div>

        <div id='cart-panel-overlay' className='cart__panel-overlay' onClick={this.handleOverlayClick} />
      </>
    )
  }
}
