export const fetchData = (urls = 'https://api.themoviedb.org/3/movie/popular?', querys = 'https://api.themoviedb.org/3/movie') => {
        const page = 1;
		const lang = 'en-US';
        let query = querys;
        const url = urls;
		const inclAbult = false;
		const key = 'f24a0fd18f52218851075901c5a108a0';
		const request = `${url}api_key=${key}&language=${lang}&page=${page}&include_adult=${inclAbult}&query=${query}`;
       return fetch(request)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            throw new Error('this is error' + response.statusText);
        })
        .then(data => {
            const movies = data.results.map(movie => ({
                id: movie.id,
                rating: movie.vote_average,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                title: movie.title,
                descr: movie.overview.slice(0, 100) + '...',
                release: movie.release_date.slice(0, -6),
            }));



            return movies;

        
            
            
        })
        .catch(err => console.error(err))
}