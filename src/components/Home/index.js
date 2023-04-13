// Write your code here
// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getCardsList()
  }

  getCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formattedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamCardsList: formattedData, isLoading: false})
  }

  getHomeCards = () => {
    const {teamCardsList} = this.state
    return (
      <div className="content-container">
        <div className="heading-container">
          <img
            className="ipl-log"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="cards-container">
          {teamCardsList.map(each => (
            <TeamCard teamCard={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getHomeCards()
        )}
      </div>
    )
  }
}

export default Home
