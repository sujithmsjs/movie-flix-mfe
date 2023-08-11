package tech.suji.movieflix.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.suji.movieflix.domain.Movie;


public interface MovieRepository extends JpaRepository<Movie, Long> {

    boolean existsByTitleIgnoreCase(String title);

}
