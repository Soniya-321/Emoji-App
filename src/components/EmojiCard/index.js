// Write your code here.
import './index.css'
const EmojiCard = props => {
  const {emojisList, shuffledEmojisList} = props
  const {emojiUrl, id, emojiName} = emojisList
  const onClickEmoji = () => {
    console.log('click', id)
    shuffledEmojisList(id, emojiName)
  }
  return (
    <li className="list-container">
      <button onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="card-img" />
      </button>
    </li>
  )
}

export default EmojiCard
