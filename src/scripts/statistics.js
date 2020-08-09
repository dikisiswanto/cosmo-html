let showStatus = true;
let charts;

function switchType(type, alpha) {
	charts.update({
		chart: {
			options3d: {
				alpha: alpha
			}
		},
		series: [{
			type: type
		}]
	})
}

function showZeroValue(show = false) {
	if (show) {
		$(".nol").parent().show();
	} else {
		$(".nol").parent().hide();
	}
}

function showHideToggle() {
	$('#showData').click();
	showZeroValue(showStatus);
	showStatus = !showStatus;
	if (showStatus) $('#tampilkan').text('Tampilkan Nol');
	else $('#tampilkan').text('Sembunyikan Nol');
}

$(document).ready(function () {
	if ($('#peserta_program').length) {
		$('#peserta_program').DataTable({
			'processing': true,
			'serverSide': true,
			"pageLength": 10,
			'order': [],
			"ajax": {
				"url": bantuanUrl,
				"type": "POST",
				"data": {
					stat: $('#stat').val()
				}
			},
			//Set column definition initialisation properties.
			"columnDefs": [{
				"targets": [0, 3], //first column / numbering column
				"orderable": false, //set not orderable
			}, ],
			'language': {
				'url': BASE_URL + '/assets/bootstrap/js/dataTables.indonesian.lang'
			},
			'drawCallback': function () {
				$('.dataTables_paginate > .pagination').addClass('pagination-sm no-margin');
			}
		});
	}

	if ($('#statistics__graph').length) {
		showZeroValue(false);
		const categories = [];
		const data = [];
		for (const stat of dataStats) {
			if (stat.nama !== 'TOTAL' && stat.nama !== 'JUMLAH' && stat.nama != 'PENERIMA') {
				let filteredData = [stat.nama, parseInt(stat.jumlah)];
				categories.push(stat.nama);
				data.push(filteredData);
			}
		}

		charts = new Highcharts.Chart({
			chart: {
				renderTo: 'statistics__graph',
				options3d: {
					enabled: enable3d,
					alpha: 45,
					beta: 10
				}
			},
			title: 0,
			yAxis: {
				showEmpty: false,
				title: {
					text: 'Jumlah Populasi'
				}
			},
			xAxis: {
				categories: categories,
			},
			plotOptions: {
				series: {
					colorByPoint: true
				},
				column: {
					pointPadding: -0.1,
					borderWidth: 0,
					showInLegend: false,
					depth: 50,
					viewDistance: 25
				},
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					showInLegend: false,
					depth: 30,
					innerSize: 30,
				}
			},
			legend: {
				enabled: true
			},
			series: [{
				type: 'pie',
				name: 'Jumlah Populasi',
				shadow: 1,
				border: 1,
				data: data
			}]
		});

		$('#showData').click(function () {
			$('tr.lebih').show();
			$('#showData').hide();
			showZeroValue(false);
		});

		$('.button__switch').click(function () {
			let chartType = $(this).data('type');
			let alpha = chartType == 'pie' ? 45 : 20;
			$(this).addClass('button__switch--active');
			$(this).siblings('.button__switch').removeClass('button__switch--active');
			switchType(chartType, alpha);
		})
	}
})