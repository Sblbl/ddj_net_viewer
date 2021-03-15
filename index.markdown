---
layout: default
---
<div class='section'>
	<h2>Communities: a general view</h2>
	<svg id='viz_1'></svg>
	<div id='group_legend' class='hidden'>
		<h5>Clusters</h5>
	</div>
	<div id='legend' class='hidden'>
		<div class='legend_info'>
			<h5>User</h5>
			<p id='username'></p>
		</div>
		<div class='group_info' id='cluster_info'>
			<h5>Cluster</h5>
			<p id='cluster'></p>
		</div>
		<div class='legend_info'>
			<h5 style='color: #4169E1;'>Mentioned:</h5>
			<p id='in_ment' style='color: #4169E1;'></p>
		</div>
		<div class='legend_info'>
			<h5 style='color: #FA8072;'>Mentioning:</h5>
			<p id='out_ment' style='color: #FA8072;'></p>
		</div>
	</div>
</div>
<div class='section'>
	<h2>Roles and actors in the network</h2>
	<div class='texts'>
		<p>
			There are two principal kinds of users: the spreaders and the authors.
		</p>
		<p>
			The first are those who tend to retweet others' work. The latters, instead, mainly publish original contents.
		</p>
		<p>
			As we can expect, in both cases we can observe a great amount of users with a low in and out activity and a restricted minority that collects the majority of mentions. 
		</p>
	</div>
	<h5>Distribution of incoming mentions</h5>
	<svg id='viz_2' class='small_viz'></svg>
	<h5>Distribution of outcoming mentions</h5>
	<svg id='viz_3' class='small_viz'></svg>
</div>



