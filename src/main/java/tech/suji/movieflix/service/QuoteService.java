package tech.suji.movieflix.service;

import java.util.List;

import tech.suji.movieflix.domain.MovieSearchDTO;
import tech.suji.movieflix.domain.Quote;
import tech.suji.movieflix.model.MovieDTO;

public interface QuoteService {

	boolean titleExists(String title);

	Object searchQuote(MovieSearchDTO searchDTO);

	void delete(Long id);

	void update(Long id, Quote quote);

	Long create(Quote movieDTO);

	Quote get(Long id);

	List<Quote> findAll();

}
