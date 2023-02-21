import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from "axios"
import { Results } from './Results';




const Window = styled.div`
    text-align: center;
    font-size: clamp(20px, 2.5vw, 24px);
    margin-top: 10vh;
`;
const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 2em auto;
    @media screen and (min-width: 1180px) {
        width: 50%;
    }
`;

const QuestionText = styled.div`
    width: 70%;
    margin: 0 auto;
`;



const Option = styled.button`
    display: block;
    border: 1px solid #616A94;
    border-radius: 15px;
    padding: 15px 30px;
    text-decoration: none;
    color: #616A94;
    background-color: #161A31;
    transition: 0.3s;
    font-size: 1em;
    outline: none;
    user-select: none;
    margin-top: 1em;
    cursor: pointer;
    
    @media screen and (min-width: 1180px) {
        &:hover {
            color: white;
            background-color: #616A94;
        }
    }
`;


const Quiz = () => {


    const [quiz, setQuiz] = useState([]);
    // const [number, setNumber] = useState(0);
    // const [pts, setPts] = useState(0);

    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [numQuestions, setNumQuestions] = useState(0);

    // const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);


    const data = JSON.parse(localStorage.getItem('myData'));
        if (data) {
            setNumQuestions(Number(data.numQuestions));
            setCategory(data.category);
            setDifficulty(data.difficulty)

        }


    const handleClickAnswer = (e) => {

        // let userAnswer = e.target.outerText;

        // if (quiz[number].answer === userAnswer){
        //     setPts(pts + 1);
        // } 
        // setNumber(number + 1);

    }


const handleFetchReq=(category, difficulty, numQuestions)=>{
    axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}8&difficulty=${difficulty}&type=multiple`)
    .then(res => {
        setQuiz(res.data.results)
        console.log(res.data)
    })
    .catch(err => console.error(err))
}
    // https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple    --General Knowledge  // 9
    // https://opentdb.com/api.php?amount=10&category=21    -- sports```                                    // 21
    //  https://opentdb.com/api.php?amount=10&category=22&difficulty=hard&type=multiple   -- Geography      // 22
    // useEffect(() => {
        

        // axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}8&difficulty=${difficulty}&type=multiple`)
        //     .then(res => {
        //         setQuiz(res.data.results.map(item => (

        //             {
        //                 question: item.question,
        //                 options: shuffle([...item.incorrect_answers, item.correct_answer]),
        //                 answer: item.correct_answer
        //             }

        //         )));
        //     })
        //     .catch(err => console.error(err))
        // }, []);




    useEffect(()=>{
        handleFetchReq()  // category, difficulty, numQuestions
    }, []) //category, difficulty, handleFetchReq,numQuestions

    // useEffect(()=>{
        
    // }, [category, difficulty, numQuestions])

    // console.log( quiz, number, pts, category, difficulty, numQuestions)

  return (
    <Window>
        {/* {quiz[number] &&
            <>
                <QuestionText dangerouslySetInnerHTML={{ __html: quiz[number].question }}/>
                <Options>
                {quiz[number].options.map((item, index) => (
                    <Option key={index} dangerouslySetInnerHTML={{ __html: item }} onClick={handleClickAnswer}></Option> 
                ))}   
                </Options>
            </>
        }
        {
                number === 5 && <Results pts={pts} />
        } */}

    </Window>
  )
}

export default Quiz