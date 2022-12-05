<template>
	<div class="grid p-fluid">
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>Linear Chart</h5>
				<Chart type="line" :data="lineData" :options='lineOptions'/>
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="p-as-start">Pie Chart</h5>
				<Chart type="pie" :data="pieData" style="width: 50%" :options='pieOptions'/>
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="p-as-start">Polar Area Chart</h5>
				<Chart type="polarArea" :data="polarData" style="width: 50%" :options='polarOptions'/>
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>Bar Chart</h5>
				<Chart type="bar" :data="barData" :options='barOptions'/>
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="p-as-start">Doughnut Chart</h5>
				<Chart type="doughnut" :data="pieData" style="width: 50%" :options='pieOptions'/>
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="p-as-start">Radar Chart</h5>
				<Chart type="radar" :data="radarData" style="width: 50%" :options='radarOptions'/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "summary",
	data() {
		return {
			lineData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'First Dataset',
						data: [65, 59, 80, 81, 56, 55, 40],
						fill: false,
						backgroundColor: 'rgb(255, 205, 86)',
						borderColor: 'rgb(255, 205, 86)',
						tension: .4
					},
					{
						label: 'Second Dataset',
						data: [28, 48, 40, 19, 86, 27, 90],
						fill: false,
						backgroundColor: 'rgb(75, 192, 192)',
						borderColor: 'rgb(75, 192, 192)',
						tension: .4
					}
				]
			},
            lineOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#A0A7B5'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#A0A7B5'
                        },
                        grid: {
                            color:  'rgba(160, 167, 181, .3)',
                        }
                    },
                    y: {
                        ticks: {
                            color: '#A0A7B5'
                        },
                        grid: {
                            color:  'rgba(160, 167, 181, .3)',
                        }
                    },
                }
            },
			pieData: {
				labels: ['A', 'B', 'C'],
				datasets: [
					{
						data: [540, 325, 702, 421],
						backgroundColor: [
							'rgb(54, 162, 235)',
							'rgb(255, 99, 132)',
							'rgb(255, 205, 86)',
							'rgb(75, 192, 192)'
						],
						tension: .4
					}
				]
			},
            pieOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#A0A7B5'
                        }
                    }
                }
            },
			polarData: {
				datasets: [{
					data: [
						11,
						16,
						7,
						3
					],
					backgroundColor: [
						'rgb(54, 162, 235)',
						'rgb(255, 99, 132)',
						'rgb(255, 205, 86)',
						'rgb(75, 192, 192)'
					],
					label: 'My dataset'
				}],
				labels: [
					'Blue',
					'Purple',
					'Orange',
					'Green'
				]
			},
            polarOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#A0A7B5'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(160, 167, 181, .3)'
                        }
                    }
                }
            },
			barData: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgb(255, 99, 132)',
						borderColor: 'rgb(255, 99, 132)',
						data: [65, 59, 80, 81, 56, 55, 40],
						tension: .4
					},
					{
						label: 'My Second dataset',
						backgroundColor: 'rgb(54, 162, 235)',
						borderColor: 'rgb(54, 162, 235)',
						data: [28, 48, 40, 19, 86, 27, 90],
						tension: .4
					}
				]
			},
            barOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#A0A7B5'
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#A0A7B5'
                        },
                        grid: {
                            color:  'rgba(160, 167, 181, .3)',
                        }
                    },
                    y: {
                        ticks: {
                            color: '#A0A7B5'
                        },
                        grid: {
                            color:  'rgba(160, 167, 181, .3)',
                        }
                    },
                }
            },
			radarData: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [
					{
						label: 'My First dataset',
						backgroundColor: 'rgba(54, 162, 235,0.2)',
						borderColor: 'rgba(54, 162, 235,1)',
						pointBackgroundColor: 'rgba(54, 162, 235,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(54, 162, 235,1)',
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: 'My Second dataset',
						backgroundColor: 'rgba(255, 99, 132,0.2)',
						borderColor: 'rgba(255, 99, 132,1)',
						pointBackgroundColor: 'rgba(255, 99, 132,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(255, 99, 132,1)',
						data: [28, 48, 40, 19, 96, 27, 100]
					}
				]
			},
            radarOptions: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#A0A7B5'
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(160, 167, 181, .3)'
                        }
                    }
                }
            },
		}
	}
}
</script>

<style scoped>

</style>
