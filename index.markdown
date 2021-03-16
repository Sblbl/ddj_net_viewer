---
layout: default
---
<div class='section'>
	<h2>Communities: a general view</h2>
	<svg id='viz_1'></svg>
	<div id='group_legend'>
		<h5>Communities</h5>
	</div>
	<div id='legend' class='hidden'>
		<h5>User Information</h5>
		<div class='legend_info'>
			<h5>Username</h5>
			<p id='username'></p>
		</div>
		<div class='group_info' id='cluster_info'>
			<h5>Cluster:</h5>
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
			There are three classes of users: the mostly inactive, the spreaders (those who mention other users), and the ones that are mostly mentinoed: the stars.
		</p>
		<p>
			As we can expect, the majority of users fall in the first category. For what concerns the other two classes …<span class='TODO'>[say sth about the difference between the 2 distrs]</span>
		</p>
	</div>
	<h5>Distribution of incoming mentions</h5>
	<svg id='viz_2' class='small_viz'></svg>
	<h5>Distribution of outcoming mentions</h5>
	<svg id='viz_3' class='small_viz'></svg>
	<h2>A deeper glance at the most important users</h2>
	<div class='texts'>
		<p>
			The mentioners are …<span class='TODO'>[continue]</span>. 
		</p>
	</div>
	<h5>The mentioners</h5>
	<svg id='viz_4' class='small_viz'></svg>
	<div class='texts'>
		<p>
			The most mentioned are … <span class='TODO'>[continue]</span>. In this case, we observe that all the super-stars of data journalism belong to one of the extracted communities, mainly from <span class='g_0'>cluster 0</span> and <span class='g_2'>cluster 2</span>
		</p>
	</div>
	<h5>The most mentioned</h5>
	<svg id='viz_5' class='small_viz'></svg>
</div>



