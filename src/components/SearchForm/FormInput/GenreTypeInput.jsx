import useFetch from "@hooks/useFetch";
import { useWatch } from "react-hook-form";

const GenreTypeInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });

  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enable: mediaType },
  );

  return (
    <div className="flex flex-wrap gap-1">
      {(data.genres || []).map((genre) => (
        <button
          type="button"
          className={`cursor-pointer rounded-lg border px-2 py-1 ${value.includes(genre.id) ? "bg-slate-400" : ""}`}
          key={genre.id}
          onClick={() => {
            if (value.includes(genre.id)) {
              onChange(value.filter((id) => id !== genre.id));
            } else {
              onChange([...value, genre.id]);
            }
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreTypeInput;
