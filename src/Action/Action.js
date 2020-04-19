




//created a middleware

export const callSearchDetails=name=>{
    console.log("in call")
    return(dispatch) =>{
        setTimeout(()=>{
            dispatch(callSearchDetails(name));
        },3000)
    
    }
}



//  syntax for custome middleware
// const customMiddleware = store => next => action => {
//     ...
//   }