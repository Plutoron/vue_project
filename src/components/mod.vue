<template>
	<el-col :span="6">
		<div class="grid-content bg-purple mod">
			<a :href="value.href" target="_blank">
				<div class="logo" :class="'logo-'+value.key"><img :src="value.img"></div>
				
				<div class="mod-content">
					<h3>{{value.title}}</h3>
					<h5>{{value.subtitle}}</h5>
					<p v-html='value.content'></p>
				</div>
			</a>
		</div>
	</el-col>
</template>

<script>
export default {
  data () {
    return {
    	
    }
  },
  props:[
   	'value'
  ]
}
</script>
<style scoped>
.mod{
	max-width: 250px;
	height: 300px;
	margin: 0 auto;
	border: 1px solid #ddd;
	padding: 5px;
	margin-top: 10px;
	margin-bottom: 10px;
	font-family: '微软雅黑';

}
.mod:hover{ 
	box-shadow: 0 14px 20px #99c; 
}
.mod a{
	color: #000;
	text-decoration: none;
}
.mod a:hover{ 
	text-decoration: none; 
}
.logo{
	width: 100%;
	height: 45%;
}
.logo img{ 
	width: 100%; 
}
.mod-content{
	padding-top: 0.75rem;
}
h3,
h5{
	padding-top: 0.75rem;
}
.mod-content p{
	font-size: 1rem;
	font-weight: 500;
	padding-top: 0.75rem;
}


/*mod图片样式*/
.logo-baidu{
	background: #366;
}
.logo-baiduyun{
	background: #6cc;
}
.logo-baidu img
{
	transform: scale(0.9) translateY(-10px);
}
.logo-baiduyun img
{	
	transform: scale(0.8) translateY(50px);
}
.logo-w3s img,
.logo-jq img{
	height: 100%;
}
.logo-Angular{
	background: #6cf;
}
.logo-AngularAPI{
	background: #9cf;
}

.logo-Angular img,
.logo-AngularAPI img
{
	transform: scale(0.85) translateY(40px);
}
.logo-bootstrap{
	background: #f90;
}
.logo-bootstrap img{
	transform: scale(0.9) translateY(50px);
}
.logo-huaban{
	background: #fa8484;
}
.logo-huaban img{
	transform: scale(0.5) translateY(-15px); 
}

</style>