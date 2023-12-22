import { findDOMNode } from 'react-dom';
import './page.css';

export default function DayX() {
    function solve_part1(){
        let retVal = 0;

        let answer1Elt = document.getElementById('answer-1');
        findDOMNode(answer1Elt).innerHTML = retVal;
    }

    function solve_part2(){
        let retVal = 0;

        let answer2Elt = document.getElementById('answer-2');
        findDOMNode(answer2Elt).innerHTML = retVal;
    }

    const input = [];
    for (let i = 0; i < data.length; i++) {

        let line = data[i];
        const spans = [];
        for(let j = 0; j < line.length; j++)
        {
            //id format: row-col
            spans.push(<span key={j} id={i+"-"+j}>{line[j]}</span>);
        }
        input.push(<div key={i}>{spans} Row Val:(<span id={"row-sum-"+i}></span>)</div>);
    }

    return (
        <div className="grid-container">
            <div className="title">Day X</div>
            <div className="grid-div-input">
                {input}
            </div>
            <div>
                <button onClick={solve_part1}>
                    Solve Part 1!
                </button>
                <div>
                    Answer: <span id="answer-1">0</span>
                </div>
                <button onClick={solve_part2}>
                    Solve Part 2!
                </button>
                <div>
                    Answer: <span id="answer-2">0</span>
                </div>
            </div>
        </div>
    )
}

const data =[];