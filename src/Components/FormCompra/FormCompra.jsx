import React from 'react'
import { useState } from 'react';

function InputForm(props) {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label style={{ width: "100px", marginRight: 4 }}>{props.label}</label>
      <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export default function FormCompra() {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: ""
  });

  console.log(userData);

  function onInputChange(evt) {
    let value = evt.target.value;
    let inputName = evt.target.name;

    let newState = { ...userData };
    newState[inputName] = value;
    setUserData(newState);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log(`Gracias por tu compra!`);
  }

  function formIsInvalid() {
    return !(
      userData.name !== "" &&
      userData.phone !== "" &&
      userData.email !== ""
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Llena tus datos para finalizar la compra 🛍</h1>

      <InputForm
        value={userData.name}
        name="name"
        onChange={onInputChange}
        label="Nombre"
        userData={userData}
      />
      <InputForm
        value={userData.phone}
        name="phone"
        onChange={onInputChange}
        label="phone"
        userData={userData}
      />
      <InputForm
        value={userData.email}
        name="email"
        onChange={onInputChange}
        label="email"
        userData={userData}
      />

      <button disabled={formIsInvalid()} type="submit">
        Crear orden
      </button>
      <button onClick={() => setUserData({ name: "", email: "", phone: "" })}>
        Limpiar
      </button>
    </form>
  );
}