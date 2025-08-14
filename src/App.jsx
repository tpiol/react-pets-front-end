// src/App.jsx
import * as petService from "./services/petService"
import { useState, useEffect } from "react";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";

const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petService.index();

        if (fetchPets.err) {
          throw new Error(fetchPets.err)
        }
        setPets(fetchedPets);
      } catch (err) {
        console.log(err)
      }

    };

    fetchPets();
  }, []);

const handleSelect = (pet) => {
  setSelected(pet);
}

  return (
<>
<PetList pets={pets} handleSelect={handleSelect}/>
<PetDetail selected={selected} />
</>

  )
  

};

export default App;

