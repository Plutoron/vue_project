<template>
  <div class="other">
    <player :songs='songs'></player>
  </div>

</template>
<script>

import player from '@/services/163Music'

export default {
  name: 'other',
  data () {
    return {
    	songList:{},
	    songs:{}
    }
  },
  components:{
  	player
  },
  mounted:function () {
  	this.$http.get('/playlist/detail',
     	{
     		params:{
     			id: '507182467'
     		}
		}).then(response => {
	          this.songList = JSON.parse(response.bodyText);
	          this.songs = this.songList.result.tracks;
	    }, response => {
	      // error callback
	    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
