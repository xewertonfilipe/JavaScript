const price = [
    "Credit",
    "R$ 200",
    "R$ 400",
    "Buy",
    "R$ 300",
    "R$ 400",
    "Datas"
  ];
  
  // Retorna um array novo, que contem os items em
  // que o retorno da função for verdadeiro
  const priceFilter = price.filter(preco => preco.includes("R$"));
  
  // Retorna um novo array, modificada com o
  // retorno de cada item da função, trocando o "R$" por string vazia
  const priceNumber = priceFilter.map(preco =>
    Number(preco.replace("R$ ", ""))
  );
  
  // Retorna um valor um único, o valor retornado
  // fica disponível na próxima iteração através do
  // primeiro argumento, por isso o nome acumulador
  const total = priceNumber.reduce((acc, item) => acc + item);
  
  console.log(total);