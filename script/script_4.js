document.addEventListener('DOMContentLoaded', function(event) { 
	with_rt = [
			// {name : 'jornalismoDados', tweets : 6773, cluster : -1},
			{name : 'pinardag', tweets : 373, cluster : 1},
			{name : 'gijn', tweets : 284, cluster : 0},
			{name : 'gijnRu', tweets : 254, cluster : -1},
			{name : 'DagmedyaVeri', tweets : 203, cluster : -1},
			{name : 'margymaclibrary', tweets : 188, cluster : -1},
			{name : 'ClarakDoe', tweets : 107, cluster : -1},
			{name : 'datajournalism', tweets : 106, cluster : 3},
			{name : 'Arastiriyorum', tweets : 100, cluster : -1},
			{name : 'paulbradshaw', tweets : 88, cluster : 4},
			{name : 'bbbcccnnn', tweets : 80, cluster : -1}
		]
	
	no_rt = [
		{name : 'gijn', tweets : 262, cluster : 0},
		{name : 'gijnRu', tweets : 253, cluster : -1},
		{name : 'pinardag', tweets : 181, cluster : 1},
		{name : 'DagmedyaVeri', tweets : 78, cluster : -1},
		{name : 'datajournalism', tweets : 70, cluster : 3},
		{name : 'DatasAfrica', tweets : 63, cluster : -1},
		{name : 'umarhassan96', tweets : 62, cluster : -1},
		{name : 'WarningGraphicC', tweets : 60, cluster : 1},
		{name : 'VisualOfData', tweets : 58, cluster : -1},
		{name : 'gijnAfrica', tweets : 55, cluster : 1}
	]
	
	bar_active(with_rt, '#viz_6')
	bar_active(no_rt, '#viz_7')

	$(window).resize( function(){
		$('#viz_6').empty()
		$('#viz_7').empty()
		bar_active(with_rt, '#viz_6')
		bar_active(no_rt, '#viz_7')
	})
})

function bar_active(data, id) {
	let margin = 45
	let svg_3 = d3.select(id)
	let h = $(`${id}`).height()

	svg_3.attr('viewBox', [-margin*1.5, -margin, width+margin, $(`${id}`).height()+(margin*2)])	
	
	// let barHeight = 25
	// let height = Math.ceil((data.length + 0.1) * barHeight) + (margin*2)
	let barHeight = Math.ceil(h/(data.length))
	let height = Math.ceil((data.length + 0.1) * barHeight) + (margin*2)

	x = d3.scaleLinear()
		.domain([0, d3.max(data, d => d.tweets)])
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
			.attr('width', d => x(d.tweets) - x(0))
			.attr('height', y.bandwidth())
	  
	svg_3.append('g')
	.attr('fill', 'white')
	.attr('text-anchor', 'end')
	.attr('font-family', 'sans-serif')
	.attr('font-size', 12)
	.selectAll('text')
	.data(data)
	.join('text')
		.attr('x', d => x(d.tweets))
		.attr('y', (d, i) => y(i) + y.bandwidth() / 2)
		.attr('dy', '0.35em')
		.attr('dx', -4)
		.text(d => format(d.tweets))
		.call(text => text.filter(d => x(d.tweets) - x(0) < 20) // short bars
			.attr('dx', +4)
			.attr('fill', 'black')
			.attr('text-anchor', 'start')
		)

	svg_3.append('g')
		.call(xAxis)

	svg_3.append('g')
		.call(yAxis)
}


