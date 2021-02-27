let mon = ['January', 'February', 'March',
			'April', 'May', 'June',
			'July', 'August', 'September',
			'October', 'November', 'December'
		]

document.addEventListener('DOMContentLoaded', function(event) { 
	let file = 'JSON/2013_1.json'
	let $_datalist = $('#steps')
	let props = {'rt' : true, 'ment' : true}
	plot(file)

	for(let i = 0, j = 85; i < j; i++) {
		$_datalist.append(`<option>${i}</option>`) 
	}

	$('#slider').change(function(){
		let val=$(this).val()
		file = get_file(val)
		plot(file)
  	})

  	$('#toggle_rt').on('change', (e) => {
		props['rt'] = $(e.target).is(':checked')
		update_css(props)
	})
	$('#toggle_ment').on('change', (e) => {
		props['ment'] = $(e.target).is(':checked')
		update_css(props)
	})
	
})

function update_css(props) {
	if (props['rt'] == true) {
		$('.retweet').css('visibility', 'visible')
	} else {
		$('.retweet').css('visibility', 'hidden')
	}
	if (props['ment'] == true) {
		$('.mention').css('visibility', 'visible')
	} else {
		$('.mention').css('visibility', 'hidden')
	}
	
}


function get_file(n){
	m = n%12 + 1
	y = 2012+Math.floor(n/12)+1
	$('#date').text(mon[m-1] + ' ' + y)
	console.log('JSON/' + y + '_' + m + '.json')
	return ('JSON/' + y + '_' + m + '.json')

}

function plot(file) {
	fetch(file)
		.then(response => response.json())
		.then(json => plot_graph(json))
}

function plot_graph(data, options={'rt' : true, 'ment' : true}) {
	const width = window.innerWidth,
		height = window.innerHeight - 80- 64 - 48,
		nodes = data.nodes.map(d => Object.create(d)),
		links = data.links.map(d => Object.create(d))

	const simulation = d3.forceSimulation(nodes)
		.force('link', d3.forceLink(links).id(d => d.name).distance(1).strength(.4))
		.force('charge', d3.forceManyBody())
		.force('center', d3.forceCenter(width / 2, height / 2))


	const svg = d3.select('svg')

	const base_group = svg.append('g').attr('id', 'net_container')

	const zoom = d3.zoom()
		.scaleExtent([0.1, 3])
		.translateExtent([[-1000, -1000], [width + 1000, height + 1000]])
		.on('zoom', e => base_group.attr('transform', e.transform))

	svg.call(zoom)

	drag = simulation => {

		function dragstarted(event) {
			if (!event.active) simulation.alphaTarget(0.01).restart()
			event.subject.fx = event.subject.x
			event.subject.fy = event.subject.y
		}

		function dragged(event) {
			event.subject.fx = event.x
			event.subject.fy = event.y
		}

		function dragended(event) {
			if (!event.active) simulation.alphaTarget(0)
			event.subject.fx = null
			event.subject.fy = null
		}

		return d3.drag()
			.on('start', dragstarted)
			.on('drag', dragged)
			.on('end', dragended)
	}

	let link = base_group
		.append('g')
		.selectAll('line')
		.data(links)
		.enter()
		.append('line')
		.attr('class', d=>{
			if (d.type == 'mention'){
				return 'links mention'
			} else {
				return 'links retweet'
			} 
		})
		.attr('stroke-width', d => {
			return d.weight * 0.9
		})

	let node = base_group.append('g')
		.attr('class', 'nodes')
		.selectAll('g')
		.data(nodes)
		.enter()
		.append('a')
		.append('g')

	let circles = node.append('circle')
		.attr('class', 'net_node')
		.attr('rt', d => {
			return d.retweets
		})
		.attr('mentions', d => {
			return d.mentions
		})
		.attr('class', d => {
			return d.class
		})
		.attr('fill', '#00BFFF')
		.attr('opacity', '.8')
		.attr('r', d => {
			return (Math.log10(d.mentions + d.retweets + 1)*5)
		})
		.call(drag(simulation))
		.on('mouseover.fade', fade(0.1))
		.on('mouseout.fade', fade(1))

	let lables = node
		.append('text')
		.attr('class', 'net_text')
		.attr('x', 10)
		.attr('y', -8)
		.text(d => {
			if (d.retweets + d.mentions > 5) {
				return (d.name)
			}
		})


	node.append('title')
	  	.text(d => { return d.name })



	simulation
		.nodes(nodes)
		.on('tick', ticked)

	simulation.force('link')
		.links(links)

	function ticked() {
		link
			.attr('x1', d => { return d.source.x })
			.attr('y1', d => { return d.source.y })
			.attr('x2', d => { return d.target.x })
			.attr('y2', d => { return d.target.y })

		node
			.attr('transform', d => {
				return 'translate(' + d.x + ',' + d.y + ')'
			})
	}

	const linkedByIndex = {};
		links.forEach(d => {
		linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
	});

	function isConnected(a, b) {
		//console.log(a.index, b.index)
		return linkedByIndex[`${a.index},${b.index}`] || linkedByIndex[`${b.index},${a.index}`] || a.index == b.index;
	}

	function fade(opacity) {
		return (d, i) => {
			node.style('stroke-opacity', function (o) {
				const thisOpacity = isConnected(i, o) ? 1 : opacity;
				this.setAttribute('fill-opacity', thisOpacity);
				//console.log(i, o)
				return thisOpacity;
			});
		  
			link.style('stroke-opacity', o => (o.source === i || o.target === i ? 1 : opacity));

		};
	}
}