// Write your code here.
import './index.css'
const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo-img"
          alt="emoji logo"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        {score !== null && <p className="score">Score: {score}</p>}
        {score !== null && <p className="score">Top Score: {topScore}</p>}
      </div>
    </nav>
  )
}
export default NavBar
