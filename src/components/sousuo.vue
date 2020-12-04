<template>
    <div>

<div class="possw">
<input type="text" id="sosu" size="40px">
</div>
         <div class="div-yw">
        <div class="div-1">
            <img src="../assets/008.png" width="80px" alt="">
        </div> 
       
        <div class="div-2">
            <h4>废材特工</h4>
            <p>观众评分 6.9</p>
            <p class="p-1">主演：浩哥，浩帅，浩总，浩浩，阿斯蒂芬哈师大放假啊是兑换积分大家</p>
          
        </div>
        
    </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
}
.div-yw div{
float: left;
}
.div-yw {
    border-bottom: 1px dashed rgb(179, 172, 172);
    padding: 3px 0;
}
.div-yw:after {
  clear: both;
  content: "";
  display: block;
}
.div-1{
    text-align: center;
    width: 100px;

}
.div-2{
    height: 103px;
    padding: 4px;
    /* border: 1px solid red; */
    width: 70%;
}
.div-2 p{
    font-size: 14px;
    margin: 7px 0;
}
.p-1{
    width: 225px;
}
#sosu{
    size: 20px;
  padding:4px 0;
 margin: 4px 26px;
}
.possw{
    margin: 0 0 10px 0;
    background: #e6e6e6; 
    padding: 4px;
    border: 1px solid red;
}
</style>