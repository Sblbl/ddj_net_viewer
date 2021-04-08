---
layout: default
---
<div id='introduction' class='section'>
	<h2>Introduction</h2>
	<div class='texts'>
		<p>
			With the ever-changing landscape in the digital world, there is massive information as well as methods to present that information online. As a practical method, data journalism has been increasingly prevalent. 
		</p>
		<h5>Research Objectives</h5>
		<p>
			Our research aims to discern the most active users and communities formed around data journalism keywords and hashtags. By generating network visualisation along with reports that highlight key people and groups in the discussions, to better understand the ecosystem of data journalism and those real people behind their accounts. In particular, this analysis focuses on:
		</p>
		<ul>
			<li>
				Discerning the most influential or most active accounts in data journalism on Twitter. The key point is to understand what qualities they have that make them vital. 
			</li>
			<li>
				Finding the discussion communities, and see if there are roles such as connectors and opinion leaders within these communities. 
			</li>
			<li>
				Understanding the geographical and cultural gaps in the dataset, and to discern data journalism’s role in the international power of discourse on social media. 
			</li>
		</ul>
		<h5>Method</h5>
		<p><span class='TODO'>TODO</span></p>
		<h5>Analysis steps</h5>
		<p><span class='TODO'>TODO</span></p>
	</div>
</div>
<h2>Step 1 - the communities</h2>
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
			The <a href='https://www.nature.com/articles/s41598-019-41695-z'>Leiden algorithm</a> was successively used to extract the communities. This is a technique used in Social Network Analysis capable to generate well-connected clusters. It starts by considering each individual as a singleton community and progressively merging the nearest groups, until a good partitioning is found. The quality of the partitioning is evaluated by comparing the connections between the communities after the merging and seeing if it improves.
		</p>
		<p>
			Ten communities over twelve originated were considered as valid because of their size and of their relaitions with the others. The geographical area was found to be significantly impacting over the construction of Data Journalism communities, as will be exposed.
		</p>
	</div>
