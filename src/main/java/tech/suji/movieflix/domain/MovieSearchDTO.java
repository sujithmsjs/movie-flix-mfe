package tech.suji.movieflix.domain;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.Setter;
import tech.suji.movieflix.model.Genre;


@Getter
@Setter
public class MovieSearchDTO {
    private String title;
    private Genre genre;
    private String director;
    private Integer duration;
    private Double rating;
    private BigDecimal collection;
    private LocalDate releaseDate;
    private Integer pageNumber;
    private Integer pageSize;
    private String sortBy;
    private String orderBy;
}
