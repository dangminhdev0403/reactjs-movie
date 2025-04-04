import { useForm } from "react-hook-form";
import FormField from "./FormField";
import GenreTypeInput from "./FormInput/GenreTypeInput";
import MediaTypeInput from "./FormInput/MediaTypeInput";

const SearchForm = () => {
  const { handleSubmit, control, register } = useForm();

  const onSubmit = (data) => console.log("data" + JSON.stringify(data));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="mediaType"
          label="media Type"
          Component={MediaTypeInput}
        />

        <FormField
          control={control}
          name="Genres"
          label="Genres"
          Component={GenreTypeInput}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
