import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'
import styles from '../pages/scoreboard/Scoreboard.module.css'
import { changeScore } from '../redux/actions';
import { connect } from 'react-redux';


class Counter extends React.Component{
  // statics 이라는 클래스 공통 속성 키워드로 propTypes 적용'
  static propTypes = {
    score : PropTypes.number,
    id : PropTypes.number,
    handleChangeScore : PropTypes.func
  }
  render(){
    const {score , changeScore, id} = this.props
    return (
      <div className={styles.counter}>
      <button className={ClassNames(styles['counter-action'], styles.decrement)} onClick={() => {changeScore(id , -10)}}> - </button>
      <span className={styles['counter-score']}>{score}</span>
      <button className={ClassNames(styles['counter-action'], styles.increment)} onClick={() => {changeScore(id , +10)}}> + </button>
    </div>
    )
  }
}

// 액션을 디스패치하는 func를 Props로 subscribe 해서 가져온다.
// let mapDispathchToProps = (dispathch) => ({
//   changeScore : (id, delta) => (dispathch(changeScore(id, delta)))
// })

export default connect(null, {changeScore})(Counter)