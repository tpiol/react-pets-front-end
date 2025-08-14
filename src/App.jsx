// src/App.jsx
import * as petService from "./services/petService"
import { useState, useEffect } from "react";
import PetList from "./components/PetList/PetList";

const App = () => {
  const [pets, setPets] = useState([]);

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

  return (
<>
<PetList pets={pets}/>
</>

  )
  

};

export default App;

