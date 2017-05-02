<template>
  <div class="link">
    	<el-row>
    		<el-col>
    			出镜率最高的
    		</el-col>
    	</el-row>
    	<el-row>
          <mod :value='value' v-for='value in postdata.mostuse'> </mod>
      </el-row>
  </div>
</template>

<script>
import mod from '@/services/mod'
export default {
  name: 'link',
  data () {
    return {
    	postdata:{
		    mostuse:{
  	  		baidu:{
              key: 'baidu',
    	  			href: 'http://www.baidu.com',
    	  			img: require('../assets/img/baidu.png'),
    	  			title: '百度',
    	  			subtitle: '搜索引擎，现代知识源泉',
    	  			content: '每天至少要100次<br>QAQ！！！'
  	  			},
            baiduyun:{
              key: 'baiduyun',
              href: 'http://pan.baidu.com/disk/home#list/path=%2F&vmode=list',
              img: require('../assets/img/baiduyun.png'),
              title: '百度云',
              subtitle: '花式资源，你懂得',
              content: '包含知识<br> ～(￣▽￣～)(～￣▽￣)～！！！'
            }
			  },
  			study:{
          
        }
		  }
    }
  },
  components:{
  	mod
  },
  methods:{
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row{
  padding: 0.5rem 2rem;
}

</style>
