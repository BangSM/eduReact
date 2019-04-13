import { UPDATE_TITLE, ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER } from '../actionTypes'
const playerInitialState = {
  title: 'My Scoreboard',
  players: [
    { _id: 0, name: "BSM", score: 0 },
    { _id: 1, name: "brad", score: 0 },
    { _id: 2, name: "shawn", score: 0 },
    { _id: 3, name: "levi", score: 0 },
    { _id: 4, name: "kerry", score: 0 },
    { _id: 5, name: "rich", score: 0 }
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          { name: action.name, score: 0, _id: state.players.length + 1 }
        ]
      }
    case CHANGE_SCORE:
    const players = [...state.players];
      state.players.forEach(player => {
        if (player._id === action.id) {
          player.score += action.delta
        }
      })
      return {
        ...state,
        players

      }
      case REMOVE_PLAYER : 
      return {
        ...state,
        players : state.players.filter(player => player._id !== action.id )
      }
    default: return state
  }
}