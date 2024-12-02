// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWin, score, onClickPlay} = props
  const onClickPlayAgain = () => {
    onClickPlay()
  }
  const imageUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWin ? 'You Won' : 'You Lose'
  const scoreText = isWin ? 'Best Score' : 'Score'

  return (
    <div className="lose-card">
      <div className="loss-text">
        <h1>{resultText}</h1>
        <p>{scoreText}</p>
        <p className="score-count">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
