import { useState, useEffect } from "react";
import axios from "axios";

const usePets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [petCounts, setPetCounts] = useState({
    cats: 0,
    dogs: 0,
    birds: 0,
  });

  //Pets fetch from db.

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pets");
        setPets(response.data);
        setLoading(false);

        //Pets count.
        const counts = response.data.reduce(
          (acc, pet) => {
            if (pet.kind === "Cat") acc.cats += 1;
            if (pet.kind === "Dog") acc.dogs += 1;
            if (pet.kind === "Bird") acc.birds += 1;
            return acc;
          },
          { cats: 0, dogs: 0, birds: 0 }
        );
        setPetCounts(counts);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  return { pets, loading, error, petCounts, setPets, setPetCounts };
};

export default usePets;
