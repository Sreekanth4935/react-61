// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachData} = props
  const {id, language} = eachData
  return (
    <li className="list-item">
      <button type="button" className="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
