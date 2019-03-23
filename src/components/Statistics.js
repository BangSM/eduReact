import React from 'react'

export const Statistics = (props) => {
  
  return (
    <table>
      <tbody>
        <tr>
          <td>Players :</td>
          <td>{props.totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Score :</td>
          <td>{props.totalScore}</td>
        </tr>
      </tbody>
    </table>
  )
}
