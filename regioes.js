document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o mapa
    const map = L.map('map').setView([-5.0892, -42.8019], 12); // Coordenadas de Teresina

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Dados fictícios de regiões monitoradas em Teresina
    const regions = [
        { name: "Rio Poti", lat: -5.0892, lon: -42.8019, quality: "Boa" },
        { name: "Rio Parnaíba", lat: -5.0858, lon: -42.8235, quality: "Moderada" },
        { name: "Lagoa do Norte", lat: -5.0478, lon: -42.8235, quality: "Ruim" },
        { name: "Parque Potycabana", lat: -5.0781, lon: -42.8019, quality: "Boa" }
    ];

    const regionList = document.getElementById('regions');

    regions.forEach(region => {
        // Adicionar marcador ao mapa
        const marker = L.marker([region.lat, region.lon]).addTo(map);
        marker.bindPopup(`<b>${region.name}</b><br>Qualidade: ${region.quality}`);

        // Adicionar à lista de regiões
        const listItem = document.createElement('li');
        listItem.textContent = `${region.name} - Qualidade: ${region.quality}`;
        regionList.appendChild(listItem);
    });
});