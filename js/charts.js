
// Line Chart for Orders

const ordersChart = document.getElementById("myAreaChart");

yValuesArea = [7000 , 30000, 25000, 22000, 8000, 45000, 43000, 40000, 18000, 27000, 4000, 4000, 7000];
let dataArea = [];
for (let i = 0; i < yValuesArea.length; i++) {
    dataArea[i] = {x: `Aug ${i+1}`, y: yValuesArea[i]};
}
new Chart(ordersChart, {
    type: 'line',
    data: {
        datasets: [{
            data: dataArea,
            fill: true,
            backgroundColor:['rgba(64, 29, 186, 0.5)'],
            borderColor: ['rgba(218, 65, 103, 1)'],
            tension: '0.2',
            pointBackgroundColor: 'rgba(218, 65, 103, 1)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false
    }
});

// Bar Chart for Visitor
const visitorChart = document.getElementById("myBarChart");

const dataVisitor1 = [{x: 'June', y: 4000}, {x: 'July', y: 4000}, {x: 'August', y: 13000}, {x: 'September', y: 4000}, {x: 'October', y: 4000}, {x: 'November', y: 4000}, {x: 'December', y: 4000}];
const dataVisitor2 = [{x: 'June', y: 6000}, {x: 'July', y: 6000}, {x: 'August', y: 15000}, {x: 'September', y: 6000}, {x: 'October', y: 8000}, {x: 'November', y: 2000}, {x: 'December', y: 11000}];

new Chart(visitorChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Men',
            data: dataVisitor1,
            borderColor: 'rgba(64, 29, 186, 1)',
            backgroundColor: 'rgba(64, 29, 186, 1)'
        }, {
            label: 'Women',
            data: dataVisitor2,
            borderColor: 'rgba(218, 65, 103, 1)',
            backgroundColor: 'rgba(218, 65, 103, 1)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                display: true
            }
        },
        maintainAspectRatio: false
    },
});
// Liner Chart for Cities
const citiesChart = document.getElementById("myPieChart");

const dataPie = [30,20,40,10];
const labels = ['Riyadh', 'Jeddah', 'Sharqiah', 'Mecca']

new Chart(citiesChart, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: dataPie,
            backgroundColor: [
                'rgba(218, 65, 103, 0.5)',
                'rgba(64, 29, 186, 0.5)',
                'rgba(218, 65, 103, 1)',
                'rgba(64, 29, 186, 1)'
                
            ],
            hoverOffset: 4
        }]
    },
    options: {
        maintainAspectRatio: false
    }
})

// Liner Chart for Rat
const ratChart = document.getElementById("myLinearChart");

const dataRat = [{x: 'January', y: 1.5}, {x: 'Fabruary', y: 2.5}, {x: 'March', y: 3}, {x: 'April', y: 5}, {x: 'May', y: 4}, {x: 'June', y: 5}];

new Chart(ratChart, {
    type: 'line',
    data: {
        datasets: [{
            data: dataRat,
            fill: true,
            backgroundColor:'rgba(64, 29, 186, 0.1)',
            borderColor: 'rgba(218, 65, 103, 1)',
            tension: '0.2',
            pointBackgroundColor: 'rgba(218, 65, 103, 1)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false
    },
});