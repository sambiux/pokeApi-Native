import "../style.css";
import "../styleHome.css";

export default async function mostrarHome() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Cargando criptomonedas...</h2>";

    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
        );

        const coins = await response.json();
        app.innerHTML = "";

        // Contenedor
        const grid = document.createElement("div");
        grid.classList.add("home-cripto-grid");

        coins.forEach((coin) => {
            const card = document.createElement("div");
            card.classList.add("home-cripto-card");

            const color = coin.price_change_percentage_24h >= 0 ? "green" : "red";

            card.innerHTML = `
                <img src="${coin.image}" class="home-cripto-img" />

                <h3>${coin.name} <span>(${coin.symbol.toUpperCase()})</span></h3>

                <p class="price">$${coin.current_price.toLocaleString()}</p>

                <p class="change" style="color:${color}">
                    ${coin.price_change_percentage_24h.toFixed(2)}% en 24h
                </p>
            `;

            grid.appendChild(card);
        });

        app.appendChild(grid);

    } catch (error) {
        console.error("Error:", error);
        app.innerHTML = "<p>Error cargando criptomonedas 😢</p>";
    }
}
