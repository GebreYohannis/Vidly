import React, { Component } from "react";
import Pagination from "../common/Pagination";
import ListGroup from "../common/ListGroup";
import MoviesTable from "./MoviesTable";
import { getMovies } from "../JavaScript/fakeMovieServices";
import { paginate } from "../utils/paginate";
import { getGenres } from "../JavaScript/fakeGenreServices";
import _ from "lodash";
import "./Movie.css";

class Movie extends Component {
  state = {
    movies: [],
    pageSize: 3,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleGenreSelect = this.handleGenreSelect.bind(this);
  }

  componentDidMount() {
    const genres = [{ id: "", name: "All Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete(movie) {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies: movies });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect(genre) {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre.id
        ? allMovies.filter((m) => m.genre.id === selectedGenre.id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    if (this.state.movies.length === 0)
      return (
        <>
          <h2>There are no movies in a database </h2>
        </>
      );
    return (
      <div className="container grid grid--1x2">
        <ListGroup
          items={this.state.genres}
          selectedItem={this.state.selectedGenre}
          onItemSelect={this.handleGenreSelect}
        />
        <div>
          <h2>Showing {filtered.length} movies in a database</h2>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            pageSize={pageSize}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
