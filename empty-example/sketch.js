let table_imdb;
let table_date;
let table_scores;
let earth;
let movies_imdb = [];
let movies_date = [];
let movies_scores = [];
let row_count;
let initial_data_circle_radius = 290;
let inner_circle_center_x = 500;
//let netflix_genres = ['Adventure','Drama','Short','Game-Show','Sport','Music','Crime','Western','Musical','Film-Noir',
//'Romance','Action','Fantasy','History','Biography','War','Animation','Adult','News','Horror','Talk-Show',
//'Family','Comedy','Mystery','Documentary','Sci-Fi','Reality-TV','Thriller']

let netflix_genres = ['Adventure', 'Drama', 'Sport', 'Crime', 'Western', 'Musical',
    'Romance', 'Action', 'Fantasy', 'History', 'Animation', 'Horror', 'Talk-Show',
    'Family', 'Comedy', 'Documentary', 'Sci-Fi', 'Thriller']

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function preload() {
    table_imdb = loadTable('new_netflix_imdb_score.csv', 'csv', 'header');
    table_date = loadTable('new_netflix_date.csv', 'csv', 'header');
    table_scores = loadTable('new_netflix_scores.csv', 'csv', 'header');
}

function setup() {
    createCanvas(1700, 800);
    row_count = table_date.getRowCount();
    for (let i = 0; i < row_count; i++) {
        let title = table_imdb.getString(i, 1);
        let type = table_imdb.getString(i, 5);
        let hidden_gem_score = table_imdb.getString(i, 6);
        let runtime = table_imdb.getString(i, 7);
        let view_rating = table_imdb.getString(i, 11);
        let imdb_score = table_imdb.getString(i, 12);
        let rotten_score = table_imdb.getString(i, 13);
        let metacritic_score = table_imdb.getString(i, 14);
        let n_awards = table_imdb.getString(i, 15);
        let box_office = table_imdb.getString(i, 17);
        let release_date = table_imdb.getString(i, 18);
        let netflix_date = table_imdb.getString(i, 19);
        let netflix_link = table_imdb.getString(i, 21);
        let imdb_link = table_imdb.getString(i, 22);
        let summary = table_imdb.getString(i, 23);
        let imdb_votes = table_imdb.getString(i, 24);
        let image = table_imdb.getString(i, 25);

        let movie = new Movie(title, type, hidden_gem_score, runtime, view_rating, imdb_score, rotten_score, metacritic_score,
            n_awards, box_office, release_date, netflix_date, netflix_link, imdb_link, summary,
            imdb_votes, image);

        let genres = table_imdb.getString(i, 2);
        let tags = table_imdb.getString(i, 3);
        let languages = table_imdb.getString(i, 4);
        let directors = table_imdb.getString(i, 8);
        let writers = table_imdb.getString(i, 9);
        let actors = table_imdb.getString(i, 10);
        let productions = table_imdb.getString(i, 20);

        movie.setListParameters(genres, tags, languages, directors, writers, actors, productions)

        movies_imdb[i] = movie;


        title = table_date.getString(i, 1);
        type = table_date.getString(i, 5);
        hidden_gem_score = table_date.getString(i, 6);
        runtime = table_date.getString(i, 7);
        view_rating = table_date.getString(i, 11);
        imdb_score = table_date.getString(i, 12);
        rotten_score = table_date.getString(i, 13);
        metacritic_score = table_date.getString(i, 14);
        n_awards = table_date.getString(i, 15);
        box_office = table_date.getString(i, 17);
        release_date = table_date.getString(i, 18);
        netflix_date = table_date.getString(i, 19);
        netflix_link = table_date.getString(i, 21);
        imdb_link = table_date.getString(i, 22);
        summary = table_date.getString(i, 23);
        imdb_votes = table_date.getString(i, 24);
        image = table_date.getString(i, 25);

        movie = new Movie(title, type, hidden_gem_score, runtime, view_rating, imdb_score, rotten_score, metacritic_score,
            n_awards, box_office, release_date, netflix_date, netflix_link, imdb_link, summary,
            imdb_votes, image);

        genres = table_date.getString(i, 2);
        tags = table_date.getString(i, 3);
        languages = table_date.getString(i, 4);
        directors = table_date.getString(i, 8);
        writers = table_date.getString(i, 9);
        actors = table_date.getString(i, 10);
        productions = table_date.getString(i, 20);

        movie.setListParameters(genres, tags, languages, directors, writers, actors, productions)

        movies_date[i] = movie;

        if (i < 3934) {

            title = table_scores.getString(i, 1);
            hidden_gem_score = table_scores.getString(i, 6);
            runtime = table_scores.getString(i, 7);
            view_rating = table_scores.getString(i, 11);
            imdb_score = table_scores.getString(i, 12);
            rotten_score = table_scores.getString(i, 13);
            metacritic_score = table_scores.getString(i, 14);
            imdb_votes = table_scores.getString(i, 24);
            image = table_scores.getString(i, 25);

            movie = new Movie(title, type, hidden_gem_score, runtime, view_rating, imdb_score, rotten_score, metacritic_score,
                n_awards, box_office, release_date, netflix_date, netflix_link, imdb_link, summary,
                imdb_votes, image);

            movies_scores[i] = movie;
        }
    }

}

