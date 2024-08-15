
import { getAllMovies, deleteMovieById } from './apis/MovieService'
import { useEffect, useState } from 'react';
import { printError } from './util/UtilMethods';



const MoviesTable = ({ data: movies, onDeleteRecord, onEditRecord }) => {

    const handleDelete = (event, id) => {
        onDeleteRecord(id)
    }

    const handleEdit = (event, id) => {
        onEditRecord(id);
    }


    return (<table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>genre</th>
                <th>director</th>
                <th>duration</th>
                <th>rating</th>
                <th>releaseDate</th>
                <th>collection</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                movies.map(
                    (e, i) => (
                        <tr key={e.id}>
                            <td>{e.title}</td>
                            <td>{e.genre}</td>
                            <td>{e.director}</td>
                            <td>{e.duration}</td>
                            <td>{e.rating}</td>
                            <td>{e.releaseDate}</td>
                            <td>{e.collection}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" onClick={(event) => handleEdit(event, e.id)} class="btn btn-success btn-sm">Edit</button>
                                    <button type="button" onClick={(event) => handleDelete(event, e.id)} class="btn btn-warning btn-sm">Del</button>
                                </div>
                            </td>
                        </tr>
                    )
                )
            }

        </tbody>
    </table>);
}

export default MoviesTable;