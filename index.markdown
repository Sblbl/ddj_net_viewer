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
	<div class='texts'>
		<h5>Communities extraction</h5>
		<p>
			This project aims to individuate and study the communities of users involved in Data Journalism. To do so, only the exchange of mentions between users were considered as interactions. Retweets are too variables to be used: a user could retweet an article because it covers a topic of their interest, while a mention suggests a stronger relation between who receive it and who makes it.  
		</p>
		<p>
			Before generating the graph, the less active users have been pruned to avoid generating noisy data. A minimum of five incoming mentions and five outcoming ones has empirically been found as a good threshold. 
		</p>
		<p>
			The Leiden algorithm was successively used to extract the communities. This is a technique used in Social Network Analysis capable to generate well-connected clusters. It starts by considering each individual as a community and progressively merging the nearest groups, until a good partitioning is found.
		</p>
		<p>
			Ten communities over twelve originated were considered as valid because of their size and of their relaitions with the others. The geographical area was found to be significantly impacting over the construction of Data Journalism communities, as will be exposed.
		</p>
	</div>
</div>
<div class='section'>
	<h2>Roles and actors in the network</h2>
	<h5>Distribution of incoming mentions</h5>
	<svg id='viz_2' class='small_viz'></svg>
	<h5>Distribution of outcoming mentions</h5>
	<svg id='viz_3' class='small_viz'></svg>
	<div class='texts'>
		<p>
			There are three classes of users: the mostly inactive, the spreaders (those who mention other users), and the ones that are mostly mentinoed: the stars.
		</p>
		<p>
			As we can expect, the majority of users fall in the first category: the casual users. Most of them were excluded from the analysis.
			For what concerns the other two classes, it emerged that they don't often overlap: the cases at the limit of the distributions tend to primarly mention other users or to be cited by many people. 
		</p>
		<p>
			This is not surprising since there exist accounts made for spreading specific contents made by and addressed to a precise target, in this case (data) journalists, activists, and designers. 
		</p>
	</div>
	<h2>A deeper glance at the most important users</h2>
	<h5>The mentioners</h5>
	<svg id='viz_4' class='small_viz'></svg>
	<h5>The most mentioned</h5>
	<svg id='viz_5' class='small_viz'></svg>
	<div class='texts'>
		<p>
			The most mentioned users and the ones who most mention were extracted from the whole mention graph to understand if there were any lonley wolf that was not captured from the algorithm. 
		</p>
		<p>A big anomaly was suddenly found: the two users at the top
			of the ranks, EscolaDeDados and journalismoDados are in reality part of the same group and they always mention each other. The second profile is now inexisting but it is likely that they were managed by the same person or group. 
		</p>
		<p>Since journalismoDados is not part of any community,
			probably it was deleted before 2020 in favor of EscolaDeDados, that is part of <span class='g_0'>cluster 0</span>.
		</p>
		<p>
			And it is exaclty from <span class='g_0'>cluster 0</span> that most of the most mentioned users come, toghether with <span class='g_2'>cluster 2</span>. 
		</p>
		<p>
			Since the distribution of the most mentioned users is more likely, it can be trusted that EscolaDeDados is the true top star. 
		</p>
		<p>An exception of what has been said before is that gjin is
			on the top of both ranks, suggesting its role of importance in the Data Journalism Twitter environment. 
		</p>
		<p>
			Another aspect to notice is that AJEnglish, the english version of Al Jazeera, in <span class='g_1'>cluster 1</span>,  is related to AJLabs in <span class='g_2'>cluster 2</span>.
		</p>
	</div>
</div>



