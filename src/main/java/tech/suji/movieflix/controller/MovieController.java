package tech.suji.movieflix.controller;

import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
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
import tech.suji.movieflix.model.MovieDTO;
import tech.suji.movieflix.service.MovieService;

@RestController
@RequestMapping(value = "/api/movies", produces = MediaType.APPLICATION_JSON_VALUE)
public class MovieController {

	private final MovieService movieService;

	public MovieController(final MovieService movieService) {
		this.movieService = movieService;
	}

	@GetMapping
	public ResponseEntity<List<MovieDTO>> getAllMovies() throws InterruptedException {

		Thread.sleep(5_000);


		return ResponseEntity.ok(movieService.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<MovieDTO> getMovie(@PathVariable(name = "id") final Long id) {
		return ResponseEntity.ok(movieService.get(id));
	}

	@PostMapping
	@ApiResponse(responseCode = "201")
	public ResponseEntity<Long> createMovie(@RequestBody @Valid final MovieDTO movieDTO) {
		final Long createdId = movieService.create(movieDTO);
		return new ResponseEntity<>(createdId, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Long> updateMovie(@PathVariable(name = "id") final Long id,
			@RequestBody @Valid final MovieDTO movieDTO) {
		movieService.update(id, movieDTO);
		return ResponseEntity.ok(id);
	}

	@DeleteMapping("/{id}")
	@ApiResponse(responseCode = "204")
	public ResponseEntity<Void> deleteMovie(@PathVariable(name = "id") final Long id) {
		movieService.delete(id);
		return ResponseEntity.noContent().build();
	}

}
