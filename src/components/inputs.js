import React, { Component } from "react";
import countries from "./countrises";

 function inputs() {
  const [nom, setNom] = React.useState("");
  const [Title, setTitle] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      nom: ${nom}
      Password: ${Title}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
    <h1>Create Account</h1>

    <label>
      nom
      <input
        name="nom"
        type="text"
        value={nom}
        onChange={e => setNom(e.target.value)}
        required />
    </label>
     <br/>
    <label>
      Title:
      <input
        name="title"
        type="text"
        value={Title}
        onChange={e => setTitle(e.target.value)}
          required />
      </label>
 <br/>
      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
        </label>
  <br/>
<label>
  <input
    name="acceptedTerms"
    type="checkbox"
    onChange={e => setAcceptedTerms(e.target.value)}
    required />
  I accept the terms of service        
</label>
<br/>
<button>Submit</button>
</form>
);
}

export default inputs