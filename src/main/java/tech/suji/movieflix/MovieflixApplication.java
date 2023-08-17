package tech.suji.movieflix;

import java.nio.charset.StandardCharsets;
import java.util.List;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.ResourceLoader;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;
import tech.suji.movieflix.domain.Movie;
import tech.suji.movieflix.repos.MovieRepository;

@Slf4j
@SpringBootApplication
public class MovieflixApplication implements ApplicationRunner {

	@Autowired
	private ResourceLoader resourceLoader;

	@Autowired
	ObjectMapper objectMapper;

	@Autowired
	MovieRepository movieRepository;

	public static void main(final String[] args) {
		SpringApplication.run(MovieflixApplication.class, args);
	}

	@Override
	public void run(ApplicationArguments args) throws Exception {
		// Create a ClassPathResource object for the JSON file
		ClassPathResource resource = new ClassPathResource("movies.json");

		String content = IOUtils.toString(resource.getInputStream(), StandardCharsets.UTF_8);

		List<Movie> movieList = objectMapper.readValue(content, new TypeReference<List<Movie>>() {});

		movieList.stream().distinct().forEach(m ->  movieRepository.save(m));
	}

}
