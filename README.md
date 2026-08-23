CryptoCompare

Dashboard de criptomoedas em tempo real, construído com Next.js (App Router) e Tailwind CSS v4. Visual inspirado em terminais de mesa de operações: fundo escuro, tipografia monoespaçada para números e uma faixa de cotações deslizante no topo.

🚧 Versão Beta — projeto em desenvolvimento ativo, feito como parte do meu aprendizado em desenvolvimento web.

Funcionalidades
Navbar fixa com navegação entre páginas (Dashboard, Compare, Analysis, News)
Ticker de cotações: faixa animada no topo com preços de moedas sorteadas entre as 20 maiores do mercado, atualizando a cada carregamento
Cards em destaque: as 6 maiores criptomoedas por valor de mercado, exibidas na Home com preço, variação em 24h, market cap e volume
Página de comparação (/compare): comparação lado a lado de Bitcoin e Ethereum
Busca (visual, ainda não conectada à API)
Tecnologias
Next.js (App Router)
Tailwind CSS v4
CoinGecko API para dados de mercado
Fontes: Inter (texto) e IBM Plex Mono (números)
Estrutura do projeto
src/
  app/
    layout.js        # Moldura geral: fontes, Navbar e Ticker
    page.js           # Home (hero + cards em destaque)
    compare/
      page.js         # Página de comparação de moedas
    globals.css        # Tokens de cor e configuração do Tailwind
  components/
    Navbar.jsx         # Barra de navegação
    Ticker.jsx          # Faixa de cotações animada
    Cards.jsx           # Cards de moedas em destaque
Rodando localmente
bash
npm install
npm run dev

Acesse http://localhost:3000.

Próximos passos
 Conectar a busca a uma moeda específica
 Página de detalhe por moeda, com gráfico de preço
 Tornar o /compare dinâmico (escolha de moedas via dropdown)
 Cache de requisições para evitar limite de taxa da API
 Página de ranking completo
Autor

Projeto pessoal de aprendizado, desenvolvido por Kauã.