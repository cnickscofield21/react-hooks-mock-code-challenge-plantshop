import {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/plants")
        .then(res => res.json())
        .then(plants => setPlants(plants));
    }, []);

    const onAddPlant = (newPlant) => {
        setPlants(plants => [...plants, newPlant]);
    };

    return (
        <div className="app">
            <Header />
            <PlantPage
                plants={plants}
                onAddPlant={onAddPlant}
            />
        </div>
    );
}

export default App;
