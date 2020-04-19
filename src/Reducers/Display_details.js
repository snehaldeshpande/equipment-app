
case display_details:
    return Object.assign( {} , state,{
        search_reasults: state.search_results.map(search_result, index) => {
          return Object.assign({},search_result,{
              completed: !search_result.completed
          })
        }
        return display_details
    })
    })