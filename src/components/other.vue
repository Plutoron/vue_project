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
  	this.$http.get('https://api.imjad.cn/cloudmusic/',
     	{
     		params:{
          type: 'playlist',
     			id: '507182467'
     		}
		}).then(response => {
            // console.log(response)
	          this.songList = JSON.parse(response.bodyText).playlist;
	          this.songs = this.songList.tracks;
            // console.log(this.songs);
	    }, response => {
	      // error callback
	    });
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
