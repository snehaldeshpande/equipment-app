
case search_details:
    return Object.assign( {} , state,{
        search_details: state.search_details.map(search_details, index) => {
          return Object.assign({},search_result,{
              completed: !search_details.completed
          })
        }
        return search_details;
    })
    })