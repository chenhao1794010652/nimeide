<template>
    <div id="div-1">
        <ul>

           <router-link to='/' tag="li">
           <i class="fa fa-film"></i>
          <P> 电影</P>
           </router-link>
           
          
           <router-link to='/yingyuan' tag="li">
           <i class="fa fa-youtube-square"></i>
          <p>影院</p>
           </router-link>
          
           
           <router-link to='/wode' tag="li">
 <i class="fa fa-user-circle"></i>
            <p> 我的</p>
           </router-link>
           
        </ul>

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
#div-1{
  height: 46px;
    width: 100%;
    background: floralwhite;
    position: fixed;
    top: 562px;
}
#div-1 ul li{
    text-align: center;
  margin: 0  0 0 70px;
    list-style: none;
float: left;
}

#div-1 ul:after {
  clear: both;
  content: "";
  display: block;
}
#div-1 li.active{
  color: red;
}
#div-1 li.router-link-active{
  color: red;
}
</style>