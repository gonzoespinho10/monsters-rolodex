// import { Component } from "react";
import './search-box.styles.css';


const SearchBox = (props) => {

    const {onChangeHandler, className, placeholder} = props;

    return (
        <div>
            <input 
         className= {`search-box ${className}`}
         type='search' 
         placeholder={placeholder} 
         onChange = {onChangeHandler}
            />
        </div>
    )


}



// class SearchBox extends Component {

//     render() {

//         const { onChangeHandler, className, placeholder } = this.props;

//         return (
//         <input 
//         className= {`search-box ${className}`}
//         type='search' 
//         placeholder={placeholder} 
//         onChange = {onChangeHandler}
//         />
//         )
//         }

// }

export default SearchBox
