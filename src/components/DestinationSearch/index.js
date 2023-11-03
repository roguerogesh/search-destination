import './index.css'

const DestinationSearch = props => {
  const {destinationItem, key} = props
  const {name, imgUrl} = destinationItem
  console.log(key)

  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationSearch
