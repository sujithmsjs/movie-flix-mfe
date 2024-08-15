import { useForm } from "react-hook-form";
import DropdwonBox from "./ui/DropdownBox";
import Input from "./ui/Input";
import { existsByTitle, getMovieById } from "./apis/MovieService"
import { useEffect } from "react";

const getMovie = async (id) => {
    const result = await getMovieById(id);
    console.info(result)
    return result;
}


const MovieEdit = ({ onSubmitMovie, initMovieId, onCancel }) => {

    const { register, control, form, handleSubmit, formState, watch } = useForm({
        defaultValues: async () => {
            const result =  await getMovie(initMovieId);
            console.info('DefaultValues: ', result.data);
            return result.data;
        }
    })

    const title = watch('title');

    const { errors, isDirty, isValid } = formState;

    const onSubmit = (data) => {
        onSubmitMovie(data);
    }

    const handleCancle = () => {
        onCancel();
    }




    return (<form onSubmit={handleSubmit(onSubmit)} noValidate>

        <Input label="Title" errors={errors} register={register('title', {
            validate: {
                notBlank: (value) => {
                    return value.trim().length > 0 || 'Username should not be blank';
                },
                unavailable: async (value) => {
                    try {
                        const results = await existsByTitle(value.trim());
                        const isAlreadyExists = results.data;
                        console.info('Inside: THEN : ', isAlreadyExists);
                        return isAlreadyExists ? 'Sorry, title is already exists!' : true;
                    } catch (error) {
                        console.error(error);
                        return false;
                    }
                }
            }
        }
        )} />

        <Input label="Director" register={register('director', { required: "Director is required" })} errors={errors} />
        <Input type="number" label="Duration" register={register('duration')} errors={errors} />


        <DropdwonBox name='genre' register={register} options={['ANIMATION', 'FANTASY', 'DRAMA', 'WAR', 'SCI_FI', 'HISTORICAL', 'DOCUMENTARY', 'ADVENTURE', 'CRIME', 'SUPERHERO', 'ACTION', 'THRILLER', 'COMEDY', 'SPY', 'MYSTERY', 'FAMILY', 'HORROR', 'MUSICAL', 'WESTERN', 'ROMANCE']} />




        <Input type="date" label="ReleaseDate" register={register('releaseDate')} errors={errors} />
        <Input type="number" label="Collection" register={register('collection')} errors={errors} />

        <Input type="number" label="Rating" register={register('rating')} errors={errors} />
        <div className="my-3">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" class="btn btn-danger mx-4" onClick={handleCancle}>Cancel</button>
        </div>


    </form>);
}

export default MovieEdit;