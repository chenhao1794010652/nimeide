<template>
  <div class="div-1">
    <div id="div-4">
    <ul class="ul-1">
     <router-link to="chengshi1" tag="li">北京
       <i class="fa fa-caret-downy"></i>
     </router-link>
          <router-link to="reying" tag="li">正在热映</router-link>
     <router-link to="jjsy" tag="li">即将上映</router-link>
     <router-link to="sousuo" tag="li"><i class="fa fa-search"></i></router-link>
    
    </ul>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      remen:["北京","上海","天津","长沙","岳阳"],
      remen1:["安庆","安康","阿克苏","阿里巴巴","阿爷"],
      remen2:["北京","上海","天津","长沙","岳阳"],
      remen3:["A","B","C","D","E","F"],

    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#div-4 li.active{
  color: red;
}
#div-4 li.router-link-active{
  color: red;
}
.ul-1 li {

  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  width: 25%;
  list-style: none;

  float: left;
}
.ul-1::after {
  clear: both;
  content: "";
  display: block;
}
.ul-1{
  
  background: #f0f0f0;
  width: 100%;
position: fixed;
}
#div-4{
  padding: 0 0 40px 0;
}
/*
jj
*/
.div-2 {
  height: 730px;
  background: #fff5f0;
}
.div-2-1 h4 {
  background: #f0f0f0;
  padding: 5px 0 5px 10px;
  margin: 0 0 10px 0;
}
.div-2-1 ul li {
  font-size: 14px;
  font-weight: bold;
  /* padding: 5px 0; */
  padding: 6px 30px;
  list-style: none;
  border: 1px solid #f0f0f0;
  margin: 4px 0 4px 23px;
  background: #fff;
  float: left;
}
.div-2-1 ul::after {
  clear: both;
  content: "";
  display: block;
}
.div-2-2 ul li{
margin: 4px 0 4px 10px;
}
.div-2-2 ul{
    margin:10px 0;
}
.div-2-2 h4{
  background: #f0f0f0;

  padding: 5px 0 5px 10px;
  margin: 4px 0 10px 0;
}
.guding{
    background: #fff;
    top: 70px;
    left: 345px;
    padding: 148px 0;
    text-align: center;
    position: fixed;
    width: 30px;
  
}
.guding ul li{
  margin: 10px 0;
  list-style: none;
}

</style>