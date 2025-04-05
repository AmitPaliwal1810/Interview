import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddPerson = useCallback(async () => {
    setIsLoading(true);
    const randomNumber = Math.floor(Math.random() * 50 + 1);
    try {
      const reponse = await fetch(
        `https://swapi.dev/api/people/${randomNumber}`
      );
      const data = await reponse.json();
      console.log({ data });
      setPerson((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  // here for deleting in just remove the element from the array. as i informed to simran for this.
  const handleDelete = useCallback(
    (idx) => {
      setPerson(prev => prev.filter((_, index)=> index !== idx));
    },
    []
  );

  return (
    <>
      <h1>Assignment</h1>
      <button
        onClick={handleAddPerson}
        style={{
          marginBottom: "8px",
        }}
        disabled={isLoading}
      >
        Add Person
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {person.map((value, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid white",
                padding: "8px",
              }}
            >
              <div>{value.name}</div>
              <button onClick={() => handleDelete(index)}>DELETE</button>
            </div>
          );
        })}
        {isLoading && '... is Loading'}
      </div>
    </>
  );
}

export default App;
