import React from 'react'
import axios from 'axios'
import styles from './Heroes.module.scss'

export default class Heroes extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      heroes : []
    }
  }

  componentDidMount(){
    this.getHeroes()
    console.log(this.state.heroes)
  }

  async getHeroes(){
    const res = await axios.get('http://eastflag.co.kr:8080/api/heroes')
    this.setState({
      heroes : res.data
    })
  }

  render(){
    return (
      <ul className={styles['img-box']}>
        {
          this.state.heroes.map(hero => (
            <li key={hero.hero_id}>
              <img src={hero.photo} />
              <span>{hero.name}</span>
            </li>
          ))
        }
      </ul>
    )
  }
}