function draw() {

    background('#020D1E');
    noFill();
    stroke('white')

    circularData();
    //networkData();
    noLoop();
}

let sum_of_genres_movies = [];
let sum_of_genres_series = [];

let number_of_movies = 0;
let number_of_series = 0;

function networkData() {

    number_of_movies = 0;
    number_of_series = 0;

    stroke('white');
    strokeWeight(2);
    line(120, 20, 120, 750);
    line(120, 750, 1000, 750);

    for (let i = 0; i < netflix_genres.length; i++) {
        let text_y = map(i, 0, netflix_genres.length, 40, 730);
        strokeWeight(0.5);
        textAlign(LEFT);
        fill('white');
        textSize(15);
        text(netflix_genres[i], 20, text_y + 5);

        sum_of_genres_movies[i] = 0;
        sum_of_genres_series[i] = 0;

        //line(20, text_y+5, 1500, text_y+5);
        for (let j = 0; j < 100; j++) {
            let dot_x = map(j, 0, 100, 120, float(width / 2) + 250 + 550 / 2);
            point(dot_x, text_y);
        }
    }

    for (let i = 0; i < row_count; i++) {

        y = 770;
        x = map(i, 0, row_count, 140, 980);
        strokeWeight(10);
        noFill();


        if (movies_imdb[i].type == "Series") {
            c = color('red');
            c.setAlpha(5);
            stroke(c);
            number_of_series++;
        }
        else {
            c = color('yellow');
            c.setAlpha(5);
            stroke(c);
            number_of_movies++;
        }
        point(x, y);

        for (let j = 0; j < netflix_genres.length; j++) {

            if (movies_imdb[i].genres.includes(netflix_genres[j])) {

                if (movies_imdb[i].type == "Series") {
                    sum_of_genres_series[j]++;

                }
                else {
                    sum_of_genres_movies[j]++;

                }

                let text_y = map(j, 0, netflix_genres.length, 40, 730);

                c = color(colorArray[j]);
                c.setAlpha(10);
                stroke(c);
                strokeWeight(5);
                point(x, text_y);
            }
        }
    }

    //parallelCordinates();
    divergingBarChart();

}

function divergingBarChart() {
    let lineY = 20;
    let lineX = float(width / 2) + 250;
    stroke('white');
    strokeWeight(2);
    rect(lineX, lineY, 550, 730);

    let diverge_center_x = float(width / 2) + 250 + 550 / 2;

    line(diverge_center_x, lineY, diverge_center_x, 750);

    let d_height = 30;
    noStroke();

    for (let j = 0; j < netflix_genres.length; j++) {

        dx = map(j, 0, netflix_genres.length, 40, 730);
        movie_width = map(sum_of_genres_movies[j], 0, number_of_movies / 2, 0, 550 / 2);
        series_width = map(sum_of_genres_series[j], 0, number_of_series / 2, 0, 550 / 2);

        fill('yellow');
        rect(diverge_center_x, dx - 15, -movie_width, d_height);

        fill('red');
        rect(diverge_center_x, dx - 15, series_width, d_height);
    }

}

