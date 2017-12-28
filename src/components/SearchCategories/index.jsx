import React from 'react';
import './styles.css';

class SearchCategories extends React.Component {
    render() {
        const { onClickCategories } = this.props;
        return (
            <div className="SearchCategories">
                <button value="popular" className="SearchCategories__btn" 
                onClick={(event) => {
                    let target = event.target;
                    onClickCategories(target.value);
                }}
                >popular</button>
                 <button value="top rated" className="SearchCategories__btn" 
                onClick={(event) => {
                    let target = event.target;
                    onClickCategories(target.value);
                }}
                >top rated</button>
                 <button value="upcoming" className="SearchCategories__btn" 
                onClick={(event) => {
                    let target = event.target;
                    onClickCategories(target.value);
                }}
                >upcoming</button>
            </div>
        )
    }
}

export default SearchCategories;
