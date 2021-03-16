const height = $('#viz_2').height()

document.addEventListener('DOMContentLoaded', function(event) { 
	d3.csv('CSV/mentioned.csv')
		.then(function(data) {
			hist(data, '#viz_2', colorin)
		})
	d3.csv('CSV/mentioning.csv')
		.then(function(data) {
			hist(data, '#viz_3', colorout)
		})
})

function hist(data, id, col) {
	
	let margin = 35

	// X axis: scale and draw:
	var x = d3.scaleLinear()
		.domain([0, d3.max(data, function(d) { return +d.ments })])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
		.range([0, width])

	let svg_2 = d3.select(id)
	//svg_2.attr('viewBox', [20, -margin.top, width + margin.right, height + margin.bottom])
	svg_2.attr('viewBox', [-margin, -margin, width+margin, height+(margin/2)])

	svg_2.append('g')
		.attr('transform', 'translate(0,' + height + ')')
		.call(d3.axisBottom(x))

	// set the parameters for the histogram
	var histogram = d3.histogram()
		.value(function(d) { return d.ments })   // I need to give the vector of value
		.domain(x.domain())  // then the domain of the graphic
		.thresholds(x.ticks(100)) // then the numbers of bins

	// And apply this function to data to get the bins
	var bins = histogram(data)

	// Y axis: scale and draw:
	var y = d3.scaleSqrt()
		.range([height, 0])
		.domain([0, d3.max(bins, function(d) { return d.length })])   // d3.hist has to be called before the Y axis obviously

	svg_2.append('g')
		.call(d3.axisLeft(y))

	// append the bar rectangles to the svg element
	svg_2.selectAll('rect')
		.data(bins)
		.enter()
		.append('rect')
			.attr('x', 1)
			.attr('transform', function(d) { return 'translate(' + x(d.x0) + ',' + y(d.length) + ')' })
			.attr("width", function(d) { return x(d.x1) - x(d.x0) -1 })
			.attr('height', function(d) { return height - y(d.length) })
			.style('fill', col)

}


