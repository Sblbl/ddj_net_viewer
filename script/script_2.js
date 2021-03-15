const svg = d3.select('#viz_2')
const colorin = '#00f',
		colorout = '#f00',
		colornone = '#ccc',
		width = $(document).width(),
		radius = width / 2

document.addEventListener('DOMContentLoaded', function(event) { 
	for (let i = 0; i < 10; i++) {
		$('#group_legend').append(`<p class=g_${i}>${i}</p>`)
	}
	svg.attr('viewBox', [-width/2 - 80, -width/2 - 120, width + 80, width + 240])
	plot('JSON/net.json') 
})

function plot(file) {
	fetch(file)
		.then(response => response.json())
		.then(json => bilevel_edge(json))
}


