import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const failureView =
  'https://assets.ccbp.in/frontend/react-js/api-failure-view.png'

class GithubPopularRepos extends Component {
  state = {
    activeOptionId: languageFiltersData[0].id,
    isLoading: true,
    allRepos: [],
    apiFail: false,
  }

  componentDidMount() {
    this.getRepos()
  }

  //   componentDidMount() {
  //     this.setState({isLoading: true}, () => {
  //       this.getRepos()
  //     })
  //   }

  getRepos = async () => {
    const {activeOptionId} = this.state

    const apiUrl = `https://apis.ccbp.in/popular-repos/?language=${activeOptionId}`
    const response = await fetch(apiUrl)

    let updatedRespos

    if (response.ok === true) {
      const data = await response.json()
      console.log(response)
      const popularRepos = data.popular_repos
      // console.log(popularRepos)
      updatedRespos = popularRepos.map(eachRepo => ({
        avatarUrl: eachRepo.avatar_url,
        forksCount: eachRepo.forks_count,
        id: eachRepo.id,
        issuesCount: eachRepo.issues_count,
        name: eachRepo.name,
        starsCount: eachRepo.stars_count,
      }))
      this.setState({allRepos: updatedRespos, isLoading: false})
    } else {
      this.setState({apiFail: true, isLoading: false})
    }
  }

  updateActiveOptionWhenClicked = newId => {
    this.setState(
      {activeOptionId: newId, isLoading: true, allRepos: [], apiFail: false},
      () => {
        this.getRepos()
      },
    )
  }

  renderRepository = () => {
    const {allRepos} = this.state

    return (
      <div className="ul-container">
        <ul className="list-container">
          {allRepos.map(eachRepo => (
            <RepositoryItem eachRepo={eachRepo} key={eachRepo.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-img-container">
      <img src={failureView} alt="failure view" className="failure-img" />
    </div>
  )

  render() {
    const {isLoading, apiFail, activeOptionId} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              key={eachData.id}
              eachData={eachData}
              updateActiveOptionWhenClicked={this.updateActiveOptionWhenClicked}
              isActive={eachData.id === activeOptionId}
            />
          ))}
        </ul>
        {isLoading && this.renderLoader()}
        {apiFail ? this.renderFailureView() : this.renderRepository()}
      </div>
    )
  }
}

export default GithubPopularRepos
