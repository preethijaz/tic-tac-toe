import React from 'react'
import './App.css';
import Square from './Square';
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state={
      player:"X",
      data:new Array(9).fill(),
      result:null
    };
    
  }
  
  handle = (index) =>
  {
    const {player,result,data}=this.state
    if(!result && !data[index]){
    const tempdata=[...data];
    tempdata[index]=player;
    const currentplayer= player ==='X'? 'O':'X'
    let checkResult = this.findResult(tempdata)
    if(checkResult)
    {
      checkResult="Winner:" +checkResult
    }
    else if(!tempdata.includes(undefined))
    {
      checkResult="Match Drawn"
    }
    this.setState({
      data:tempdata,
      player:currentplayer,
      result:checkResult
    });
  }
  };

  findResult = (data) => {
    const pos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < pos.length; i++) {
      const [a, b, c] = pos[i];
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
  }
  render(){
    const{data,result,player}=this.state
    return(
      <div className="container">
        <span className="content">{result? result: "Player:" +player}</span>
        <div className="row">
        <Square value={data[0]} onClick={this.handle} index={0}/>
        <Square value={data[1]} onClick={this.handle} index={1}/>
        <Square value={data[2]} onClick={this.handle} index={2}/>
      </div>
      <div className="row">
        <Square value={data[3]} onClick={this.handle} index={3}/>
        <Square value={data[4]} onClick={this.handle} index={4}/>
        <Square value={data[5]} onClick={this.handle} index={5}/>
      </div>
      <div className="row">
        <Square value={data[6]} onClick={this.handle} index={6}/>
        <Square value={data[7]} onClick={this.handle} index={7}/>
        <Square value={data[8]} onClick={this.handle} index={8}/>
      </div>
      
      
      </div>
      
    );
  }

};
export default Game;