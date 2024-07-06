
if (document.getElementById("myChart8") != null){
    const ctx8 = document.getElementById('myChart8');
    new Chart(ctx8, {
        type: 'pie',
        data: {
            labels: ['Доход сайта','Доходы группы','Расходы сайта','Расходы группы',],
            datasets: [{
                label: '',
                data: [1000, 700, 500, 100],
                backgroundColor: [
                        '#377ED8',
                        '#FB501A',
                        '#FB951A',
                        '#AFCD39',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    }); 
}
if (document.getElementById("myChart7") != null){
    const ctx7 = document.getElementById('myChart7');
    new Chart(ctx7, {
        type: 'pie',
        data: {
            labels: ['Транспорт', 'Одежда и обувь', 'Спорт и отдых', 'Рынки', 'Коммунальные услуги', 'Аренда в месяц', 'Рестораны'],
            datasets: [{
                label: '',
                data: [10, 5, 6, 23, 9.4, 35, 13],
                backgroundColor: [
                        '#377ED8',
                        '#FB501A',
                        '#FB951A',
                        '#AFCD39',
                        '#455B81',
                        '#0099C6',
                        '#DD4477',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart6") != null){
    const ctx6 = document.getElementById('myChart6');
    new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: ['Транспорт', 'Одежда и обувь', 'Спорт и отдых', 'Рынки', 'Коммунальные услуги', 'Аренда в месяц', 'Рестораны'],
            datasets: [{
                label: '',
                data: [10, 5, 6, 23, 9.4, 35, 13],
                backgroundColor: [
                        '#377ED8',
                        '#FB501A',
                        '#FB951A',
                        '#AFCD39',
                        '#455B81',
                        '#0099C6',
                        '#DD4477',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart5") != null){
    const ctx5 = document.getElementById('myChart5');
    new Chart(ctx5, {
        type: 'pie',
        data: {
            labels: ['Транспорт', 'Одежда и обувь', 'Спорт и отдых', 'Рынки', 'Коммунальные услуги', 'Аренда в месяц', 'Рестораны'],
            datasets: [{
                label: '',
                data: [10, 5, 6, 23, 9.4, 35, 13],
                backgroundColor: [
                        '#377ED8',
                        '#FB501A',
                        '#FB951A',
                        '#AFCD39',
                        '#455B81',
                        '#0099C6',
                        '#DD4477',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart4") != null){
    const ctx4 = document.getElementById('myChart4');
    new Chart(ctx4, {
        type: 'pie',
        data: {
            labels: ['В поисках', 'В команде'],
            datasets: [{
                label: '',
                data: [80, 20],
                backgroundColor: [
                        '#377ED8',
                        '#FB951A',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart3") != null){
    const ctx3 = document.getElementById('myChart3');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Женщины 20-48 лет', 'Мужчины 20-48 лет'],
            datasets: [{
                label: '',
                data: [59, 41],
                backgroundColor: [
                        '#377ED8',
                        '#FB951A',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart2") != null){
    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Женщины:', 'Мужчины:'],
            datasets: [{
                label: '',
                data: [75, 25],
                backgroundColor: [
                    '#377ED8',
                    '#FB951A',
                ],
                borderWidth: 1
          }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart") != null){
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Средний оборот в месяц', 'Динамические расходы', 'Статические расходы', 'Ежемесячные расходы на недвижимость', 'Расходы на нематериальные активы', 'Ежемесячные непредвиденные расходы'],
            datasets: [{
                label: '',
                data: [30640, 50000, 50000, 7000, 7000, 6600],
                backgroundColor: [
                    '#AFCD39',
                    '#FB951A',
                    '#377ED8', // Желтый
                    '#455B81', // Зеленый
                    '#B62D2D', // Фиолетовый
                    '#FB501A' // Оранжевый
                ],
                borderWidth: 1
          }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}
if (document.getElementById("myChart9") != null){
    const ctx9 = document.getElementById('myChart9');
    new Chart(ctx9, {
        type: 'pie',
        data: {
            labels: ['Facebook','Google','Yandex'],
            datasets: [{
                label: '',
                data: [1000, 700, 500],
                backgroundColor: [
                        '#377ED8',
                        '#FB501A',
                        '#FB951A',
                    ],
                borderWidth: 1
                }]
        },
        options: {
            plugins: {
                datalabels: {
                    formatter: function (value, context) {
                        return context.chart.data.labels[context.dataIndex];
                    }
                },
                legend: {
                    display: false
                }
            }
        }
    });
}








