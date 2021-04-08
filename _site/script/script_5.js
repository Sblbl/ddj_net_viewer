document.addEventListener('DOMContentLoaded', function(event) { 
	with_rt = [
			// {name : 'jornalismoDados', tweets : 6773, cluster : -1},
			{name : 'pinardag', tweets : 373, cluster : 1},
			{name : 'gijn', tweets : 284, cluster : 0},
			{name : 'datajournalism', tweets : 106, cluster : 3},
			{name : 'paulbradshaw', tweets : 88, cluster : 4},
			{name : 'WarningGraphicC', tweets : 67, cluster : 1},
			{name : 'journtoolbox', tweets : 66, cluster : 0},
			{name : 'ejcnet', tweets : 65, cluster : 2},
			{name : 'gijnAfrica', tweets : 62, cluster : 1},
			{name : 'AlbertoCairo', tweets : 51, cluster : 3},
			{name : 'sigmaawards', tweets : 48, cluster : 2}
		]
	
	no_rt = [
		{name : 'gijn', tweets : 262, cluster : 0},
		{name : 'pinardag', tweets : 181, cluster : 1},
		{name : 'datajournalism', tweets : 70, cluster : 3},
		{name : 'WarningGraphicC', tweets : 60, cluster : 1},
		{name : 'gijnAfrica', tweets : 55, cluster : 1},
		{name : 'paulbradshaw', tweets : 50, cluster : 4},
		{name : 'journtoolbox', tweets : 34, cluster : 0},
		{name : 'BigLocalNews', tweets : 34, cluster : 1},
		{name : 'IJNet', tweets : 27, cluster : 2},
		{name : 'alexhomer', tweets : 25, cluster : 4}
	]
	
	bar_active(with_rt, '#viz_8')
	bar_active(no_rt, '#viz_9')

	$(window).resize( function(){
		$('#viz_8').empty()
		$('#viz_9').empty()
		bar_active(with_rt, '#viz_8')
		bar_active(no_rt, '#viz_9')
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


