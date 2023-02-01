import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiExample() {
  const [animal, setAnimal] = useState("");

  useEffect(() => {
    const GetAnimalImage = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(result.data.message);
      setAnimal(result.data.message);
    };
    void GetAnimalImage();
  }, []);

  return (
    <>
      <img src={animal} />
    </>
  );
}
