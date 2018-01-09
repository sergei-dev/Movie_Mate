import React from 'react';
import './styles.css';

const SearchForm = ({ getMovies }) => {
    let inpSearch = null;
    let formSearch = null;
    return (
        <div>
            <form className="SearchForm" onSubmit={(event) => {
                event.preventDefault();
                if(inpSearch.value !== '') {
                    getMovies(inpSearch.value);
                    formSearch.reset();
                }
                else {
                    alert('ты идиот');
                }
            }}
            ref={node => (formSearch = node)}>
                <input type="text"
                 className="SearchForm__input" 
                 placeholder="Search for movies by name..."
                 ref={node => (inpSearch = node)}/>
                <button type="submit" className="SearchForm__btn">submit</button>
            </form>
        </div>
    )
}
 

export default SearchForm;
