class Movie {
    
    constructor(title, type, hidden_gem_score, runtime, view_rating, imdb_score, rotten_score, metacritic_score,
                n_awards, box_office, release_date, netflix_date, netflix_link, imdb_link, summary,
                imdb_votes, image) {
        this.title = title;
        this.type = type;
        this.hidden_gem_score = hidden_gem_score;
        this.runtime = runtime;
        this.view_rating = view_rating;
        this.imdb_score = imdb_score;
        this.rotten_score = rotten_score;
        this.metacritic_score = metacritic_score;
        this.n_awards = n_awards;
        this.box_office = box_office;
        this.release_date = release_date;
        this.netflix_date = netflix_date;
        this.netflix_link = netflix_link;
        this.imdb_link = imdb_link;
        this.summary = summary;
        this.imdb_votes = imdb_votes;
        this.image = image;
    }

    setListParameters(genres, tags, languages, directors, writers, actors, productions){
        this.genres = split(genres, ', ');
        this.tags = split(tags, ',');
        this.languages = split(languages, ', ');
        this.directors = split(directors, ', ');
        this.writers = split(writers, ', ');
        this.actors = split(actors, ', ');
        this.productions = split(productions, ', ');
    }

}