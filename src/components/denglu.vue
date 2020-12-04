<template>
    <div>
        <form action="">
            <input type="text" v-model="zhanghao" name="" id=""  class="yes1" placeholder="账号/手机号/邮箱" size="49px" required>
            <input type="password" v-model="mima" name="" id=""  class="yes1" placeholder="请输入密码" size="49px" required>
<input type="submit" value="登录" id="dianji">
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                zhanghao:"",
                mima:""
            }
        },
        methods: {
            dianji:function(){
                if (this.zhanghao ==='12' && this.mima==='12') {
                    alert("cg")
                }
            }
        },
    }
</script>

<style scoped>
.yes1{
    padding: 10px 0;
}
#dianji{
    color: aliceblue;
    background: red;
    margin: 10px 0 0 0;
    padding: 10px 172.5px;
   
}
</style>