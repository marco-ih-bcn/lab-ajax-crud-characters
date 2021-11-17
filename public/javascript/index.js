const charactersAPI = new APIHandler('http://localhost:8000');


function domUpdateAllChar(characters){
  const charContainer = document.querySelector("div.characters-container")
  charContainer.innerHTML = ""
  for (const character of characters){
    const html = `
      <div class="name">${character.name}</div>
      <div class="occupation">${character.occupation}</div>
      <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
      <div class="weapon">Character Weapon: ${character.weapon}</div>
      `
    const charCard = document.createElement("div")
    charCard.classList.add("character-info")
    charCard.innerHTML = html
    charContainer.appendChild(charCard)
  }
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    location.assign("/cahracters")
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.forms[0].elements[0].value
    const occupation = document.forms[0].elements[1].value
    const weapon = document.forms[0].elements[2].value
    const cartoon = document.forms[0].elements[3].value
    
    console.log({name, occupation, weapon, cartoon})
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    //.then(()=>location.reload())
  });
});
