import React,{useState} from 'react';
import './TicTacToe.css';
const TicTacToe = () => {
    const [turn,setTurn] = useState('x');
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner,setWinner] = useState();

    const checkForWiner =(squares)=>{
        let combos ={
            across:[
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagonal:[
                [0,4,8],
                [2,4,6],
            ],
        };

        for (let combo in combos){
            combos[combo].forEach((pattern)=>{
                if(
                    squares[pattern[0]]==''||
                    squares[pattern[1]]==''||
                    squares[pattern[2]]==''
                ){
                        //hacer nada
                }else if(
                    squares[pattern[0]]===squares[pattern[1]]&&
                    squares[pattern[1]]===squares[pattern[2]]
                ){
                    setWinner(squares[pattern[0]]);
                };

            });
        };
    };

    const handleClick = (num) => {
        if (cells[num] !== ''){
            alert('Already Clicked');
            return;
        };
        if(winner==='x'||winner==='o'){
            alert('Already Winner')
            return;
        };

        let squares = [...cells]

        if (turn === 'x'){
            squares[num]='x';
            setTurn('o');
        }else{
            squares[num]='o';
            setTurn('x');
        };
        checkForWiner(squares);
        setCells(squares);
    };

    const handleRestart=() =>{
        setWinner(null);
        setCells(Array(9).fill(''));

    };

    const Cell =({num})=>{
    return <td onClick={()=> handleClick(num)}>{cells[num]}</td>;
    };

    return(

        <div className="container">
        <h1 className="turn">Turn: " {turn} "</h1>
            <table>
                <tbody>
                    <tr>
                        <Cell num={0} />
                        <Cell num={1} />
                        <Cell num={2} />
                    </tr>
                    <tr>
                        <Cell num={3} />
                        <Cell num={4} />
                        <Cell num={5} />
                    </tr>
                    <tr>
                        <Cell num={6} />
                        <Cell num={7} />
                        <Cell num={8} />
                    </tr>
                </tbody>
            </table>
            {winner &&(
                <>
                <p className="turn" >" {winner} " is the winner of the game!</p>
                </>
            )}
            <button className=" button" onClick={()=> handleRestart()}>Restart!</button>        
        </div>
    )
}

export default TicTacToe;