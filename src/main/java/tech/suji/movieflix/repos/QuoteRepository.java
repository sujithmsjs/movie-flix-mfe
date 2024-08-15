package tech.suji.movieflix.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import tech.suji.movieflix.domain.Movie;
import tech.suji.movieflix.domain.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Long>, JpaSpecificationExecutor<Movie>  {

   // boolean existsByTitleIgnoreCase(String title);

}
