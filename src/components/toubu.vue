<template>
  <div id="div-1">
    <div id="div-2">
        <p>{{shenying}}</p>
    </div>
  
  </div>
</template>

<script>
export default {
  props: {
    shenying:""
  }
};
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
#div-1 p{
    font-weight: bold;
    font-size: 17px;
    color: aliceblue;
    background: rgb(243, 106, 106);
text-align: center;
padding: 10px 0;

}
#div-1{
  margin: 0 0 40px 0;
}
#div-2{
  width: 100%;
  position: fixed;
  top:0;
}

</style>