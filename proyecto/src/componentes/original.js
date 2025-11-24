export default async function mostrarCripto() {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h2>Buscador de Criptomonedas</h2>
        <input type="text" id="buscador" placeholder="Buscar criptomoneda..." />
        <div id="lista-criptos" class="cripto-container">Cargando...</div>
    `;

    const lista = document.getElementById("lista-criptos");
    const buscador = document.getElementById("buscador");

    // Traer lista de monedas
    const response = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const coins = await response.json();

    // Mostrar todas inicialmente
    renderCoins(coins);

    // Filtro en tiempo real
    buscador.addEventListener("input", () => {
        const texto = buscador.value.toLowerCase();
        const filtradas = coins.filter(c =>
            c.name.toLowerCase().includes(texto) ||
            c.symbol.toLowerCase().includes(texto)
        );
        renderCoins(filtradas);
    });

    function renderCoins(data) {
        if (data.length === 0) {
            lista.innerHTML = "<p>No se encontraron criptomonedas...</p>";
            return;
        }

        lista.innerHTML = "";

        data.slice(0, 120).forEach(coin => {
            const card = document.createElement("div");
            card.classList.add("cripto-card");

            card.innerHTML = `
                <h3>${coin.name}</h3>
                <p><strong>Symbol:</strong> ${coin.symbol.toUpperCase()}</p>
                <p><strong>ID:</strong> ${coin.id}</p>
            `;

            lista.appendChild(card);
        });
    }
}
