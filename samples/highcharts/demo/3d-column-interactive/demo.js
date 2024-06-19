// Set up the chart
const chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: [
            'Toyota', 'Volkswagen', 'Volvo', 'Tesla', 'Hyundai', 'MG',
            'Skoda', 'BMW', 'Ford', 'Nissan'
        ]
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Cars sold: {point.y}'
    },
    title: {
        text: 'Sold passenger cars in Norway by brand, May 2024',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://ofv.no/registreringsstatistikk"' +
            'target="_blank">OFV</a>',
        align: 'left'
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1795, 1242, 1074, 832, 593, 509, 471, 442, 385, 371],
        colorByPoint: true
    }]
});

function showValues() {
    document.getElementById(
        'alpha-value'
    ).innerHTML = chart.options.chart.options3d.alpha;
    document.getElementById(
        'beta-value'
    ).innerHTML = chart.options.chart.options3d.beta;
    document.getElementById(
        'depth-value'
    ).innerHTML = chart.options.chart.options3d.depth;
}

// Activate the sliders
document.querySelectorAll(
    '#sliders input'
).forEach(input => input.addEventListener('input', e => {
    chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
    showValues();
    chart.redraw(false);
}));

showValues();
