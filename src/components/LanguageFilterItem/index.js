// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {eachData, updateActiveOptionWhenClicked, isActive} = props
  const {id, language} = eachData

  const onClickOption = () => {
    updateActiveOptionWhenClicked(id)
  }
  const isActived = isActive && 'special-button'
  return (
    <li className={`list-item ${isActived} `} onClick={onClickOption}>
      <button type="button" className="button">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
