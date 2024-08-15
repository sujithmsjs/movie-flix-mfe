package tech.suji.movieflix.service;

import java.util.List;

import tech.suji.movieflix.domain.MovieSearchDTO;
import tech.suji.movieflix.model.Genre;
import tech.suji.movieflix.model.MovieDTO;

public interface MovieService {

	boolean titleExists(String title);

	Object searchMovies(MovieSearchDTO searchDTO);

	void delete(Long id);

	void update(Long id, MovieDTO movieDTO);

	Long create(MovieDTO movieDTO);

	MovieDTO get(Long id);

	List<MovieDTO> findAll();

	boolean existsByMovieName(String movieName);

	List<Genre> getUniqueGenres();


}
