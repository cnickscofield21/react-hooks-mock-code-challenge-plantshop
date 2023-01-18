import {useState} from "react";

function NewPlantForm({onAddPlant}) {
    const initialFormState = {
        name: "",
        image: "",
        price: ""
    }

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({...formData}),
        };

        fetch("http://localhost:6001/plants", configObj)
        .then(resp => resp.json())
        .then(plant => {
            onAddPlant(plant);
            setFormData(initialFormState);
        })
    }

    const {name, image, price} = formData;

    return (
        <div className="new-plant-form">
            <h2>New Plant</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Plant name"
                    onChange={handleChange}
                    value={name}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    onChange={handleChange}
                    value={image}
                />
                <input
                    type="number"
                    name="price"
                    step="0.01"
                    placeholder="Price"
                    onChange={handleChange}
                    value={price}
                />
                <button type="submit">Add Plant</button>
            </form>
        </div>
    );
}

export default NewPlantForm;
