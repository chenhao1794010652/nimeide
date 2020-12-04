<template>
        <div class="div-2">
      <div class="div-2-1">
        <h4>热门城市</h4>
        <ul>
          <li v-for="item in remen" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="div-2-2">
        <h4>A</h4>
        <ul>
           <li v-for="item in remen" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="div-2-2">
        <h4>B</h4>
        
        <ul>
          <li v-for="item in remen1" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="div-2-2">
        <h4>C</h4>
        <ul>
           <li v-for="item in remen2" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="guding">
          <ul>
             <li v-for="item in remen3" :key="item.id ">
            {{ item }}
            
          </li>
          </ul>p
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
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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
    top: 80px;
    left: 345px;
    padding: 143px 0;
    text-align: center;
    position: fixed;
    width: 30px;
       
}
.guding ul li{
  margin: 10px 0;
  list-style: non5e;
}

</style>