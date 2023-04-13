// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="container">
        <div className="container1">
          <p className="competing-team">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="venue">{result}</p>
        </div>
        <img
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
          src={competingTeamLogo}
        />
      </div>
      <hr className="horizontal-line" />
      <div className="container2">
        <p className="heads">First Innings</p>
        <p className="tails">{firstInnings}</p>
        <p className="heads">Second Innings</p>
        <p className="tails">{secondInnings}</p>
        <p className="heads">Man Of The Match</p>
        <p className="tails">{manOfTheMatch}</p>
        <p className="heads">Umpire</p>
        <p className="tails">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
