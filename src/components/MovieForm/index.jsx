import React from 'react'
import './styles.css'

class MovieForm extends React.Component {
    render() {
        return (
            <form className="MovieForm">
                <label className="MovieForm__label">
                Title
                    <input type="text" className="MovieForm__input"/>
                </label>
                <label className="MovieForm__label">
                Description
                    <textarea rows="8" className="MovieForm__textarea"></textarea>
                </label>
                <label className="MovieForm__label">
                    Rating
                    <select className="MovieForm__input">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <button className="MovieForm__submit" type="submit">submit</button>
            </form>
        )
    }
}
export default MovieForm;
