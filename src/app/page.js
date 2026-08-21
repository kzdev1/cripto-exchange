
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-text-primary bg-panel">  
      <h1 className="text-3xl font-bold">Acompanhe o mercado cripto em tempo real </h1>
      <p className="text-lg">Preços, variações e comparações das principais criptomoedas, tudo em um só lugar.</p>
      <input type="text" placeholder=" Buscar criptomoeda..." className=" bg-panel2 border border-border-custom placeholder:text-text-secondary w-90 rounded-lg" ></input>
    </div>
  );
}

