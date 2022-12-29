import react from "react";
// import { addNewPlayer } from "./ajaxHelpers";

const NewPlayer = () => {
  const [name, setName] = "";
  const [breed, setBreed] = "";

  return (
    <div id="new-player-form">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
        }}
      >
        <label htmlFor="name">Name: </label>
        <input
          value={name}
          type="text"
          name="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label htmlFor="name">Breed : </label>
        <input
          value={breed}
          type="text"
          name="name"
          onChange={(event) => {
            setBreed(event.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPlayer;
