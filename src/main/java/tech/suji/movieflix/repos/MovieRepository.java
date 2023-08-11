package tech.suji.movieflix.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import tech.suji.movieflix.domain.Movie;

@RepositoryRestResource(path = "movies")
public interface MovieRepository extends JpaRepository<Movie, Long> {

    boolean existsByTitleIgnoreCase(String title);

}
