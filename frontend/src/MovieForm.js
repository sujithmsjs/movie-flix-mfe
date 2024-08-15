import { useForm } from "react-hook-form";
import DropdwonBox from "./ui/DropdownBox";
import Input from "./ui/Input";
import { existsByTitle, saveMovie } from "./apis/MovieService"



const MovieForm = ({ onSubmitMovie, initMovie }) => {

    const { register, control, form, handleSubmit, formState, watch, reset } = useForm({
        defaultValues: initMovie
    })

    const title = watch('title');

    const { errors, isDirty, isValid } = formState;

    const onSubmit = (data) => {
        onSubmitMovie(data);
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
        <div className="my-3 g-3">
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="button" onClick={() => reset()} class="btn btn-success mx-4">Reset</button>
        </div>

    </form>);
}

export default MovieForm;