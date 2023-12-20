import { findDOMNode } from 'react-dom';
import './page.css';

export default function Day4() {
    function solve_part1(){
        let retVal = 0;

        let lineNum = 0;
        for(const line of data){
            let winningNumMap = new Map();

            // Input looks like:
            //       : Winning Nums   |     My Nums
            // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
            let colonIndex = line.indexOf(":");
            let pipeIndex = line.indexOf("|");

            let winningString = line.substring(colonIndex,pipeIndex);
            //console.log('Winning: '+winningString);
            let myString = line.substring(pipeIndex+1);
            //console.log('Winning: '+myString);

            let winningArray = winningString.split(" ");
            for(const item of winningArray){
                if(!isNaN(parseInt(item))){
                    winningNumMap.set(parseInt(item),'');
                    //console.log("Win: "+item);
                }
            }
            let myArray = myString.split(" ");
            let handScore = 0;
            for(const item of myArray){
                if(!isNaN(parseInt(item))){
                    //console.log("Mine: "+item);
                    if(winningNumMap.has(parseInt(item))){
                        handScore++;
                    }
                }
            }
            console.log("Line "+lineNum+": num winners = "+handScore);
            if (handScore == 1){
                retVal = retVal + 1;
            } else if (handScore > 1){
                retVal = retVal + 2**(handScore - 1);
            }
            lineNum++;
        }

        let answer1Elt = document.getElementById('answer-1');
        findDOMNode(answer1Elt).innerHTML = retVal;
    }

    function solve_part2(){
        let retVal = 0;
        let lineNum = 0;
        const cardNumArray = new Array(data.length);
        for (let i = 0; i < cardNumArray.length; i++){
            cardNumArray[i] = 1;
        }
        console.log("Start: "+cardNumArray);

        for(const line of data){
            for(let numCards = 0; numCards < cardNumArray[lineNum]; numCards++){
                let winningNumMap = new Map();

                // Input looks like:
                //       : Winning Nums   |     My Nums
                // Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
                let colonIndex = line.indexOf(":");
                let pipeIndex = line.indexOf("|");

                let winningString = line.substring(colonIndex,pipeIndex);
                //console.log('Winning: '+winningString);
                let myString = line.substring(pipeIndex+1);
                //console.log('Winning: '+myString);

                let winningArray = winningString.split(" ");
                for(const item of winningArray){
                    if(!isNaN(parseInt(item))){
                        winningNumMap.set(parseInt(item),'');
                        //console.log("Win: "+item);
                    }
                }
                let myArray = myString.split(" ");
                let handScore = 0;
                for(const item of myArray){
                    if(!isNaN(parseInt(item))){
                        //console.log("Mine: "+item);
                        if(winningNumMap.has(parseInt(item))){
                            handScore++;
                        }
                    }
                }
                //console.log("Line "+lineNum+": num winners = "+handScore);
                for(let j = 0; j < handScore; j++){
                    cardNumArray[lineNum+j+1] += 1;
                }
            }
            lineNum++;
        }

        console.log("End: "+cardNumArray);

        //Sum all the card counts
        for (let i = 0; i < cardNumArray.length; i++){
           retVal += cardNumArray[i];
        }

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
            <div className="title">Day 4</div>
            <div className="grid-div-input">
                {input}
            </div>
            <div>
                <button onClick={solve_part1}>
                    Solve Part 1!
                </button>
                <div>
                    Game Sum: <span id="answer-1">0</span>
                </div>
                <button onClick={solve_part2}>
                    Solve Part 2!
                </button>
                <div>
                    Power Sum: <span id="answer-2">0</span>
                </div>
            </div>
        </div>
    )
}

