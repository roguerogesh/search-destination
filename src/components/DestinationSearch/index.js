import './index.css'

const DestinationSearch = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
