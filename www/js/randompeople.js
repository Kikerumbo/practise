"use strict";

// Función asíncrona que cargue los datos de la api
// de randomusser.
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

// Función que recoja los datos y genere un ul de personas
function buildUserList(userListData) {
  const userList = document.createElement("ul");

  for (const userData of userListData) {
    const user = buildUser(userData);
    userList.append(user);
  }

  return userList;
}

// Función que genere un li de persona
function buildUser(userData) {
  const userLi = document.createElement("li");

  //Meter cosas en el li

  return userLi;
}

// URL para la API
const API_URL = "https://randomuser.me/api/?results=10";

// Elemento donde va la lista
const root = document.querySelector("#root");

getData(API_URL)
  .then(data => {
    const userList = buildUserList(data.results);
    root.append(userList);
  })
  .catch(error => console.error(error));
