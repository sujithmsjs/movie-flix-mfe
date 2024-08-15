package tech.suji.movieflix.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import tech.suji.movieflix.domain.Movie;
import tech.suji.movieflix.domain.MovieSearchDTO;
import tech.suji.movieflix.domain.Quote;
import tech.suji.movieflix.model.MovieDTO;
import tech.suji.movieflix.repos.QuoteRepository;
import tech.suji.movieflix.util.NotFoundException;

@Service
public class QuoteServiceImpl implements QuoteService {

	@Autowired
	private QuoteRepository quoteRepository;

	@Override
	public List<Quote> findAll() {
		final List<Quote> movies = quoteRepository.findAll(Sort.by("id"));
		//return movies.stream().map(movie -> mapToDTO(movie, new MovieDTO())).toList();
		return movies;
	}

	@Override
	public Quote get(final Long id) {
		return quoteRepository.findById(id)
				.orElseThrow(NotFoundException::new);
	}

	@Override
	public Long create(final Quote quote) {
		return quoteRepository.save(quote).getId();
	}

	@Override
	public void update(final Long id, final Quote quote) {


		quoteRepository.save(quote);
	}

	@Override
	public void delete(final Long id) {
		quoteRepository.deleteById(id);
	}

	private MovieDTO mapToDTO(final Movie movie, final MovieDTO movieDTO) {
		movieDTO.setId(movie.getId());
		movieDTO.setTitle(movie.getTitle());
		movieDTO.setGenre(movie.getGenre());
		movieDTO.setDirector(movie.getDirector());
		movieDTO.setDuration(movie.getDuration());
		movieDTO.setRating(movie.getRating());
		movieDTO.setReleaseDate(movie.getReleaseDate());
		movieDTO.setCollection(movie.getCollection());
		return movieDTO;
	}

	private Movie mapToEntity(final MovieDTO movieDTO, final Movie movie) {
		movie.setTitle(movieDTO.getTitle());
		movie.setGenre(movieDTO.getGenre());
		movie.setDirector(movieDTO.getDirector());
		movie.setDuration(movieDTO.getDuration());
		movie.setRating(movieDTO.getRating());
		movie.setReleaseDate(movieDTO.getReleaseDate());
		movie.setCollection(movieDTO.getCollection());
		return movie;
	}

	@Override
	public boolean titleExists(String title) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Object searchQuote(MovieSearchDTO searchDTO) {
		// TODO Auto-generated method stub
		return null;
	}



}
