import  * as Types from "./actionTypes";


const initialState = {
    quizData: [],
    quizDataCopy: [],
    quizLoading: false,
    quizError: false,
    totalCorrect: 0,
    totalWrong: 0,
    userData: []
}


export const reducer = (oldstate=initialState,action) => {

    const {type, payload} = action

    switch(type){
        case Types.GET_QUIZ_LOADING:
            return {...oldstate, quizLoading: true}
        case Types.GET_QUIZ_ERROR:
            return {...oldstate, quizError: true}
        case Types.GET_QUIZ_SUCCESS:
            return {...oldstate, quizError: false, 
                quizLoading:false, 
                quizData: payload,
                quizDataCopy: payload,
                totalCorrect: totalCountFunc(payload),
                totalWrong: totalWrongFunc(payload),
                userData: payload,
            }

            
        default:
            return oldstate;
    }

}




const totalCountFunc=(arr)=>{
    let temp = arr.reduce((acc, el) => (acc += Number(el.right)), 0);
    return temp / arr.length;
}

const totalWrongFunc=(arr)=>{
    let temp = arr.reduce((acc, el) => (acc += Number(el.right)), 0);
    return temp / arr.length;
}