</div>
<div id='communities_in_depth' class='section'>
	<h2>The communities</h2>
	<p>
		How does each community contribute and act in the Data Journalism field? In this section, each cluster is analysed to discern its nature.
	</p>
	<div id='cluster_0' class='subsection'>
		<h5 class='g_0'>Cluster 0: the big soup</h5>
		<p>
			Cluster 0 witnesses a higher level of diversity with respect of account owners' nationality, active region and identity. It involves users from Europe (about 63% Germany), North America (90% US), Central and South America (nearly 92% Brazil), along with some accounts from Asia and Africa.
		</p>
		<p>
			Quite all the accounts are mentioned by <a href='https://twitter.com/gijn' target='blank'>@gijn</a> (Global Investigative Journalism Network) but this is not a discriminator from other communities, since many users from <a href='#cluster_1' class='g_1'>cluster 1</a>, <a href='#cluster_2' class='g_2'>cluster 2</a>, <a href='#cluster_3' class='g_3'>cluster 3</a>, and <a href='#cluster_4' class='g_4'>cluster 4</a> are mentioned by this organisation. 
		</p>
	</div>
	<div id='cluster_1' class='subsection'>
		<h5 class='g_1'>Cluster 1: news organizations and data teams</h5>
		<p>
			This community mainly contains accounts of big news organizations and their teams, data visualization tools, and non-profit organizations. These accounts seldom mention others within or outside their cluster. 
		</p>
		<p>
			The reason why they are grouped together is probably they are either mentioned by <a href='https://twitter.com/gijnafrica' target='blank'>@gijnafrica</a> or <a href='https://twitter.com/WarningGraphicC' target='blank'>@WarningGraphicC</a>, with the former dedicating in sharing investigative journalism and the latter providing daily links on data journalism and visualization. 
		</p>
	</div>
	<div id='cluster_2' class='subsection'>
		<h5 class='g_2'>Cluster 2: non-profit journalist network organizations and Sigma Awards</h5>
		<p>
			Cluster two is composed of non-profit journalist network organizations and accounts around sigma awards. Most of these journalist network organizations are interrelated and have a partnership with each other. Besides, there are accounts of sigma awards and its founders and managers. In the meanwhile, the journalist network organizations such as <a href='https://twitter.com/IJNet' target='blank'>@IJNet</a> and <a href='https://twitter.com/IRE' target='blank'>@IRE</a> are sigma awards’ media partners, which indicates that sigma awards has a close connection with those international and regional journalist centers. 
		</p>
	</div>
	<div id='cluster_3' class='subsection'>
		<h5 class='g_3'>Cluster 3: around datajournalism.com</h5>
		<p>
			This community revolves around <a href='https://twitter.com/datajournalism' target='blank'>@datajournalism</a>, which mentions almost every account in this cluster. The accounts are mainly regional media organizations and data journalists around the world. Six of them are also contributors of datajournalism.com.
		</p>
	</div>
	<div id='cluster_4' class='subsection'>
		<h5 class='g_4'>Cluster 4: BBC and BCU</h5>
		<p>
			In this cluster we can mainly find British data journalists' personal accounts, which can be divided into BBC-related accounts and BCU-related accounts.
		</p>
		<p>
			The former are those who used to work or currently work for BBC, while the latter either teach or receive the data journalism-related degree in Birmingham City University. 
		</p>
		<p>
			The reason why these two groups of accounts are merged into one cluster is that <a href='https://twitter.com/paulbradshaw' target='blank'>@paulbradshaw</a> has interaction with both BBC-related accounts and BCU-related accounts. He has worked with the BBC England data unit since 2015, and leads the MA in Data, Multiplatform and Mobile Journalism at Birmingham City University.
		</p>
	</div>
	<div id='cluster_5' class='subsection'>
		<h5 class='g_5'>Cluster 5: Nigeria</h5>
		<p>
			The 80% of this cluster’s accounts is originary from Nigeria. Although they are not dominant in numbers, these accounts have showed variety in respect of category. Among them there are civic organisation, international development, non-governmental organisations, research organisation, news agency.
		</p>
		<p> 
			It emerges <a href='https://twitter.com/Dataphyte' target='blank'>@Dataphyte</a>, a journalist and entrepreneur who has started online study website of data methods.
		</p>
	</div>
	<div id='cluster_6' class='subsection'>
		<h5 class='g_6'>Cluster 6: Northern Europe</h5>
		<p>
			All of this cluster’s accounts originate in Western and Northern European countries like Netherlands, France and Denmark, or locate in the capital of European Union, Brussels. 
		</p>
		<p> 
			The most active accounts of this cluster are EU <a href='https://twitter.com/EU_opendata' target='blank'>@EU_opendata</a>, an event to be held in 23-25th November 2021, and a student assistant editor <a href='https://twitter.com/MarieSchoenning' target='blank'>@MarieSchoenning</a> of UvA Amsterdam, an intellectual hub of the Netherlands.
		</p>
	</div>
	<div id='cluster_78' class='subsection'>
		<h5 class='no_g'><span class='g_7'>Cluster 7</span> and <span class='g_8'>Cluster 8</span>: Brazil</h5>
		<p>
			The accounts within these two clusters are in Brazil, addressing politics, education, health, security issues in Brazil and sometimes Latin America. Another thing they have in common is that they are all professionals in journalism. 
		</p>
	</div>
	<div id='cluster_9' class='subsection'>
		<h5 class='g_9'>Cluster 9: global</h5>
		<p>
			Three organisation accounts led by western countries, radiating the whole world. It includes UN World Data Forum (<a href='https://twitter.com/UNDataForum' target='blank'>@UNDataForum</a>), which is an annual event funded by The United Nations. 
		</p>
		<p> 
			The other two accounts, Earth Journalism Network (<a href='https://twitter.com/earthjournalism' target='blank'>@earthjournalism</a>) and Resources Watch (<a href='https://twitter.com/resource_watch' target='blank'>@resource_watch</a>) are both initiated in US, addressing environmental topics.
		</p>
	</div>
