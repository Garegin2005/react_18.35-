import "./App.css";


function App() {
  const handleSubmit= (e) => {
    e.preventDefault();

    console.log("Name:", e.target.name.value);
    console.log("Surname:", e.target.surname.value);
    console.log("Email:", e.target.email.value);
    console.log("File:", e.target.file.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
      />

      <input
        type="text"
        name="surname"
        placeholder="Surname"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        type="file"
        name="file"
      />

      <button type="submit">Click</button> 
    </form>
  );
}

export default App;
      

 

