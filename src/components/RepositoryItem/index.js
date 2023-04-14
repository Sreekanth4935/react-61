// Write your code here
import './index.css'

const stars = 'https://assets.ccbp.in/frontend/react-js/stars-count-img.png'
const forks = 'https://assets.ccbp.in/frontend/react-js/forks-count-img.png '
const openIssues =
  'https://assets.ccbp.in/frontend/react-js/issues-count-img.png '
const failureView =
  'https://assets.ccbp.in/frontend/react-js/api-failure-view.png'

const RespositoryItem = props => {
  const {eachRepo} = props
  const {id, forksCount, avatarUrl, issuesCount, name, starsCount} = eachRepo

  return (
    <li className="list-element">
      <img src={avatarUrl} alt="name" className="avatar-url" />
      <p className="name">{name}</p>
      <div className="issues-container">
        <img src={stars} alt="stars" className="stars" />
        <p>{` ${starsCount} stars`}</p>
      </div>
      <div className="issues-container">
        <img src={forks} alt="forks" className="stars" />
        <p>{` ${forksCount} forks`}</p>
      </div>
      <div className="issues-container">
        <img src={openIssues} alt="open issues" className="stars" />
        <p>{` ${starsCount} issues`}</p>
      </div>
    </li>
  )
}

export default RespositoryItem