/*let lineY = 20;

function parallelCordinates() {
    noFill();
    let lineX = float(width / 2) + 250;
    stroke('white');
    strokeWeight(2);
    rect(lineX, lineY, 550, height / 2 - 50);


    noFill();
    strokeWeight(1);

    stroke('red');
    drawDataLine(selected_column, selected_countries.get(i));

    stroke('yellow');
    drawDataLine(selected_column, selected_countries.get(i));


    let con_dx = 20;
    for (let i = 0; i < 2; i++)
    {
        stroke(colorArray[i]);
        drawDataLine(selected_column, selected_countries.get(i));
        fill(colorArray[i]);
        rect(lineX + 620, lineY + height / 3 - 40 - con_dx * (i + 1), 10, 10);


        //country_codes
        for (int j = 0; j < country_codes.getRowCount(); j++)
        {
            if (selected_countries.get(i).equals(trim(country_codes.getString(j, 2)))) {
                fill(0);
                textSize(15);
                textAlign(LEFT);
                text(country_codes.getString(j, 0), lineX + 640, lineY + height / 3 - 30 - con_dx * (i + 1));
                break;
            }
        }
    }
    //drawDataLine(selected_column, "TUR");
    drawVolumeLabels();
    drawYearLabels();
}
let max_col;
/*void drawDataLine(int col, String country) {

  int counter = 0;
  int y_max = 10000000;
    if (selected_column == 4)
        y_max = 10000000;
    else
        y_max = 150000;
    noFill();
    beginShape();
  int month = range1_max;
  int d_month = (range1_max - range1_min + 1) / 7;
  int number_of_dates = 0;
    if (d_month == 0) d_month = 1;
    max_col = MIN_FLOAT;
    for (int row = 0; row < covid_data_sorted_daily.getRowCount(); row++) {
        if (trim(country).equals(covid_data_sorted_daily.getString(row, 1))
            && covid_data_sorted_daily.getInt(row, 7) >= range1_min
            && covid_data_sorted_daily.getInt(row, 7) <= range1_max) {
      float value = abs(covid_data_sorted_daily.getFloat(row, col));

            println(max_col + " " + value);
            if (max_col < value) max_col = value;
      
      float x = map(month, range1_max, range1_min, lineX + 600, lineX);
      float y = map(value, 0, max_col, int(lineY + height / 3 - 50) - 5, lineY);
            if (month == range1_max) {
                dateTime_labels.add(covid_data_sorted_daily.getString(row, 3));
            }
            if (counter == d_month && number_of_dates < 5) {
                counter = 0;
                //println(covid_data_sorted_daily.getString(row, 3));
                dateTime_labels.add(covid_data_sorted_daily.getString(row, 3));
                number_of_dates++;
            }
            if (month == range1_min) {
                dateTime_labels.add(covid_data_sorted_daily.getString(row, 3));
            }
            counter++;
            vertex(x, y);
            month--;
        }
    }
    //println(max_col);
    vertex(lineX, int(lineY + height / 3 - 50));
    endShape();
}

void drawYearLabels() {
    fill(0);
    textSize(10);
    textAlign(CENTER);

    stroke(224);
    strokeWeight(1);

    for (int i = 1; i < 6; i++) {

    float x = map(i, 0, 6, lineX + 600, lineX);
    float x_text = map(i - 1, 0, 6, lineX + 600, lineX);
        if (dateTime_labels.size() != 0)
            text(dateTime_labels.get(i - 1).replace('/', '.'), x_text, int(lineY + height / 3 - 50) + 10);
        line(x, int(lineY + height / 3 - 50) - 1, x, lineY + 1);
    }
  
  float x_text = map(5, 0, 6, lineX + 600, lineX);
    if (dateTime_labels.size() != 0)
        text(dateTime_labels.get(5).replace('/', '.'), x_text, int(lineY + height / 3 - 50) + 10);

    x_text = map(6, 0, 6, lineX + 600, lineX);
    if (dateTime_labels.size() != 0)
        text(dateTime_labels.get(6).replace('/', '.'), x_text, int(lineY + height / 3 - 50) + 10);

    //println(dateTime_labels.size());
    dateTime_labels = new ArrayList < String > ();
}

void drawVolumeLabels() {
    fill(0);
    textSize(10);
    textAlign(RIGHT);

    stroke(128);
    strokeWeight(1);

    for (float v = 0; v < 11; v++) {
    float y = map(v, 0, 10, int(lineY + height / 3 - 50), lineY);
    float textOffset = textAscent() / 2;

        if (v == 0) {
            textOffset = 0;
        } else if (v == 10) {
            textOffset = textAscent();
        }

        if (v != 0 && max_col != null)
            if (selected_column == 5)
                text(/*floor(v) * 15000*///floor(max_col / 10 * (v + 1)), lineX - 10, y + textOffset);
