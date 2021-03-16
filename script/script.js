const svg = d3.select('#viz_1')
const colorin = '#4169E1',
		colorout = '#FA8072',
		colornone = '#ccc',
		width = $(document).width(),
		radius = width / 2

const line = d3.lineRadial()
		.curve(d3.curveBundle.beta(0.85))
		.radius(d => d.y)
		.angle(d => d.x)

const tree = d3.cluster()
	.size([2 * Math.PI, radius - 100])

document.addEventListener('DOMContentLoaded', function(event) { 
	for (let i = 0; i < 10; i++) {
		$('#group_legend').append(`<p><span class="material-icons g_${i}">fiber_manual_record</span> cluster ${i}</p>`)
	}
	$('#group_legend').append(`<h5>Mentions</h5>`)
	$('#group_legend').append(`<p><span class="material-icons" style='color:${colorout}'>fiber_manual_record</span> outc. mentions</p>`)
	$('#group_legend').append(`<p><span class="material-icons" style='color:${colorin}'>fiber_manual_record</span> inc. mentions</p>`)
	svg.attr('viewBox', [-width/2 -40, -width/2 - 120, width + 80, width + 240])
	plot('JSON/net.json') 
})

function plot(file) {
	fetch(file)
		.then(response => response.json())
		.then(json => bilevel_edge(json))
}


function bilevel_edge(data) {

	data = create_data(data)

	const root = tree(bilink(d3.hierarchy(data)
		.sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.id, b.data.id))))

	const node = svg.append('g')
		.selectAll('g')
		.data(root.leaves())
		.join('g')
			.attr('class', d => {
				return 'node g_' + d.data.group
			})
			.attr('transform', d => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`)
		.append('text')
			.attr('dy', '0.31em')
			.attr('x', d => d.x < Math.PI ? 6 : -6)
			.attr('text-anchor', d => d.x < Math.PI ? 'start' : 'end')
			.attr('transform', d => d.x >= Math.PI ? 'rotate(180)' : null)
			.text(d => d.data.id)
			.attr('group', d => d.data.group)
			.attr('ment_in', d => d.incoming.length)
			.attr('ment_out', d => d.outgoing.length)
			.each(function(d) { d.text = this })
			.on('mouseover', overed)
			.on('mouseout', outed)
			/*.call(text => text.append('title').text(d => `${d.data.id} 
						${d.outgoing.length} outgoing 
					${d.incoming.length} incoming`
			))*/

	const link = svg.append('g')
		.attr('stroke', colornone)
		.attr('stroke-width', colornone)
		.attr('fill', 'none')
		.selectAll('path')
		.data(root.leaves().flatMap(leaf => leaf.outgoing))
		.join('path')
			.style('mix-blend-mode', 'multiply')
			.attr('d', ([i, o]) => line(i.path(o)))
			.each(function(d) { d.path = this })

	function overed(event, d) {
		link.style('mix-blend-mode', null)

		d3.selectAll('.node').classed('focused', true)
		d3.select(this).classed('selected', true)

		d3.selectAll(d.incoming.map(d => d.path)).classed('focused', true).classed('colorin', true).raise()
		d3.selectAll(d.incoming.map(([d]) => d.text)).classed('focused', true).classed('colorin', true)
		d3.selectAll(d.outgoing.map(d => d.path)).classed('focused', true).classed('colorout', true).raise()
		d3.selectAll(d.outgoing.map(([, d]) => d.text)).classed('focused', true).classed('colorout', true)

		let c = this.getAttribute('group')
		$('#legend').toggleClass('hidden')
		$('#username').text(this.innerHTML)
		$('#cluster_info').attr('class', 'legend_info g_' + c)
		$('#cluster').text('cluster ' + this.getAttribute('group'))
		$('#in_ment').text(this.getAttribute('ment_in'))
		$('#out_ment').text(this.getAttribute('ment_out'))
	}

	function outed(event, d) {
		link.style('mix-blend-mode', 'multiply')

		$('#legend').toggleClass('hidden')

		d3.selectAll('.focused').classed('focused', false)
		d3.selectAll('.selected').classed('selected', false)
		d3.selectAll('.colorin').classed('colorin', false)
		d3.selectAll('.colorout').classed('colorout', false)
	}
}

function bilink(root) {
	const map = new Map(root.leaves().map(d => [d.data.id, d]))

	for (const d of root.leaves()) d.incoming = [], d.outgoing = d.data.targets.map(i => [d, map.get(i)])
	for (const d of root.leaves()) for (const o of d.outgoing) o[1].incoming.push(o)
	return root
}

function create_data(graph) {
	const {nodes, links} = graph
	const groupById = new Map
	const nodeById = new Map(nodes.map(node => [node.id, node]))

	for (const node of nodes) {
		let group = groupById.get(node.group)
		if (!group) groupById.set(node.group, group = {id: node.group, children: []})
		group.children.push(node)
		node.targets = []
	}

	for (const {source: sourceId, target: targetId} of links) {
		nodeById.get(sourceId).targets.push(targetId)
	}

	return {children: [...groupById.values()]}	
}