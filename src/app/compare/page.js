async function getcoins(){
    const rest = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum');
    const data = await rest.json();
    return data;
}

export default async function compare() {
    const coins = await getcoins();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Comparar Criptomoedas</h1>

      <div className="flex gap-4">
        {coins.map((coin) => (
          <div key={coin.id} className="border rounded-lg p-4 w-48">
            <h2 className="text-lg font-bold">{coin.name}</h2>
            <p>Preço: ${coin.current_price}</p>
            <p>Variação 24h: {coin.price_change_percentage_24h}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}



