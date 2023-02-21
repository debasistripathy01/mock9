// axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}8&difficulty=${difficulty}&type=multiple`)
//             .then(res => {
//                 setQuiz(res.data.results.map(item => (

//                     {
//                         question: item.question,
//                         options: shuffle([...item.incorrect_answers, item.correct_answer]),
//                         answer: item.correct_answer
//                     }

//                 )));
//             })
//             .catch(err => console.error(err))

//     }, [category, difficulty, numQuestions]);