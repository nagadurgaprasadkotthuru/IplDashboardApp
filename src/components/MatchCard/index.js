// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails
  const colorClass = matchStatus === 'Lost' ? 'loss' : 'won'
  return (
    <li className="list-element">
      <img
        className="match-card-logo"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="competing-team1">{competingTeam}</p>
      <p className="result1">{result}</p>
      <p className={colorClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
