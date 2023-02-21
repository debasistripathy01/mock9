import React from 'react'
import { useState } from 'react';
import css from "./home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { useEffect } from 'react';

const Home = () => {
    // const dispatch = useDispatch();
    // const selector = useSelector();


    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [numQuestions, setNumQuestions] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    localStorage.setItem("userInfo", JSON.stringify())
    
    alert("User registered")

  };


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myData'));
    if (data) {
      setName(data.name);
      setCategory(data.category);
      setDifficulty(data.difficulty);
      setNumQuestions(data.numQuestions)
    }
    
  }, []);

  useEffect(()=>{
    const data = {name, category, difficulty, numQuestions}
    localStorage.setItem('myData', JSON.stringify(data));
  }, [name, category, difficulty, numQuestions])



  return (
    <>
        <Box className={css.Box}> User Registration</Box>
        <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
            Name:
            <input className={css.input} type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>

        <label className={css.label}>
            Category:
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">--Please choose a category--</option>
            <option value="general-knowledge">General Knowledge</option>
            <option value="sports">Sports</option>
            <option value="geography">Geography</option>
            </select>
        </label>

        <label>
            Difficulty:
            <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="">--Please choose a difficulty level--</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            </select>
        </label>

        <label>
            Number of Questions:
            <input type="number" value={numQuestions} onChange={(event) => setNumQuestions(event.target.value)} />
        </label>
        <Link to='/quiz'>
            <button className={css.button} type="submit">Start Quiz</button>
        </Link>
        </form>

    </>
  )
}

export default Home