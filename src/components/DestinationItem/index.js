// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationItem} = this.props
    const {name, imgUrl} = destinationItem

    return (
      <li className="item-container">
        <img src={imgUrl} className="destination-image" alt={name} />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