const data = [
    "Card   1:  4 16 87 61 11 37 43 25 49 17 | 54 36 14 55 83 58 43 15 87 17 97 11 62 75 37  4 49 80 42 61 20 79 25 24 16",
    "Card   2: 15 53 49 30 36 68 76 12  2 73 |  3 18 33 27 34 75  5 29 57 89 96 51 85 41  4 46 30 79 78 43 23 36 73 53 98",
    "Card   3: 47 63 83 92 61 40 42 46 48 45 | 48 43  8 49 77 80 56 50  7 31 13 70 74 37 92  1 20 25 76 90 81  9 52 24 16",
    "Card   4: 67 55 70 16 95 64 27 10 48 62 |  6 36 54 22 85 27 73 29 74 96 11 62 48 38 90 94 70 12 67 17 64 95 18 37 55",
    "Card   5: 27 94 48 79 51 46 63 69 50 84 | 15 53 62 45 21 66 84 51 29 40 25 43 27 88 79 63  3 54 48 23 90 69 94 74 36",
    "Card   6: 46  7 45  1 65 32 37 66 51 95 | 87 61 56 84 44 25 80 37 31 23 91 92 99 47 15 96 33 14 42 89  5  3 46 59 85",
    "Card   7:  4  1 78 46 99 72  3 79 43 54 | 22 20 16 46 27 93 81 99 56 59 10 35 91  2 77 87 19 92 54 28 17 90  4 38 79",
    "Card   8: 63 26  3 54 44 86 19 28 79 20 | 86 33 59 15 92 73 39 28 36 13 14 97 45 43 80 50  7 12 96 38  2 79 72 10 35",
    "Card   9: 11 96 56  3 25 87  9 20 19 67 | 84 25  9 83 67 13 95 45 72 87 58 14 43  5 52 49 93 19 42 48 18 59  3 66 20",
    "Card  10: 74 16 70 84  4 24 46 15 86 11 | 45 72 15 88 25 27 52 65 28 96 19 50 39 40 80  6 30 89 60  8 69 79 17 41 47",
    "Card  11: 45 38 25 87  9 41  3 35 64 77 | 15 46 14 73  7 81 61 19 51 98 70 18  9 65 57 36 37 49 34 47 89 84 16 27 53",
    "Card  12: 40 96 29 71 34 53 67 64 78 32 | 56 55 13 62  6 89 77 25  9 80 39 12 35  3 48 36 34 18 27 79 26 41 20 23 17",
    "Card  13: 93  5 47 17 31 80 10 99 91  4 | 59 13 55 19 99 90 39 12 82 87  5 57 84  8  3 36 11 58 35 25 95 14 16  6 30",
    "Card  14:  4 32  1 34 27 57 33 52 90 84 | 72  9 82 23 37 78 93 95 24 50 56 69 85 81 99 62 80 63 47 68 51 17 15 14 92",
    "Card  15: 96 89 22 38 81  6 12 44 70 30 | 64 13 60 59 47 37 43  1 21 18 66 15 98 73 49 69 33 93 68 31 36  3 51 77 28",
    "Card  16: 96 48 58  8 40 16 61  4 99 90 | 70 60 35 29 36 37 66 27 23 59 12 85  5 52 19 38 74 50 71 31 39 98 78 77 26",
    "Card  17: 26 68  8 27 54 67 33 70 43 36 | 94 79 34 54 68 44 40 27 12  6 84 62 29 53 38 33 61 71 97 45 65 42  4 30 55",
    "Card  18: 51 71 13 82 33 53 47  6 52 91 | 31 38 13 76  3 39 79 49 86 68 52  6  9 33 20 23 71 51 47 96 72 88 91 82 65",
    "Card  19: 30 40 87 47 80 51 67 56 36 91 |  3 97 96 47 64 50 16 51 25 52 94 36 81 78 83 40 84 54 55 15 91  2 74 37 80",
    "Card  20: 86 62 88  4 52 36 46 97 50  8 | 52  2 50 80 13 16 86 31 24 34 36 46 96 62  4 48 85 97 98 33 88  8 90 89 53",
    "Card  21:  5 51 41 45 92 12 30 53 55 46 |  5 31 88 83 97 16 41 23 32 56 63 34 73 50 51 91 40 43 14 79 58 86 30 20 45",
    "Card  22: 13 79 51 15 67 12 86 75 37 60 | 41 62 45 40  1 48 65 15 90 64 93 80 37 14 84 86 78 22 67 71 19 91 75 53 82",
    "Card  23: 83 38 65 66 61 68 73 45 94 37 | 61 68 80 46 58 63 57  9 29 76  7 14 43 72 88 40 92 31 48 87 21 77 20 70 19",
    "Card  24: 68 46 99 43 94  9 59 90  7 57 | 81 36  8  9 57 52 80 88 91 67 14 30 61 46 64 32  3 17 19 47 53 37 60 34 85",
    "Card  25: 33 62 17 70 92 78 82 65 71 29 | 32 86 68 45 40  8  6 48 90 55 81 87 70 62 99 52  2  1 15 44 18  4 47 92 66",
    "Card  26: 30 72 85 50 56 39 73 64 74 87 | 18 79 67 19 56 74 30 50 95 77 72 94 55 42 51 38 91 66  9 17 75 97 70 85 48",
    "Card  27: 62 44 63 58 23 75 35  2 39 98 | 71 41 79 82 51 55 38 66 91 24  3 85 16 87 17  8 22 28 19 48 11 84 90 63 65",
    "Card  28: 21 79 50 96 63 37 12 81  7 34 | 86 46 22 94 25 35  1 97 36  2 50 79 98  5 72 49 13 78 75 84 61 54 17 44 87",
    "Card  29: 42 33 88 19 31 10  7 40 54 75 | 82 41 93 27 37 80  6 36 76  3 24 67 16 50 98 66 35 34 49 15  1 57 25 59 92",
    "Card  30: 30 33 68 49 25 20 81 23 39 12 | 12 16 64 76 91 58 19  9 85 30 63  7 28 71 93 38 94 70 55 13 21 56 49 11 31",
    "Card  31:  8 71 47 52 54 84 69 12 32 31 | 97 70 29 77 95  7 51 57  4 17 34 83 79 20 80  6 75 85 26 87 84 74 92 58 76",
    "Card  32:  3 51 74 19 76 72 95 59 46  2 | 16 87 86 83  6 60 67 29 88 75 82 62 36 35 24 92 25 44 70 93 80 23 48  7 30",
    "Card  33: 70 73 24 26 89 13 95 76 69 31 | 55 68  7 15 16 66 78 54 80 41  6 25 23 42 20 81 19 65 39 82 56 97  2 59 48",
    "Card  34: 88 59 60  8 58 36 90 64 72 95 | 71 64 43 14 26 60 90 88 80 44 17 37  9 72 78 95 45  7 58 82  8 93 41 59 36",
    "Card  35: 72 14  1 41 13 91 42 43 34 54 | 80 73 57 41 38 46 85 56 49  5 28 22 18  2  3 74 58 37 61 26 16 11 70 88 48",
    "Card  36: 78  9 94 82 98 88 49 63 83 97 | 33 11 69  5 92 60  2 19  1 40 36 20 77 84 49 45 58 12 59 97 16 65 57 32 50",
    "Card  37: 63 59 64 90 75 24 91 25  1 72 | 19 80  3 74 55 52 73 67 30 90 75 54 60 91 31  9 79 86 20 24 95 23 63 82  1",
    "Card  38: 16  9 96 30 88 44 98 84 25 40 | 99 84 36 91 40  9 39 41 76 24 65  1 27 10 47 73 52  3 30 53 96 44 62 92 12",
    "Card  39: 91 51 71 58 67 29 45  8 94 39 | 44 71 69 22 58 95  8 83 52 23 82 93 39  7 45  2 78 53 75 24 91 10 68 66 67",
    "Card  40: 82 34 28 29 77 94 24 87 18 96 | 43 81 28 22 24 11 77 32 68 97 42 80 72 34 55 96 57 73 63 29 76 87 18 54 79",
    "Card  41: 44 55 42 71 36 54 61 15 45 60 | 45 12 33 42 94 28 97 71 80 83 47 52 57 34 13 86 60 54 43 22 15  8 82 61 55",
    "Card  42: 35 58 38 99 31 57 51 30 26  2 | 26 32 35 59 79 36  2 39 99 78 31 57 68 90 15 30 38 96 80 51 58 56 37 75 42",
    "Card  43: 77 10  9 64 44 90 81 98 21 59 | 13 97 80 15 81 65 50 88 23 71 46 77 90 74 87 14 76 98 16 59 72 22 40 11 58",
    "Card  44: 49 26 55 10 47 50 86 78 61 59 |  3 52 50 91 99 45  5 36  4 62 87 98 95 76 59 37 44 33 97 88 78 92 55  9 72",
    "Card  45: 83 29 80 15  1 49 48 88 20 85 | 67 28 18 81 33 43 86 97 58 12 48 65  3 88 98 73 13 26 29 38 32 47 31 52 23",
    "Card  46: 92 47 60 65 43 36 88 32 83 40 | 30 23 52 72 22 57 56 77 75 11 76 63 33 45 92 70  7 91 38 14 46 25 53 47 20",
    "Card  47:  4 34  2 20 13 60 83 22 32 29 | 53 22 74 55 44 24  7  1  3 18  9 35 23 75 79 39 49 42 29 65 83 32 33 15 60",
    "Card  48: 66 14 21 58 99  9 84 51 75 65 | 16  6 98 94  9 80 83 87 67 25 81  8 55 52 79 32 31 73 12 14 99  2  1 61 58",
    "Card  49: 77 15  4 39 53 69 50 67 12 88 | 80 86 39 59 88 91 40  8  6 28 71 32 52 53 78 67 68 55 18 48 36  2 10 15 46",
    "Card  50: 14 33 20 45 94 57 44 12  4 90 | 13 61 63 38 57 23 10 69 55  8 15 92 99  5 78 75 71 32 48 14 58 27 36 84 80",
    "Card  51: 86 37 44 80  7 64 84 83 35 45 | 57 36 92 97 40 70 39 42 95 54 91 41 84 24 83 98 94 49 45 74 68 31 11 61 47",
    "Card  52:  2 95 75 93 52 46 16  6 73 55 | 53 34  8 13 59 93 22 54 68 24 92 71 81 99 72 25 98 66 10 77  5 43 83 57 48",
    "Card  53: 60 77 43 57 11 65 27 58 42 14 | 31 20 34 28 15 99 95 10 68 72 54 83 40 59 49 71 37 47 78 63 53 62 81 76 89",
    "Card  54: 58 70 34 96 18 32 28 10 56 36 | 81 83 22 51 75 39 65  7  2 63 90 54 33 66 23 91 26 15 27 13  8 85 48 59 99",
    "Card  55: 32 57  4  1 99 46 20 31 39 83 | 33 39 99 93  4 34  7  1 28 21  2 73 84 27 86 63 46 57 20 66 83 31 12 72 32",
    "Card  56: 40 32 42 89 27 59 11 35 19 64 | 72 34  5 33 42 11 82 35 64 59 60 19 91 57 65  1 40 43 89 32 28 14 81 27 41",
    "Card  57: 72 82 17 11 97 99 78  4 76 32 | 50 22 14 91 70 56  2 11 28  6 96 77 49 99 20 97 68 71 52 30 78 89 65 44  7",
    "Card  58: 34 48 17 95 85 64 21  4 69 20 | 24 33 98 35 10 65 48 83 47 58 41 69 17 97 64 42 12 20 95  4  9 34  3 21 85",
    "Card  59: 77 23 73 74 65  5 21 46 25  7 | 89 12 70 17 73 65 41 37  5 78 62 60 15  3 72 94 14 77 38 69 83 98 24 43 56",
    "Card  60: 12 13 25  5 33 49  9 72 24  2 | 41 93 73  2 91 44 20 81 24 52 89 50 17 92 86 11  7 60 94 12 72 63 69 38 71",
    "Card  61: 19 91 49 95  9 34 79 69 44 53 |  5 37 78 67 29 21 40 15 52 42 54  4 99 80  9 36 22 35 32 68 19 14 23 92 95",
    "Card  62:  4 90 51 59 40 87 28 48 73 32 | 11 85 97  8 28 79 36 72 48 40 59 54 95 73 19 78 88 31 90  5 51  4  6 91 92",
    "Card  63:  9 71  2  3 83  4 89 24 36 58 |  6 44 77 50 89 97  9 72 37 66 78 58 57 24 27 61 63 36 14 76 99  3 25 65 12",
    "Card  64: 24 44 18 88 34 51 20 32 74 47 | 12 20 48 92 32 24  7 11 51 96 78 45 94 44 39 29 37 97 25 59 88 31 18 89 34",
    "Card  65: 15 94  2 23 67 77 64 63 25 27 | 82 26 73 49 74 86 32 37  5 38 97 81 19 67  7 45 70 44 22 36  6 15 27 72 75",
    "Card  66: 87  1 49 91 70  8 25 90 50 39 | 78 83 58 60 87 95 51 21 28 36 96 32 33 92 13 47 74 65 57 82 99 39  8 86 25",
    "Card  67: 17  4 29 90 38 28 63 31 20 14 | 47 76 39 40 68 95 41 78  6 23 50  2 30 17 58 90 35 32 85 93 31 20 59 34 52",
    "Card  68: 56 70 83 13 54 79 65  4 53 68 | 88 23 52 45 75 26 10 74 92 40 12 81 35 82 49  5 42 11 94 78  9 97 22 48 30",
    "Card  69:  1  5 41  3 42 91 16 71 67 95 | 39 52 33 77 89 29  2 99 62 51 79 50 15 63 66 88  8 68 18 14 25 21 75 70 32",
    "Card  70: 70  2 33 17 56  6 65 26 59  4 | 80 60 58 61 26 62 38 79 18 71 29 65 88 40 35 50 11 22 12 83 30 44 91 21 20",
    "Card  71: 13  9 44 91 25 28 87 46  5 29 | 76 37 86 55  3 99 98 48 88 97 89 36 83 64 56  8 22 45 43 94 60 47 78 27 95",
    "Card  72: 41 59 54 74 23 15 25 51 96 31 | 49 55 26 80 86 83 46  6 36  4 14 85 92 47 44 61 57 40  1 60 29 65 19 87 32",
    "Card  73: 45 76 75 41 20 38  5 79 26 58 |  7 86 27 55 25 41 78 33 59 97 43 70 66 64 44 60 74 88 29 77 76 15 62 21 30",
    "Card  74: 85 50 86 59 33 25 10 82 19  3 | 33 82 38 88 13 85  3 84 75 27 79 74 25 91 50 59  8 19 53 58 32  2 63 86 10",
    "Card  75: 45 41 31 38 25 77 64 33 37 70 | 38 19 40 31 53 25 30  8 33 91  6 70 42 28 54 88 77 80 69 72 37 49 41 39 45",
    "Card  76:  8 67 35 28 65 54 74 17 40  4 | 67 79 57 73 70 32 69 18 65 54 97  4 43 17 58 48 61  3 41 13 76  8 35 22  9",
    "Card  77: 69 54 59 52 95 91  6 89 85 16 | 13 93 66 84 18 91 15 78 64  3  6 89  4 16 94 23 85 69 33 59 87 54 52 24 98",
    "Card  78: 47 91 89 93 94 67 76 90 26 14 |  2  3 59 19 67 41 89 12 90 26 83 94  1 93 97 76 17 32 91 10 14 48 36 47 53",
    "Card  79: 23 92  5 91 59 75 65 84 22 57 | 16 95 71 86 75  9 10 87 81 28 20 11 43 13 19  2 63 84  5 85 61 33 23 73 99",
    "Card  80: 78  5 13 75  9 27 21 24 45 30 | 94 28 46  2  9 66 99 36 49  6 61 26 25 15 17 74 85 97 82 11 54 34 31 10 29",
    "Card  81: 89 33 76 53 28 58  9 75 15 92 | 20 10 40 68 16 84 15 22  9 75 69 42 34 80 92 58 45 30 67 28 52 27 71 65 33",
    "Card  82: 90 80 73 27 72  6 41 56  3 47 | 85 26 49 70 16  4 36 60 54 12 17 32 78 94 63 44 33 39 96  1 95 55 48  7  2",
    "Card  83: 34 29  8  1 64 95 10 44 66 46 | 94  3 58 22 26 47 29 11 97 65  1 12 64 61 66  8 16  9 99 95 24 19 91 43 52",
    "Card  84: 51 57 90 39 83 37 54 15 94 40 | 89 39 19 78 74 47 38  1 41 71 85 31 56 46 92 30 66 96 55 83 94 51 49 95 67",
    "Card  85: 81 68  7 66  4  5 34 74 45 87 |  5 55 87 90 42 16 45 23 86 60 69 65 72 54 14  7 17 21  8 25 56 79 32 10 44",
    "Card  86: 41 98 47 99 76 73 38 31  8  4 | 30 36 54 79 43 34  9 27 66 97 56 85 17 21 65 11 29 51 10 77 70 48 73 55 67",
    "Card  87: 93 11 14 33 29 89 48 13 76 60 | 37 68 19 15 12 22 53 48 16 85 26 45 95 51 89 73 25  9  8 52 70 31 84 54 65",
    "Card  88: 75 43 74 65 80 76 79 85 29 71 |  3 77 90 22 11 16 62  7 67 26 30 14 98 12 44 87 53 45  2 13 46 76 48 60 39",
    "Card  89: 66 21 28 73 67 61 92 76 26 35 |  9 57 60 10 91 31 19  8 47 36  6 87 50 17 59 15 33 37 22 74 51 81 85 68 34",
    "Card  90: 31  6 89 59 34 33 38  7 11 72 | 10 35 92 37 70 53 61 56  4 82 90 21 45 54 15 17  5 25 51 74  9 86 48 40 97",
    "Card  91: 86 51 95 84 93 32 54 20 59 92 | 87 55 74  2 33 22 14 19 77 51 12 39 43 71 47 59 38  1 92 93 20 95 16 32 36",
    "Card  92: 41 45 50 46 43 29 19 74 58 81 | 58 19 43 93 15 23 74 40 46 79  9 42 61 10  4 41 81 12 45 50 89 98 67 96 29",
    "Card  93: 65 60 55 39  2 76 91 71  9 96 | 54 67 26 42 90 68 40 25 88 97 51 15 41  1 83 64 20 56 53 44 16  8 63  6 17",
    "Card  94: 91 84 97 98 45 59 89 43 81 61 | 22 58 60 69 53 68 95 51 56 87 17  3 34 70  8 19 33 16 67 29 18 31 55 40 28",
    "Card  95: 82 45 14 97 52 48 65 96 17 93 | 64 52 92  8 17 82 27 45 83 93  9 49 74 84 91 20 13 48 96 97 56 24 14 77 57",
    "Card  96: 49 74 18 64 58  8 61  9 22 53 | 11 68 83 90 95  8 60 71 28 91 20 13 52 62 43 87 23 46 86 88 80 59 33 19 53",
    "Card  97: 78 22 21 96  8 84 29 51 99 53 | 89 94 18 58 21 52 92 38 35 41  5 34  7 36 77 68 20 49 80 55 87 17  8 15 86",
    "Card  98: 63 92  3 16 80 94 36 54 98 75 | 66 51 87 27 79 84 22 20 41 99 46 40 45 39 59 63 97 15 92 36 57  7 69 54 48",
    "Card  99: 30 95 26 13 66 67 20 52  6 19 | 66  8 92  3 88 78 37 27 39 12 28 82 30 20 52 94 26 67  2 93 91 61 48 40 11",
    "Card 100: 48 52 64 41 32 73 49 35 27 43 | 99  3 83 10 25 13 42 47 36 67 84 71 97 55  4 53 57 95 31 29 93 19  5 62 50",
    "Card 101: 21 35  7 98 38 72 23 87 68  2 | 19 65 60 13  2 35 72 82 74 68 86 39 27  1 93 10 66 46 88 21 84 16 25 14 48",
    "Card 102: 14 65 49 53 15 30 74 18 24 60 | 66 73 99 20 88 13 65 18 46 71 64  4 27 92 86 84 72 94 79 67 75 43 52  1 90",
    "Card 103:  6  5 73 80 99 12  9 59 13 89 | 56 33 74 27  1 35 78 80 66 43 81 70 51 34 39 23 62 19 65 13 71 38 37 72 12",
    "Card 104: 65 33 18 59 73 41 63 82 75 56 | 62 92 33 14 34 23 28 86 94 63 21 96 74 99 85 30 16 66 22 43 25 93 79 44 32",
    "Card 105: 63 43 48 30  8 82 19 54 26  4 | 56  6 46 68 51 25 13 28 17 88 49 31 77 75 61  3 87 72 89 43 90 32  7 52 57",
    "Card 106: 47 19 75 22 94 77  8 38 96 21 | 41 35 27 58 32 29  1 39 11 76 91 92 57 52 46 97 83 53 45 20 72 95 74 56 48",
    "Card 107: 30 73  2 37 19 56 65 47 90 72 | 40 39 27 75  3 23 82 30 17 84 57 62 53 97 12 22 36 99 98 15 46 55 52 25 78",
    "Card 108: 28 10 38 12 59 81 76 61  1 15 | 38 14  1 93 81 98 44 87 50  5 90 28 40 76  6 41 34 21 32 19 66 49 46 15 12",
    "Card 109: 20 60 64 19 96 99 92 97 56 50 | 47 56 44 83 91 78  7 79 58 69 22  4  5 13 88 43 23 98 59 65 85 54 61 31 68",
    "Card 110: 48  5 91 83 38 22 37 46 12 29 | 85 88 37 98 47 48 26 29 83 72 28  5 11 90 45 12 22 38 33 46 97 21 89 82 91",
    "Card 111: 32 18 26 70 63 28 15 59 51 21 | 70 89 40 77 31 30 24 12 63 16 97 43 66 87 44  5 96 65 34 72 11 83 59 39 15",
    "Card 112: 23 96 39  2 63 28 57 13 45 83 | 99 82 66 18 28 46 96 70 68 15 39 20 88 21 56 23  2 17 72 44  6 57 30 83 63",
    "Card 113:  7 12 18 90 25  4 13 19 10 47 | 47 32 25 62 21  7 24 54  3 86  4 15 10 90 29 13 67 18 89 83 12 19 84 33 96",
    "Card 114:  3 79 92 67 56 89 69 51 88 65 | 48 35 99 69 81 18 59  5 12 50 52 63 68 88  7 25 33 51 23  3 89 94 44 49 82",
    "Card 115:  8 47 42 94 93 89 63 12 45 25 | 13 47 92 74 94  8 25 30 53 12 29 54 28 60 11 48 20 49 91 36 69 17 44 57 23",
    "Card 116: 91 24  4 78 51 46 36 54 33  9 | 91 57  6 53 13  9 60  3 51 24  2 72 40 46 29  4 39 77 33 78 36 44 70 68 54",
    "Card 117: 56 17 24 77 22 39 75 99 61 84 | 61 56 98 78 99 17 63 93  7 35 77 23 67 39 76 60 15 20  5 22 24 70  6 36 75",
    "Card 118: 29 65 49 43 98 94 14 16 95 54 | 29 12 98 17 23 15  3 69 81 34 16 27 91  1 26  2  6 82  7 32 11 72 25 58  9",
    "Card 119: 88 15  5 72 98 69 48 42 71 94 | 24 22 47 46 73  3 40 16 51 74 18  6 72 82 41 85 52 86  4 62 58 71 30 80 67",
    "Card 120: 80  5 74 70 13 51  2 83 90 69 |  4 62 47 51 66 74 88 49 98 76 83 80 94 75 28  5 14 99 31  2 40  6 70 81 11",
    "Card 121: 45 32 99 18 69 28 68 16 30 88 | 28 33 37 46 11 40 86 94 22 44 48 60 23  8 25 78 54 18 67  1 61 87 42 21 63",
    "Card 122: 32 42 18 48  4 97  8 13 41 14 | 54 35 71 90 75 31  8 27 95 61 56 43  7  5 46 51 70 74 79  3 59 93 66 57 63",
    "Card 123: 67 87 25 96  5 53 65 33  7 93 | 24 27 90 62 19 20 15 65 43 14 78 28 91 54 57 80 84 79 76 42 47 60 25 34 86",
    "Card 124: 65 40  9  7 77 17 91 23 93 37 | 24 29 77 56 18 88  7 86 87  8 35 31 23 58 32 51 38 66 19 12 25 13 53 85 96",
    "Card 125:  1 42 28 43 32 85 98 21 55 91 | 93 41 80 26 98 22 46 74 16 79 51 18 11 29 15 72 94 83 27 39  2 75 60 10 97",
    "Card 126: 80 84 95 87 74 30 48 19 33 34 | 67 21 38 63 61 69 78 28 31 17 66 60 64 86 96 77 32 10 20 26 76 18 35 97 73",
    "Card 127: 71  5 14 49 18 92 33 82 66 48 | 65 98 25 96 17 94 45  7 43 62 60 50 27 58 16 22 24 95 47 76 51 97 84 46 69",
    "Card 128: 87 46 34 65 24  8 25 58 53 17 | 53 35 79 93 46 33  5 75 89 10 16 55 43 52 63 61 92 57 91 13 44 68 12  1 31",
    "Card 129: 89 51 40 43 63 19 44 15 90 83 | 73 31 89 12 44 15  9 79 83 41 43 92 90 46 51 87 63 19  3 78 40 65 58 36 10",
    "Card 130: 23 93 46 97 56  2 84 27 90 81 | 80  7 87 82 27 73 21 69 39 84 41 74 90 31  2 56 83 15 57 79 72 94 60 78 48",
    "Card 131: 97 72 71 26 99 87 33 15 80 42 | 55 83 73 69 42 99 56 59 12 11  8 29 95 74 47 21 41 75  7 27 52 26 98 30 97",
    "Card 132: 42 62 27 46 10  4 25 49 71 68 | 10 49 66 47 44 68 14 42 37 60 36 48 23 20 25 51 62  4 13 21 27 70 18 86 71",
    "Card 133: 60 92 64 94 88  8 13 29  3 73 | 51 73 72 63 81 21 90 91 64 46 53 70 60  7 39 50 41 75 36 55 29  9 65 67 78",
    "Card 134: 58 60 72 44 62 38 12 27 69 90 | 66 82 29 95 37 54 98 31 74  2 99 35 13 11 83  1 63 14 93 21 81 39 47 77  4",
    "Card 135: 85 74 56 48 25 73 14 20 86 16 | 73 63 35 28 50  7 66 39  3  1 91 98 69 68 56 33 93  9 86 52 15 54 71 53 44",
    "Card 136: 72 27  4 80 71  7 15 64 13 41 | 16 52  6 95 83  5 88 21 97 99 90 87 20 43 51 10 33  3 91 26 32 69 39 22 40",
    "Card 137: 12 53 99 38 89  1 80 18 67 90 | 92 96 95 84 36 93 73 79 31 40 44 21 53 83 59 87 13 57 50 98 33 77 22 41 34",
    "Card 138: 29 51 61 45 18 77 65 34 56 35 | 93 73 57 76 27 87 20 61 50 71 22 54 19 82 26 13  8 97 29 12 36 42 56 47 18",
    "Card 139:  9 86 94 52 84 53 65 87 92 73 | 62 89 19 92 43 44 51 42 65 20 24 26 22  2 76 67 95  6 97 87 74 72 75 27 23",
    "Card 140: 84 93  8 15 50 67 90 66 89 59 | 79 50 10 30 31 35  5 97 77 34 37 67 47 83 27 55 62 40  6 24 57 54 53 71  7",
    "Card 141: 91 20 24 58 99 61 53 81 18 30 | 59 40 14 97 60 31 72  9 25 95 12 37 75 88 92 73 16 41 67 98 51 32 23 66 96",
    "Card 142: 34 10 96  5 31 35 51 50  6 42 | 49 60 77 83 47 39 23 81 79  7 99 13 82 59 24 98 35 57 72 69 86 76 18 55 61",
    "Card 143: 78 41 71 76 61 47  1 55 75 99 | 80 44 11 31 50 28 62 12 45 40 70 27  9  4 86 15 56 91 79 85 25 67 63 64 88",
    "Card 144:  8 60 75 55 87 31 66 86 97 61 | 97 35 30 84 53  8 44 22 86 85 61 46 87 10 37 55 34 27 25 31 20 70 50 11 66",
    "Card 145: 82 53 79 77 33 30 72 17 97 81 | 53 11 29 30 81 35 97 77 72 25 46 89 82 79 73 61 45 17 33 41 23 98 76 69 87",
    "Card 146: 28  9  7 73 46 10 79 78 92 72 | 94 86 72 67 13 91 57 12 30 60 85 59 34 35 62 76 43  2 93 46 96 41 84 51 90",
    "Card 147: 32 43 57 10 92  4 97 78 15 81 | 92 96 13 57 15 58 52 89 10 35 47 31 81  4 32 39 70 55  5 97 68 78  2 83 43",
    "Card 148: 12 25 92 23  7 26 39 53  1 31 | 83 23 98 42 53 92 45 25 26 63  7 40 12 47 55 64 66 14 60 75 13 34 85 21 15",
    "Card 149: 99 65  4 47 72 98 43 84 60 41 | 36 58  1 52 65 79 90 71 43 49  6  5 99 28 16 50 18 93 42 56 86 23 59 92 14",
    "Card 150: 63 66 75 98 88 74 73 90 44 78 | 49 77 33 69  7 65 32  9 93 66 42 73 50 11 92 68 64 88 31 34 74 20 19  8 13",
    "Card 151: 32  5 78 85 56 90 29 66 50 68 | 46 90 89  5 14 75 13 66  1 29 32 35 68 47 22 42 78 23 63 44 50 73 83 56 85",
    "Card 152: 73 75 40 67 61 86 93 71 20 15 |  4  9 13 30 14 75 68 76 79 24 34 32 98 93 23 50 20 36 33 72 88 82 89 51 31",
    "Card 153: 45 64 17 72 24 34 87 40 31 84 | 50 83 19 81 64 54 45 17 35 41  2 79 76 24 30 92 65 20 43 38 75 84 29 40 53",
    "Card 154: 42 68 35 21 46 87 71 52 65 74 | 33 22 74 87 96 65 46 94 42 35  6 80 53 71  7 85 90 27 49 52 47 41 16 58 98",
    "Card 155: 65 80 15  4 31 74 60 71 38 97 | 45 22 43 66 15 99 17 26 49 65 93 48 74  4 57 38 91 71 39 37 11 31 80 67 68",
    "Card 156: 60 44 95 98 59 42 56 20  1 50 | 57 88 20 56 26 84 42 95 98 44 50 35 59 30 41 34 14 10 54 92  6 48  1 63 60",
    "Card 157: 86 26  6 43 83 10 63 79 23 80 | 71 10 25 30 49 73 93 29 55 13 61 34 37 20 48  3 95 96 28 82  5 12 18 62 38",
    "Card 158: 25 90 71 67 30 62  3 44 70 64 | 26 18 25  5 90 22 36 71 64 21 79  1 82 93 14 67 19 45 80 44 40 63 20 87 91",
    "Card 159: 52 17 61 50 12 31 10 96  6 82 | 47 50 31  2 53 85 43 80 10 30 13 56 67 19 12  6  7 96 86 61 16 94 52 66 49",
    "Card 160: 40 29 83 42 41 87 26 15 39 31 | 28 42 95 96 87 78 40 48 26 41 85 84 89 83 82 27 98 68 73 53 24  4 29 32 58",
    "Card 161: 22 17  1 83 37 87 41 64 90 70 | 40  6 91 68 22  1 52 94 84  5 72 21  3 37 80 17 51 24 50  9 61 79 99 95 35",
    "Card 162: 77 35  2 19 78 14  3 94 56 39 | 44 66  3 25 58 55 24 38 16 54 89  1 60 43 72 68 79 22 65 69 86 21 76 18 91",
    "Card 163: 89 21 76 57 18 31 82 42 83 36 | 16 64 59 84 29 18 48 99  5  2 97 50 73 42 46 30 92 57  9 87 10 89 65 27 83",
    "Card 164: 63 66 76 23 39  3 83 50 74 47 | 15 75 36  6 55 85 90 10 84 14  7 57 35 95 40 49 31 42 70 65  1 72 62 92 25",
    "Card 165:  3 87 50 13 90 51 68 34 73 99 | 35  6 24  4 27 57 39 31 88 56 95 14 85 36 15  5 59 86 66 11 76 29 19 30 38",
    "Card 166: 38 40 32 54 73 11 63  3 47 98 | 82  1 72 93 17 25 69 85 57 75 27 89 22 88 61 78 59  3 95 71 70 28 53 41 35",
    "Card 167: 65 76 70 32 57 71 66 53  8 16 | 31  2 56 82 21 69 59 94 36 44 93 51 15 91 48 99  1 55 68 14 19  7 27  5 85",
    "Card 168: 58 95 66 45 85 56  8 97 82 50 | 53 49 46 88 59 78 90 96  2 76 43 83  1 17 21 19 41 91 32 51 27 89 65 34  7",
    "Card 169: 56 19  4 48 97 63  2 88 98 66 | 71 19 39 34  2 48 35 88  8  4 63 97 65 28 12 92 37 55 83 66 56 59  3 72  7",
    "Card 170: 24 94 50 99 33 97 75 86 35 65 | 79 13 50 15 97 99 33  8 35  6 76 17 38 21 73 86 75 24 30 10 69 65 11 90 94",
    "Card 171: 32 49  8 61 74 78 30 72 54  2 | 86 25 72 47 59 29 44 35 82 61 77  5 42 43 15 53 33 57 27 83 71 30 63 56 37",
    "Card 172: 71 41 56 85 78  2 61 72 32 20 | 58  8 56 15 34 82 25 54 48 41 10  6 27  2 72 30 52  9 14 40 68  5 78 62 19",
    "Card 173: 51 21 69 26 46 44 94 16 72  2 | 58 74 89 26 31 21 62 36 79 83  2 28 87 51 72 10 73 12  7 37  4 69  8 29 44",
    "Card 174: 72 51 17 66 87 44 86 95 34 75 | 86 51 76 44 82 23 56 26 18 54 22 28 61 38 27 66 75 42 96 41 13 34 33 95 43",
    "Card 175: 98 99 68 95 29 23 22 28  3 10 | 19 99 22 50 48 82 95 39 86 40 69 28 41 29 24 36 46 78 85 54 60 32 96 61 37",
    "Card 176: 16 84 47 66 30 85 37 89 25 53 | 39 57 94 95 78 81  5 85 34 56 26 98 73 80 96 15 86 54 20 59  9 33  8 87 29",
    "Card 177: 62  5 80  3  9 97 32 81 17 23 |  3 97 38  5 23 42 48 60  9 57 50 92 84 75 32 62  7  8 81 80 49 78 52 64 17",
    "Card 178: 89 60 24 84 47 34 32 31  9 98 | 89 22 85 24 78 40 86 34 29 79 46 83 32  1 77 68 93 31 12 60 98  7  5 65  2",
    "Card 179: 87 70 18 66 65 37 84 95  4 21 | 36 39 57 21 54 17 96 95 72 53 16 45 73 81 38 70  6 18 87  9  8 59 12  7 41",
    "Card 180: 96 21 90 20 72 75 47 83 59 42 |  9 52 61 97 51 80 65 28 23 18 84  6 99 15 53 92 45  3 58 91 81 73 32 17 16",
    "Card 181: 69 49 79 61 19 76 34 54 30 52 | 59 70 37 41 67 21 84 50 89 20 17  9 74 72  7 45 11 92 47 42 32 73 10 82 76",
    "Card 182: 80 88 66 69 51  8 65 28 92 18 | 18 91 16 94 92 21 38 10 88 95 86 22 32 80 12 93 71 28 37 40 67  1 39 60 19",
    "Card 183:  3 83 17 55 42  4 99 52  8 28 | 37 19 68 46 63 14 71 34  6 20 62 65 67 66 77 29 80 74 39  7 75 56 82  4 94",
    "Card 184: 72 20 13 43  1  6 70 15 86 16 |  6 34 50 73 43 28 99 64 24 59 15 37 29 81 69  9 13  1 16 71 20 32 83 67 10",
    "Card 185: 70 15  2 44 20 32 99 71 97 84 | 84 82 66 15 97 21 34 90 71 35 96 31 10 58 20 40 19 16 13 48 44 55 88 32 99",
    "Card 186: 57 49 47 23 51 73 24 13 99 97 | 83 79 62 57 91 78 54 90 17 26 42 87  3 56 51 13 23 27 85 58 73 72 99 61  9",
    "Card 187: 98 37 70 99 40 51 26 24  9 38 | 92 83 10 87 77 57 89 37 27 12  6 13 95 14 82  1 43 81 29 21 74 28 51 30 98",
    "Card 188: 95 92 24 42 63 84 14 49 32 12 | 56  5 32 34 68 43 70 58 83 62 31 40 42 72 49 86 19 65 77 64 53 84 51 36 14",
    "Card 189:  6 73 64  8 38 87 46 22 49 90 |  8 17 62 47 59 24  9 95 46 81 41 35 40 72 73 18 39 78 28 98  3 88  4 66 86",
    "Card 190: 26 75 89 96 83 78 16  3 45 97 | 32 73 53 21 65 25 17 58 51 49 84 24 96 40 35 20  7 77 64 97 67 99 61 52 46",
    "Card 191: 15 47 16 32 63 94 33 85 74 26 | 14 43 66  6 92  7 10 22 88  1 29 91 64 84 83 48 42 54 60 35 96 82 49  9 90",
    "Card 192: 29 68 86 19 93 50 55  5 12 41 | 83 36 30 69 40 16 38 54 99 61 21 79 81 41 65  3 26 27 31 35 39  8 25 49 70",
    "Card 193: 53 40  5 39 13 12 27 57 68 45 | 67 10 87 64 22  6 77 17 20 24 78 52 19 18 99 88 66 31 65 47 11 61 90  9 92",
  ];