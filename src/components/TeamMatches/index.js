// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    team: '',
    bannerUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData
    const formattedLatestMatchDetails = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }
    const formattedRecentMatchesList = recentMatches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))
    this.setState({
      team: id,
      bannerUrl: teamBannerUrl,
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatchesList: formattedRecentMatchesList,
      isLoading: false,
    })
  }

  getBannerUrl = () => {
    const {bannerUrl} = this.state
    return <img className="banner" alt="team banner" src={bannerUrl} />
  }

  getLatestMatches = () => {
    const {latestMatchDetails} = this.state
    return <LatestMatch latestMatchDetails={latestMatchDetails} />
  }

  getRecentMatchesList = () => {
    const {recentMatchesList} = this.state
    return (
      <ul className="match-cards-container">
        {recentMatchesList.map(each => (
          <MatchCard matchCardDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, team} = this.state
    return (
      <div className={`team-matches-bg-container ${team}`}>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            {this.getBannerUrl()}
            <h4 className="latest-matches-heading">Latest Matches</h4>
            {this.getLatestMatches()}
            {this.getRecentMatchesList()}
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
