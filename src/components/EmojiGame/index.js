/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      score: 0,
      topScore: 0,
      emojisList: emojisList,
      clickedList: [],
      loseGameView: false,
      winGameView: false,
    }
  }

  shuffledEmojisList = id => {
    const {emojisList, clickedList, score, topScore} = this.state
    console.log(id)
    const isClicked = clickedList.some(each => each.id === id)
    if (isClicked) {
      this.setState({
        loseGameView: true,
        topScore: Math.max(score, topScore),
        clickedList: [],
      })
    } else {
      const updatedClickedList = [
        ...clickedList,
        emojisList.find(each => each.id === id),
      ]
      if (updatedClickedList.length === emojisList.length) {
        this.setState({
          winGameView: true,
          topScore: Math.max(score + 1, topScore),
          score: score + 1,
          clickedList: [],
        })
      } else {
        emojisList.sort(() => Math.random() - 0.5)
        this.setState(prevState => ({
          emojisList,
          score: prevState.score + 1,
          clickedList: updatedClickedList,
        }))
      }
    }
  }

  onClickPlay = () => {
    this.setState({
      loseGameView: false,
      winGameView: false,
      score: 0,
      clickedList: [],
    })
  }

  render() {
    const {score, topScore, emojisList, loseGameView, winGameView} = this.state

    return (
      <div className="app-container">
        <NavBar
          score={!winGameView && !loseGameView ? score : null}
          topScore={!winGameView && !loseGameView ? topScore : null}
        />
        <div className="emoji-game-container">
          {loseGameView || winGameView ? (
            <WinOrLoseCard
              score={score}
              isWin={winGameView}
              onClickPlay={this.onClickPlay}
            />
          ) : (
            <ul className="unordered-list-container">
              {emojisList.map(each => (
                <EmojiCard
                  emojisList={each}
                  key={each.id}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