/*       else
           text(floor(max_col / 10 * (v + 1)), lineX - 10, y + textOffset);
   else
       text(floor(v), lineX - 10, y + textOffset);

   line(lineX - 4, y, lineX, y);
}
}*/

function circularData() {
    for (let i = 0; i < row_count; i++) {

        let radius_index = movies_date[i].release_date.substring(movies_date[i].release_date.length - 4) - 1930;

        r = radius_index;//random(0,50)
        x = (inner_circle_center_x + (initial_data_circle_radius + r) * Math.cos(2 * Math.PI * i / row_count));
        y = (height / 2 + (initial_data_circle_radius + r) * Math.sin(2 * Math.PI * i / row_count));
        strokeWeight(map(radius_index, 0, 100, 5, 0));
        noFill();
        if (movies_date[i].type == "Series")
            stroke('red')
        else
            stroke('yellow')
        point(x, y);

        for (let j = 0; j < netflix_genres.length; j++) {

            if (movies_date[i].genres.includes(netflix_genres[j])) {
                //console.log("asd");
                line_x = (inner_circle_center_x + (150) * Math.cos(2 * Math.PI * j / netflix_genres.length));
                line_y = (height / 2 + (150) * Math.sin(2 * Math.PI * j / netflix_genres.length));

                point_x = (inner_circle_center_x + 275 * Math.cos(2 * Math.PI * i / row_count));
                point_y = (height / 2 + 275 * Math.sin(2 * Math.PI * i / row_count));

                c = color(colorArray[j]);
                c.setAlpha(5);
                stroke(c);
                strokeWeight(1);
                line(line_x, line_y, point_x, point_y)
                stroke(colorArray[j]);
                strokeWeight(10);
                point(point_x, point_y);
            }
        }
    }

    for (let i = 0; i < netflix_genres.length; i++) {
        x = (inner_circle_center_x + (150) * Math.cos(2 * Math.PI * i / netflix_genres.length));
        y = (height / 2 + (150) * Math.sin(2 * Math.PI * i / netflix_genres.length));
        strokeWeight(1);
        noStroke();
        fill(colorArray[i]);
        circle(x, y, 10);
    }

    drawLineChart();
}

