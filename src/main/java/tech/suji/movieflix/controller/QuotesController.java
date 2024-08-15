package tech.suji.movieflix.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import tech.suji.movieflix.domain.MovieSearchDTO;
import tech.suji.movieflix.domain.Quote;
import tech.suji.movieflix.model.MovieDTO;
import tech.suji.movieflix.service.QuoteService;

@RestController
@RequestMapping(value = "/api/quotes", produces = MediaType.APPLICATION_JSON_VALUE)
public class QuotesController {

	private final QuoteService quoteService;

	public QuotesController(final QuoteService quoteService) {
		this.quoteService = quoteService;
	}

	@GetMapping
	public ResponseEntity<List<Quote>> getAllMovies() {
		return ResponseEntity.ok(quoteService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Quote> getMovie(@PathVariable(name = "id") final Long id) {
		return ResponseEntity.ok(quoteService.get(id));
	}

	@PostMapping
	@ApiResponse(responseCode = "201")
	public ResponseEntity<Long> createMovie(@RequestBody @Valid final Quote movieDTO) {
		final Long createdId = quoteService.create(movieDTO);
		return new ResponseEntity<>(createdId, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Long> updateMovie(@PathVariable(name = "id") final Long id,
			@RequestBody @Valid final Quote quote) {
		quoteService.update(id, quote);
		return ResponseEntity.ok(id);
	}

	@DeleteMapping("/{id}")
	@ApiResponse(responseCode = "204")
	public ResponseEntity<Void> deleteMovie(@PathVariable(name = "id") final Long id) {
		quoteService.delete(id);
		return ResponseEntity.noContent().build();
	}

}
