<template>
  <div class="info">
	<el-row>
	  <div class="grid-content bg-purple">
		<span>苏云龙</span>
	  </div>
	</el-row>
	<el-row>
	  <div class="grid-content bg-purple">
		<span>河南大学软件学院</span>
	  </div>
	</el-row>
	<el-row>
	  <div class="grid-content bg-purple">
		<span>2014级</span>
	  </div>
	</el-row>

	<el-row type="flex" justify="center">
	  <el-col :span="8"><div class="grid-content bg-purple">

	  	<div class='head'><span>What I kown</span></div>

	  	<div class='content'>
	  		<p v-for='data in skill'><i class="el-icon-check"></i>{{data}}</p>
	  	</div>

	  </div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple">

	  	<div class='head'><span>What I kown</span></div>

	  	<div class='content'>
	  		<p v-for='data in skill'><i class="el-icon-check"></i>{{data}}</p>
	  	</div>
	  </div></el-col>
	</el-row>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
        skill: [
        	'HTML5+CSS3',
        	'Javascript+jQuery',
        	'BootStrap',
        	'Angular Vue'
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row{
	font-size: 2rem;
	margin-top: 1rem;
}
.el-col{
	margin-left:10px;
}
.head{
	background: #35a4db;
}
.content{
	margin-top: 0.5rem;
	background: #193e5b;
	color: #ccc;
}
p{
	padding: 0.5rem 0;
}
</style>
