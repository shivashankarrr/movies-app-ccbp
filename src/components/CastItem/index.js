import './index.css'

const CastItem = props => {
  const {details} = props
  const {originalName, character, profilePath} = details
  console.log(details)
  return (
    <li className="actor-details-container">
      <>
        {profilePath !== null ? (
          <img
            src={`http://image.tmdb.org/t/p/original/${profilePath}`}
            alt={originalName}
            className="profile-style"
          />
        ) : (
          <p>{originalName}</p>
        )}
      </>

      <p>
        {originalName} <br />
        <span className="character">
          As <br />
          {character}
        </span>
      </p>
    </li>
  )
}

export default CastItem
