$('.cluster_pic_small .node text').mouseover(e => {
	overed(e)
})

$('.cluster_pic .node text').mouseover(e => {
	overed(e)
})

$('.cluster_pic_small .node text').mouseleave(e => {
	outed(e)
})

$('.cluster_pic .node text').mouseleave(e => {
	outed(e)
})

function overed(event) {
	tar = event.target
	$('.node').addClass('focused', true)
	$(tar).addClass('selected', true)

	let c = tar.getAttribute('group')
	$('#legend').toggleClass('hidden')
	$('#username').html(tar.innerHTML)
	$('#cluster_info').attr('class', 'legend_info g_' + c)
	$('#cluster').text('cluster ' + tar.getAttribute('group'))
	$('#in_ment').text(tar.getAttribute('ment_in'))
	$('#out_ment').text(tar.getAttribute('ment_out'))
}

function outed(event) {
	$('#legend').toggleClass('hidden')

	$('.focused').removeClass('focused')
	$('.selected').removeClass('selected')
	$('.colorin').removeClass('colorin')
	$('.colorout').removeClass('colorout')
}