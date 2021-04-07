document.addEventListener('DOMContentLoaded', function(event) { 
	spreaders = [
			{name : 'journalismoDados', ments: 4355, cluster: -1},
			{name : 'gijn', ments: 585, cluster:  0 },
			{name : 'WarningGraphicC', ments: 265, cluster: 1},
			{name : 'VisualOfData', ments: 81, cluster:  -1},
			{name : 'ujigis', ments: 71, cluster: -1},
			{name : 'datajournalism', ments: 66, cluster: 3}
		]
	
	publishers = [
		{name : 'EscolaDeDados', ments: 552, cluster: 0},
		{name : 'datajournalism', ments: 361, cluster: 3},
		{name : 'gijn', ments: 312, cluster: 0},
		{name : 'AJLabs', ments: 281, cluster: 2},
		{name : 'folha', ments: 268, cluster: 0},
		{name : 'AJEnglish', ments: 241, cluster: 1},
		{name : 'abraji', ments: 238, cluster: 0},
		{name : 'IJNetPortugues', ments: 197, cluster: 2},
		{name : 'juditecypreste', ments: 195, cluster: 0},
		{name : 'sigmaawards', ments: 177, cluster: 2}
	]
	
	bar(spreaders, '#viz_4')
	bar(publishers, '#viz_5')
})

function bar(data, id) {
	let margin = 45
	let svg_3 = d3.select(id)

	svg_3.attr('viewBox', [-margin*1.5, 0, width+margin, $(`${id}`).height()+(margin/2)])	
	
	let barHeight = 25
	let height = Math.ceil((data.length + 0.1) * barHeight) + (margin*2)

	x = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.ments)])
		.range([margin, width - margin])

	let y = d3.scaleBand()
		.domain(d3.range(data.length))
		.rangeRound([0, height - margin])
		.padding(0.1)

	format = x.tickFormat(20, data.format)

	yAxis = g => g
		.attr('transform', `translate(${margin},0)`)
		.call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0))
	xAxis = g => g
		.attr('transform', `translate(0, 0)`)
		.call(d3.axisTop(x).ticks(width / 40, data.format))
		.call(g => g.select('.domain').remove())

	svg_3.append('g')
		.selectAll('rect')
		.data(data)
		.join('rect')
			.attr('x', x(0))
			.attr('y', (d, i) => y(i))
			.attr('class', d => {
				if (d.cluster >=0) {
					return `g_${d.cluster}`
				} else {
					return 'no_g'
				}
				
			})
			.attr('width', d => x(d.ments) - x(0))
			.attr('height', y.bandwidth())
	  
	svg_3.append('g')
	.attr('fill', 'white')
	.attr('text-anchor', 'end')
	.attr('font-family', 'sans-serif')
	.attr('font-size', 12)
	.selectAll('text')
	.data(data)
	.join('text')
		.attr('x', d => x(d.ments))
		.attr('y', (d, i) => y(i) + y.bandwidth() / 2)
		.attr('dy', '0.35em')
		.attr('dx', -4)
		.text(d => format(d.ments))
		.call(text => text.filter(d => x(d.ments) - x(0) < 20) // short bars
			.attr('dx', +4)
			.attr('fill', 'black')
			.attr('text-anchor', 'start')
		)

	svg_3.append('g')
		.call(xAxis)

	svg_3.append('g')
		.call(yAxis)
}


