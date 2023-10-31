import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {id, name, imgUrl} = destinationsList
  console.log(id)

  return (
    <div className="container">
      <h1 className="main-heading">Destination Search</h1>
      <input type="search" />
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </div>
  )
}

export default DestinationSearch
