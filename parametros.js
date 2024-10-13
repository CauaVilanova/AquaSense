document.addEventListener('DOMContentLoaded', function() {
    const parameters = [
        { name: "pH", description: "Mede a acidez ou alcalinidade da água. Ideal entre 6.5 e 8.5." },
        { name: "Turbidez", description: "Mede a clareza da água. Quanto menor, melhor a qualidade." },
        { name: "Oxigênio Dissolvido", description: "Essencial para a vida aquática. Níveis altos indicam boa qualidade." },
        { name: "Coliformes", description: "Indicadores de contaminação fecal. Devem ser mínimos ou ausentes." },
        { name: "Temperatura", description: "Afeta processos químicos e biológicos. Variações bruscas são prejudiciais." }
    ];

    const parametersList = document.getElementById('parameters-list');

    parameters.forEach(param => {
        const paramDiv = document.createElement('div');
        paramDiv.classList.add('parameter-item');
        paramDiv.innerHTML = `
            <h3>${param.name}</h3>
            <p>${param.description}</p>
        `;
        parametersList.appendChild(paramDiv);
    });
});