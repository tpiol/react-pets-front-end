import { useState } from "react";

const PetForm = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        breed: "",
    })

    const handleChange = (evt) => {
        setFormData({ ...formData, [evt.target.value]: evt.target.value });
    }
    return (
        <div>
            <form>
                <label htmlFor="name"> Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="age"> Age </label>
                <input
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="breed"> Breed </label>
                <input
                    id="breed"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                />
                <button type="submit">Add New Pet</button>
            </form>
        </div>
    );
}


export default PetForm;