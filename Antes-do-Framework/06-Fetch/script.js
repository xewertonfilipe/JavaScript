fetch("https://ranekapi.origamid.dev/wp-json/api/produto")
  .then(response => response.json())
  .then(json => {
    console.log(json);
  });

const data = {
  id: "xewerton",
  nome: "Ewerton",
  email: "xewertonfilipe@origamid.com",
  senha: "123456",
  cep: "123456",
  rua: "Ali Perto",
  numero: "230",
  bairro: "Bairro",
  cidade: "Cidade",
  estado: "Estado"
};

fetch("https://ranekapi.origamid.dev/wp-json/api/usuario", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json"
  },
  redirect: "follow",
  referrer: "no-referrer",
  body: JSON.stringify(data)
});