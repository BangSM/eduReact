import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import styles from '../pages/scoreboard/Scoreboard.module.css'


class Counter extends React.Component{
  // statics 이라는 클래스 공통 속성 키워드로 propTypes 적용'
  static propTypes = {
    score : PropTypes.number,
    id : PropTypes.number,
    handleChangeScore : PropTypes.func
  }
  render(){
    const {score , handleChangeScore, id} = this.props
    return (
      <div className={styles.counter}>
      <button className={ClassNames(styles['counter-action'], styles.decrement)} onClick={() => {handleChangeScore(id , -10)}}> - </button>
      <span className={styles['counter-score']}>{score}</span>
      <button className={ClassNames(styles['counter-action'], styles.increment)} onClick={() => {handleChangeScore(id , +10)}}> + </button>
    </div>
    )
  }
}
export default Counter