<template>
<div>
   <div @click='showPlayer()'>我的网易云</div>
   <div v-show='show'>
   	<video controls loop="loop" autoplay name="media" :poster="poster" :src="mp3Url">
   <!-- 		<source  type="audio/mpeg"> -->
   	</video>
   	<div class="audioPlayer">
   		<div class="container" v-for='song in songs' @click='changeSong(song)'>
   			<div class="info">
   				<span class="songname">{{song.name}}</span>
      			<span>{{song.ar[0].name}}</span>
   			</div>
   		</div>
   	</div>
   </div>
</div>
</template>
<script>
export default{
   name: 'player',
   data(){
      return {
         show: false,
         mp3Id: '',
         mp3Url: '',
         poster: 'http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
      }
   },
   methods:{ 
      showPlayer:function () {
         this.show = true;
      },
      changeSong:function (curSong) {
         this.mp3Id = curSong.id;
         this.poster = curSong.al.picUrl;
         this.$http.get('https://api.imjad.cn/cloudmusic/',
     		{
	     		params:{
	     			id: this.mp3Id
	     		}
			}).then(response => {
	            const data = JSON.parse(response.bodyText).data;
	          	this.mp3Url = data[0].url;
	          	console.log(this.mp3Url)
		    }, response => {
		      // error callback
		    });
         // console.log(curSong)
         $("video")[0].load();
      }
   },
   props:['songs']
}
</script>
<style>
.audioPlayer{
   width: 31rem;
   border: 1px solid red;
   margin: 0 auto;
}
video{
   height: 16rem;
   width: 12rem;
}
.container{
   width: 100%;
   margin: 0.25rem 0;
   background: #69c;
   cursor: pointer;
}
.info{
   padding: 0 0.5rem;
}
.info span{
   display: inline-block;
   font-weight: 500;
}
.songname{
   font-size: 1.25rem;
}

</style>