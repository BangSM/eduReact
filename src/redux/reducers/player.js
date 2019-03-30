const playerInitialState = {
  title : 'My Scoreboard',
  players : [
    {_id: 0, name : "BSM", score : 0 },
    {_id: 1, name : "brad", score : 0 },
    {_id: 2, name : "shawn", score : 0 },
    {_id: 3, name : "levi", score : 0 },
    {_id: 4, name : "kerry", score : 0 },
    {_id: 5, name : "rich", score : 0 }
  ]
}

export const playerReducer = (state=playerInitialState, action) => {
  return state 
}