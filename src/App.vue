<template>
  <div id="app">
    <div class='nav'>
        <router-link tag='div' to='./main' class='nav-header'>sy</router-link>
        <ul>
          <router-link tag='li' to='./main'>Main</router-link>
          <router-link tag='li' to='./info'>Info</router-link>
          <router-link tag='li' to='./link'>Link</router-link>
          <router-link tag='li' to='./other' >Other</router-link>
        </ul>
    </div>
     <transition name="slide-fade">
        <router-view></router-view>
     </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
   background: #ccc;
   overflow-y: scroll;
   overflow-x: hidden;
}
ul{
  list-style: none;
}
.nav div:hover,  
.nav li:hover{
  cursor: pointer;
  color: #fff;
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.nav{
  height: 5rem;
  width: 100%;
  font-size: 2rem;
  line-height: 5rem;
  box-sizing: border-box;
  padding: 0 5%;
  background: #555;
  color: #ccc;
}
.nav-header{
  width: 5rem;
  float:left;
}
.nav ul{
  float: right;
}
.nav li{
  float: left;
  width: 6rem;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  opacity: 0;
}
</style>