function drawLineChart() {
    let lineY = 20;
    let lineX = float(width / 2) + 250;
    stroke('white');
    strokeWeight(2);
    noFill();

    rect(lineX, lineY, 550, height / 2 - 100);
    rect(lineX, lineY + height / 2, 550, height / 2 - 100);

    let index = 0;
    for (let i = 0; i < row_count; i++) {

        if (movies_date[i].n_awards && movies_date[i].box_office) {
            let y = map(movies_date[i].n_awards, 0, 300, lineY + height / 2 - 102, lineY);
            //let x = map(parseInt(movies_date[i].box_office.replaceAll(',', '')), 0, 659363944, lineX + 2, lineX + 550);
            let x = map(index, 0, 2950, lineX + 2, lineX + 550);

            strokeWeight(2);
            if (movies_date[i].type == "Series") {
                strokeWeight(3);
                stroke('red');
            }
            else
                stroke('yellow');
            //console.log(x+" "+y);
            index++;
            point(x, y);
        }

        //console.log(movies_date[i].n_awards);
    }

    fill(255);
    textSize(10);
    textAlign(RIGHT);

    stroke(128);
    strokeWeight(1);

    for (let v = 0; v < 11; v++) {
        let y = map(v, 0, 10, lineY + height / 2 - 100, lineY);
        let textOffset = textAscent() / 2;

        text(floor(v) * 30, lineX - 10, y + textOffset);
        line(lineX - 4, y, lineX, y);
    }

    for (let v = 0; v < 11; v++) {
        let x = map(v, 0, 10, lineX + 2, lineX + 550);
        let textOffset = textAscent() / 2;

        text(floor(v), x, height / 2 - 65);
    }

    for (let i = 0; i < movies_scores.length; i++) {

        let y = map(i, 0, movies_scores.length, lineY + height / 2 + 1, lineY + height / 2 + 299);
        let per_hidden_gem_score = map(movies_scores[i].hidden_gem_score, 0, 10, 0, 100);
        let per_imdb_score = map(movies_scores[i].imdb_score, 0, 10, 0, 100);
        let per_metacritic_score = map(movies_scores[i].metacritic_score, 0, 100, 0, 100);
        let per_rotten_score = map(movies_scores[i].rotten_score, 0, 100, 0, 100);
        let sum_score = per_hidden_gem_score + per_imdb_score + per_metacritic_score + per_rotten_score;

        let hidden_width = map(per_hidden_gem_score, 0, sum_score, 0, 549);
        let imdb_width = map(per_imdb_score, 0, sum_score, 0, 549);
        let meta_width = map(per_metacritic_score, 0, sum_score, 0, 549);
        let rotten_width = map(per_rotten_score, 0, sum_score, 0, 549);

        console.log(movies_scores[i].hidden_gem_score);
        stroke('red');
        line(lineX + 1, y, lineX + hidden_width, y);
        stroke('green');
        line(lineX + hidden_width, y, lineX + hidden_width + imdb_width, y);
        stroke('yellow');
        line(lineX + hidden_width + imdb_width, y, lineX + hidden_width + imdb_width + meta_width, y);
        stroke('blue');
        line(lineX + hidden_width + imdb_width + meta_width, y, lineX + hidden_width + imdb_width + meta_width + rotten_width, y);
    }
    
    let text_y = lineY + height / 2;
    strokeWeight(0.5);

    stroke('black');
    fill('red');
    rect(lineX-80, text_y, 10, 10);
    stroke(200);
    fill(200);
    textAlign(LEFT);
    text('HGC', lineX-60, text_y + 8);

    text_y = text_y + 15;

    stroke('black');
    fill('green');
    rect(lineX-80, text_y, 10, 10);
    stroke(200);
    fill(200);
    textAlign(LEFT);
    text('IMDB', lineX-60, text_y + 8);

    text_y = text_y + 15;

    stroke('black');
    fill('yellow');
    rect(lineX-80, text_y, 10, 10);
    stroke(200);
    fill(200);
    textAlign(LEFT);
    text('Metacritic', lineX-60, text_y + 8);

    text_y = text_y + 15;

    stroke('black');
    fill('blue');
    rect(lineX-80, text_y, 10, 10);
    stroke(200);
    fill(200);
    textAlign(LEFT);
    text('RT', lineX-60, text_y + 8);
    
    strokeWeight(1);

    for (let v = 0; v < 5; v++) {
        let x = map(v, 0, 4, lineX, lineX + 550);
        let textOffset = textAscent() / 2;

        text(floor(v), x-5, height - 50);

        line(x, height - 70, x, height - 80);
    }

}


function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        background('#020D1E');
        noFill();
        stroke('white')
        networkData();
    } else if (keyCode === RIGHT_ARROW) {
        background('#020D1E');
        noFill();
        stroke('white')
        circularData();
    }
}