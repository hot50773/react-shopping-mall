import React from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'

// TODO: BreadCrumb - https://pjchender.blogspot.com/2018/11/react-react-router-dynamic-breadcrumb.html
class ProductDetailsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: '',
      amount: 1
    }

    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleAmountChange = this.handleAmountChange.bind(this)
    this.handleBuyClick = this.handleBuyClick.bind(this)
  }

  handleSizeChange (e) {
    // https://zh-hant.reactjs.org/docs/forms.html
    if (e.target.value) this.setState({ size: e.target.value })
  }

  handleAmountChange (e) {
    if (e.target.value) this.setState({ amount: e.target.value })
  }

  handleBuyClick (e) {
    if (this.state.size === '') {
      window.alert('請選擇尺寸')
      return
    }

    if (this.state.amount === 0) {
      window.alert('請選擇數量')
      return
    }

    this.props.addToCartData({
      id: this.props.id,
      name: this.props.name,
      imgSrc: this.props.imgSrc,
      price: this.props.price,
      size: this.state.size,
      amount: this.state.amount
    })

    window.alert(`商品已成功加入購物車!!\n\n名稱：${this.props.name}\n尺寸：${this.state.size}\n數量：${this.state.amount}`)
  }

  renderSizeOption ({ size = '', storageNum } = {}) {
    if (typeof storageNum === 'number' && storageNum === 0) {
      console.log(`storageNumber of size ${size} is 0`)
      return
    }

    // TODO:Typechecking With PropTypes -> https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html

    // 語法檢查: storageNum
    if (storageNum === '' || storageNum === null || typeof storageNum === 'undefined') throw new Error('function input "storageNum" should not be empty or undefined')
    if (typeof storageNum !== 'number') throw new Error('variable "storageNum" should be a number')
    if (storageNum < 0) throw new Error('storageNumber of size should not be empty')

    // 語法檢查: size
    if (size === '' || size === null || typeof size === 'undefined') throw new Error('function input "size" should not be empty or undefined')
    if (typeof size !== 'string') throw new Error('variable "size" should be a string')

    // 渲染元素
    // if (storageNum > 0) return (<option key={size}>{size}</option>)

    if (storageNum > 0) {
      return (
        <CustomInput id={`inpRadio${size}`} key={`inpRadio${size}`} name='inpRadioSize' type='radio' label={size} value={size} inline onChange={this.handleSizeChange} />
      )
    }
  }

  renderIntegerOptions ({ min, max } = {}) {
    // 用迭代的方式生成元素: https://zh-hant.reactjs.org/docs/lists-and-keys.html

    const options = []
    for (let num = Math.trunc(min); num <= Math.trunc(max); num++) {
      // 注意：Each child in a list should have a unique "key" prop.
      options.push(<option key={num}>{num}</option>)
    }

    return options
  }

  render () {
    return (
      <Container className='p-5'>
        <Row>
          <Col sm='0' md='1' />
          <Col sm='6' md='4'>
            <img src={this.props.imgSrc} alt={this.props.name} className='w-100 mb-5' />
          </Col>
          <Col sm='6' md='6'>
            <h3>{this.props.name}</h3>
            <br />
            <h3 className='text-primary m-font-family-number font-weight-bold'>{this.props.price}</h3>
            <br />
            <Form>
              <FormGroup>
                <Label>選擇尺寸</Label>
                <div>
                  {
                    this.props.storage.map(item => {
                      if (item.size === undefined) console.log('"item.size" is undefined')
                      if (item.storageNum === undefined) console.log('"item.storageNum" is undefined')

                      return this.renderSizeOption({ size: item.size, storageNum: item.storageNum })
                    })
                  }
                </div>
              </FormGroup>

              <FormGroup>
                <Label>數量</Label>
                <Input type='select' name='inpSelectAmount' id='inpSelectAmount' onChange={this.handleAmountChange}>
                  {this.renderIntegerOptions({ min: 1, max: 10 })}
                </Input>
              </FormGroup>
            </Form>
            <br />
            <Button color='primary' onClick={this.handleBuyClick}>加入購物車</Button>
          </Col>
          <Col sm='0' md='1' />
        </Row>
      </Container>
    )
  }
}

export default ProductDetailsView
