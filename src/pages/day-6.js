import { findDOMNode } from 'react-dom';
import './page.css';

export default function Day6() {
    function solve_part1(){
        // Time:        46     85     75     82
        // Distance:   208   1412   1257   1410
        let retVal = 0;

        retVal = getCount(46,208)*getCount(85,1412)*getCount(75,1257)*getCount(82,1410);

        let answer1Elt = document.getElementById('answer-1');
        findDOMNode(answer1Elt).innerHTML = retVal;
    }

    function getCount(time, dist){
        let counter = 0;
        let sum = 0;
        for(let i=1; i<time; i++){
            if(((time-i) * i) > dist){
                sum++;
            }
            counter++;
            if(counter % 1000000 == 0){
                console.log(counter/1000000+' million...');  
            }
        }
        return sum;
    }

    function solve_part2(){
        // Time:        46857582
        // Distance:   208141212571410
        let retVal = 0;
        let startTime = new Date();
        console.log('Start: '+startTime);
        retVal = getCount(46857582,208141212571410);

        let timeDiff = new Date() - startTime; //in ms
        timeDiff /= 1000;
        let seconds = Math.round(timeDiff);
        console.log('Execution time (sec): ' + seconds);

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
            <div className="title">Day 6</div>
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