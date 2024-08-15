package tech.suji.movieflix.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import tech.suji.movieflix.domain.Movie;
import tech.suji.movieflix.model.Genre;

@RepositoryRestResource(path = "movies")
public interface MovieRepository extends JpaRepository<Movie, Long>, JpaSpecificationExecutor<Movie>  {

    boolean existsByTitleIgnoreCase(String title);

    @Query("SELECT DISTINCT m.genre FROM Movie m")
    List<Genre> findDistinctGenres();
    //List<String> findDistinctByName();
}
