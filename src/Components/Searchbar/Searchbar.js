import React from 'react';


class Searchbar1 extends React.Component{
    render(){
        const {search,value} = this.props
     return(
        <input
        style={{width:"700px"}}
        placeholder="Search here">
        {/* // <a href='#'><i class='fa fa-search'></i></a> */}
    </input>
       )
    }

}

export default Searchbar1;


// function mapStateToProps({works}) {
//   return {value: works.value};
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({search}, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);