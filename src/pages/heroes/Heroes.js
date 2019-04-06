import React from 'react'
import axios from 'axios'
import styles from './Heroes.module.scss'

export default class Heroes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    this.getHeroes()
    console.log(this.state.heroes)
  }

  async getHeroes() {
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes')
    this.setState({
      heroes: res.data
    })
  }

  render() {
    return (
      <div className="row">
        {
          this.state.heroes.map(hero => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 p-1 p-sm-2 p-md-3">
              <div className="card" key={hero.hero_id}>
                <img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/baseline-face-24px.svg'} className="card-img-top" alt={hero.name} />
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <p className="card-text">{hero.email}</p>
                  <p className="card-text">{hero.sex}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}