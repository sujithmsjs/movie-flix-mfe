import { useEffect, useState } from 'react';
import { getAllMovies, deleteMovieById, saveMovie } from './apis/MovieService'
import AsyncTest from './AsyncTest';
import MovieEdit from './MovieEdit';
import MovieForm from './MovieForm';
import MoviesTable from "./MoviesTable";

const initMovie = {
    collection: "836.83",
    director: "Christopher Nolan",
    duration: 148,
    genre: "Action",
    rating: 8.8,
    releaseDate: "2010-07-16",
    title: "Inception"
}

const MovieDataHandler = ({ addRecord }) => {

    const [movies, setMovies] = useState([]);
    //const [isEditVisible, setIsEditVisible] = useState(false);
    const [editMovieId, setEditMovieId] = useState(0);


    const refreshMoviesData = () => {
        getAllMovies()
            .then(
                results => {
                    console.info(results.data);
                    setMovies(results.data);
                }
            ).catch(error => {
                console.info('Error: ', error);
            })
        console.info('Movies Reloaded.');
    }

    const handleSubmitRecord = (data) => {
        console.info(data)
        saveMovie(data).then(results => {
            refreshMoviesData();
        }).catch(error => {
            console.info(error.response.data);
        })
    }

    const handleDeleteRecord = async (id) => {
        console.info('Delete pressed');
        await deleteMovieById(id)
            .then(
                results => {
                    console.info('Delete successful', results);
                    refreshMoviesData();
                }
            ).catch(
                error => {
                    console('Error', error);
                }
            )
    }

    useEffect(
        () => {
            refreshMoviesData();
            return () => {
            }
        }, []
    );

    const handleCancelEdit = () => {
        setEditMovieId(prevSate => 0);
    }

    const handleEditRecord = (id) => {
        console.info('Edit id ', id);
        setEditMovieId(prevSate => id);

    }

    const handleRefresh = () => {
        refreshMoviesData();
    }

    return (
        <>

            <div class="row">

                {
                    editMovieId <= 0 &&
                    <div class="col-md-3">
                        <h4>Add New</h4>
                        {<MovieForm onSubmitMovie={handleSubmitRecord} initMovie={{}} />}

                        <AsyncTest />
                    </div>
                }


                <div class="col-md-9 p-3">
                    <button className='btn btn-primary btn-sm' onClick={handleRefresh}>Refresh</button>
                    <MoviesTable data={movies} onDeleteRecord={handleDeleteRecord} onEditRecord={handleEditRecord} />
                </div>

                {
                    editMovieId > 0 &&
                    <div class="col-md-3">
                        <h4>Edit</h4>
                        {<MovieEdit onSubmitMovie={handleSubmitRecord} initMovieId={editMovieId} onCancel={handleCancelEdit} />}
                    </div>
                }

            </div>
        </>
    );

}

export default MovieDataHandler;