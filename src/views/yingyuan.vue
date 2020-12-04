<template>
  <div>
    <toubu shenying="神影电影"></toubu>
    <ul id="quancheng">
      <li>
        全城
        <i class="fa fa-caret-down"></i>
      </li>
      <li>
        品牌
        <i class="fa fa-caret-down"></i>
      </li>
      <li>
        特色
        <i class="fa fa-caret-down"></i>
      </li>
    </ul>
    <div id="huadong">
 <kuang></kuang>
    </div>
   
    <dibu></dibu>
  </div>
</template>

<script>
import toubu from "../components/toubu";
import dibu from "../components/dibu";
import kuang from "../components/kuang";
export default {

  components: {
    toubu,
    dibu,
    kuang
  }
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#quancheng{
  border-bottom: 1px dashed red;
}
#quancheng:after {
  clear: both;
  content: "";
  display: block;
}
#quancheng li{
    margin: 10px 0 10px 60px;
    list-style:none ;
float: left;
}
#huadong{
  height: 900px;
}
</style>