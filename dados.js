document.addEventListener('DOMContentLoaded', function() {
    const waterData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'pH',
            data: [7.2, 7.1, 7.3, 7.0, 7.4, 7.2],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'Turbidez (NTU)',
            data: [2.1, 2.3, 2.0, 2.5, 2.2, 2.4],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    };

    const ctx = document.getElementById('waterQualityChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: waterData,
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Qualidade da Água em Teresina ao Longo do Tempo'
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const tableData = [
        { date: '2023-01-15', ph: 7.2, turbidity: 2.1, oxygen: 8.5, coliforms: 10 },
        { date: '2023-02-15', ph: 7.1, turbidity: 2.3, oxygen: 8.3, coliforms: 15 },
        { date: '2023-03-15', ph: 7.3, turbidity: 2.0, oxygen: 8.7, coliforms: 8 },
        { date: '2023-04-15', ph: 7.0, turbidity: 2.5, oxygen: 8.2, coliforms: 12 },
        { date: '2023-05-15', ph: 7.4, turbidity: 2.2, oxygen: 8.6, coliforms: 9 },
        { date: '2023-06-15', ph: 7.2, turbidity: 2.4, oxygen: 8.4, coliforms: 11 }
    ];

    const dataTable = document.getElementById('data-table');
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>Data</th>
            <th>pH</th>
            <th>Turbidez (NTU)</th>
            <th>Oxigênio Dissolvido (mg/L)</th>
            <th>Coliformes (UFC/100mL)</th>
        </tr>
    `;

    tableData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.date}</td>
            <td>${row.ph}</td>
            <td>${row.turbidity}</td>
            <td>${row.oxygen}</td>
            <td>${row.coliforms}</td>
        `;
        table.appendChild(tr);
    });

    dataTable.appendChild(table);
});
