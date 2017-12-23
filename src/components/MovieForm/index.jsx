import React from 'react';
import v4 from 'uuid/v4';
import './styles.css';

const genreList = ['drama','action','comedy'];

const MovieForm = ({ onFormSubmit }) => {
    const mov = {
        id: null,
        form: null,
        title: null,
        descr: null,
        rating: null,
        checkboxes: []
    };

    const areInputFilled = inputs => inputs.every(input => input.value !== '');

    const handleSubmit = event => {
        event.preventDefault();

        const genres = mov.checkboxes
        .filter(check => check.checked)
        .map(x => x.value);

        if(areInputFilled([mov.title, mov.descr])) {
            onFormSubmit({
                id: v4(),
                title: mov.title.value,
                descr: mov.descr.value,
                rating: mov.rating.value,
                genres
            });
            mov.form.reset();
        }
        else {
            alert('Заполните поля');
        }
    };

    return (
        <form className="MovieForm"
         onSubmit={handleSubmit}
         ref={node => (mov.form = node)}>
            <label className="MovieForm__label">
              Title 
              <input type="text"
               className="MovieForm__input"
               ref={node => (mov.title = node)}/>
            </label>
            <label className="MovieForm__label">
            Description
            <textarea rows={8}
            className="MovieForm__textarea"
            ref={node => (mov.descr = node)}
            ></textarea>
            </label>
            <label className="MovieForm__label">
            <select className="MovieForm__input" ref={node => (mov.rating = node)}>
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
            <div className="MovieForm__genres">
                {genreList.map(genre => (
                    <label key={genre}>
                        <input 
                        type="checkbox"
                        value={genre}
                        ref={node => mov.checkboxes.push(node)}
                        />
                        {genre}
                    </label>
                ))}
            </div>
            <button className="MovieForm__submit" type="submit">submit</button>
        </form>
    )
}

        
            
  
export default MovieForm;
