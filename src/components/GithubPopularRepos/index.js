import {Component} from 'react'
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

class GithubPopularRepos extends Component {
  state = {
    activeOptionId: languageFiltersData[0].id,
    isLoading: true,
    allRepos: [],
  }

  componentDidMount() {
    this.getRepos()
  }

  getRepos = async () => {
    const apiUrl = 'https://apis.ccbp.in/popular-repos'
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    const popularRepos = data.popular_repos
    console.log(popularRepos)
    const updatedRespos = popularRepos.map(eachRepo => ({
      avatarUrl: eachRepo.avatar_url,
      forksCount: eachRepo.forks_count,
      id: eachRepo.id,
      issuesCount: eachRepo.issues_count,
      name: eachRepo.name,
      starsCount: eachRepo.stars_count,
    }))
    // /console.log(updatedRespos)
    this.setState({allRepos: updatedRespos, isLoading: false})
  }

  render() {
    const {allRepos, isLoading} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem eachData={eachData} />
          ))}
        </ul>
        <div className="ul-container">
          <ul className="list-container">
            {allRepos.map(eachRepo => (
              <RepositoryItem eachRepo={eachRepo} key={eachRepo.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
