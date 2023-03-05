import useForm from "../../../hooks/useForm";
import FormInput from "../../../components/form/FormInput";
import Button from "../../../components/ui/Button";
import {useEffect, useState} from "react";


const ReviewForm = ({onSubmit}) => {
    const [error, setError] = useState("");
    const {values, handleSubmit, resetForm, handleChange} = useForm({
        rating: 1,
        comment: ""
    })

    const handleRatingChange = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 5) {
            setError("Rating must be between 1 and 5");
        } else {
            setError("");
            handleChange(event);
        }
    };

    return(
        <form onSubmit={(event) => handleSubmit(event, onSubmit)}>
            <div>
                <FormInput
                    label="Rating"
                    type="number"
                    name="rating"
                    value={values.rating}
                    onChange={handleRatingChange}
                    required
                    min="1"
                    max="5"
                    />
                {error && <span className="error">{error}</span>}
            </div>
            <div>
                <FormInput
                    label="Comment"
                    type="text"
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit">Create review</Button>
            <Button type="button" onClick={resetForm}>
                Reset
            </Button>
        </form>
    )
}

export default ReviewForm;