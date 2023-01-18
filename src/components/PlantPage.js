import {useState} from 'react';
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant}) {
    const [searchQuery, setSearchQuery] = useState("");

    const searchResults = plants.filter((plant) => {
        return plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    
    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <main>
            <NewPlantForm onAddPlant={onAddPlant}/>
            <Search handleOnChange={handleOnChange} />
            <PlantList plants={searchResults} />
        </main>
    );
}

export default PlantPage;