</div>
<div id='roles_in_net' class='section'>
	<h2>Roles in the network</h2>
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
</div>
<div id='local_actors' class='section'>
	<h2>Actors in the network</h2>
	<div class='texts'>
		<p>
			It is useful to understand in what measure each user contributes to the Data Journalism community on Twitter. This section reveals the most active, the most influential, and the spreaders users. For the moment, the ranking excludes the users outside the communities so that it is possible to discover eventual dominances inside them. 
		</p>
		<p>
			A profile was considered <strong>active</strong> if it produces a large amount of tweets, <strong>influential</strong> if many other users cite its work. It was named a <strong>spreader</strong> if it maily retweet other users' work.
		</p>
		<p>
			About activness, two rankings were realised: one considering retweets as valid contributions, and the other excluding them because they do not contain original material.
		</p>
		<p>
			Since a Tweeter action consists in the publication of an original (tweet) or of a third part (retweet) content, a user can be considered active also if they retweet a lot. For this reason, we excluded retweets in the count of mentions when looking for the spreaders and the influencers.
		</p>
	</div>
	<h5>Activity ranking including retweets</h5>
	<svg id='viz_8' class='small_viz'></svg>
	<h5>Activity ranking excluding retweets</h5>
	<svg id='viz_9' class='small_viz'></svg>
	<div class='texts'>
		<p>
			At a first glance, it seems more useful to look at the data without retweets. Here we can find that the 4 out of 10 users belong to <a href='#cluster_1' class='g_1'>cluster 1</a>. It is not so surprising, considering that it is primarly populated by big news agencies. 
		</p>
		<p>
			<a href="https://twitter.com/gijn" target="blank">@gijn</a> can be considered the most active user, also considering the other plot: as we see, it retweeted only 22 times, much less than the 192 of <a href="https://twitter.com/pinadrag" target="blank">@pinadrag</a>. It is visible that these two users are significantly over the average number of #ddj tweets in 2020, around 2.5 (excluding the zero values).
		</p>
	</div>
	<h5>The mentioners</h5>
	<svg id='viz_10' class='small_viz'></svg>
	<h5>The most mentioned</h5>
	<svg id='viz_11' class='small_viz'></svg>
	<div class='texts'>
		<p>
			This second analysis focuses on the level of interaction between the users (excluding retweets). The situation displayed by the plots shows <a href='#cluster_1' class='g_1'>cluster 1</a> as very present among the top 10 spreaders.
		</p>
		<p>
			If <a href="https://twitter.com/pinadrag" target="blank">@pinadrag</a> disappears, <a href="https://twitter.com/gijn" target="blank">@gijn</a> continues to dominate the rankings, consolidating its role of authority in Data Journalism, at least on Twitter.
			Also <a href="https://twitter.com/datajournalism" target="blank">@datajournalism</a>, the third most active user, confirms its position of importance becoming the second most mentioned in the network.
		</p>
		<p>
			Another aspect to notice is that <a href='#cluster_0' class='g_0'>cluster 0</a> receives a large amount of mentions. Given the nature of its composition it can be foreseen that these are principally interactions inside the cluster. A qualitative proof of that is the visual display of the community in the <a href='#viz_1'>network visualisation</a> at the beginning of the article. 
		</p>
	</div>
</div>
<div id='global_actors' class='section'>
	<h2>A global glance at the most important users</h2>
	<div class='texts'>
		<p>
			It is useful to compare the local rankings (inside the network) with the global ones because some important actors not strongly belonging to a community could emerge.
		</p>
	</div>
	<h5>Ranking including retweet activity</h5>
	<svg id='viz_6' class='small_viz'></svg>
	<div class='note'>
		<p>
			The ranking including retweets contained at the first place @jornalismoDados with 6773 tweets. We decided to drop this information for the reasons explained in the <a href='#reason_jornalismoDados'>following subsection</a>. 
		</p>
	</div>
	<h5>Ranking excluding retweet activity</h5>
	<svg id='viz_7' class='small_viz'></svg>
	<div class='texts'>
		<p><span class="TODO">AS WE CAN SEE</span></p>
	</div>
	<h5>The mentioners</h5>
	<svg id='viz_4' class='small_viz'></svg>
	<div class='note'>
		<p>
			The ranking of the mentioners contained at the first place @jornalismoDados with 13649 outcoming citations. We decided to drop this information for the reasons explained in the next paragraphs. 
		</p>
	</div>
	<h5>The most mentioned</h5>
	<svg id='viz_5' class='small_viz'></svg>
	<div class='texts' id='reason_jornalismoDados'>
		<p><span class="TODO">REVIEW</span></p>
		<p>
			The most mentioned users and the ones who most mention were extracted from the raw graph to understand if there were any lonley wolf that was not captured from the algorithm. 
		</p>
		<p>A big anomaly was suddenly found: the two users at the top
			of the ranks, <a href='https://twitter.com/EscolaDeDados' target='blank'>@EscolaDeDados</a> and @journalismoDados are in reality part of the same group and they always mention each other. The latter is now inexisting but it is likely it was managed by the same person of the former, and that  it was deleted before 2020 in favor of <a href='https://twitter.com/EscolaDeDados' target='blank'>@EscolaDeDados</a>, which is part of <a href='#cluster_0' class='g_0'>cluster 0</a>.
		</p>
		<p>
			And it is exaclty from <a href='#cluster_0' class='g_0'>cluster 0</a> that most of the most mentioned users come, toghether with <a href='#cluster_2' class='g_2'>cluster 2</a>. 
		</p>
		<p>
			Since the distribution of the most mentioned users is more likely, it can be trusted that <a href='https://twitter.com/EscolaDeDados' target='blank'>@EscolaDeDados</a> (at the first place)is the true top star. 
		</p>
		<p>An exception of what has been said before is that <a href='https://twitter.com/gijn' target='blank'>@gijn</a> is
			on the top of both ranks, suggesting its role of importance in the Data Journalism Twitter environment. 
		</p>
	</div>
</div>



