<template>
    <div class="swiper">
        <div class="swiper-content">
            <div class="swiper-item" v-for="(item,index) in imgurl" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
        <div class="page">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <span class="btn1">&lt;</span>
        <span class="btn2">&gt;</span>

    </div>
  
</template>

<script>
import { Swiper } from '@/swiperjs/swiper';
export default {
    name:"Swiper",
    data(){
        return {
            imgurl:[
               require("@/assets/img/1.jpeg"),
               require("@/assets/img/2.jpeg"),
               require("@/assets/img/3.jpeg"),
               require("@/assets/img/4.jpeg"),
               require("@/assets/img/1.jpeg"),
            ]
        }
    },
    methods:{
        swiper(){
            new Swiper({
                content:".swiper-content",
                swiperItem:".swiper-item",
                page:".page",
                btn1:".btn1",
                btn2:".btn2"
            })
        }
    },
    mounted(){
        this.swiper()
    }

}
</script>

<style scoped>
.swiper{
    width: 800px;
    height: 450px;
    margin: 50px auto;
    background: #008c8c;
    position: relative;
    overflow: hidden;
}

.swiper-content{
    position: absolute;
    left: 0;
    display: flex;
}
.swiper-item{
    width: 800px;
    height: 450px;
}

.swiper-item img{
    width: 100%;
    height: 100%;
}
.page{
    position: absolute;
    left: 0;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%,-50%);

}
.page span{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: orangered;
    border-radius: 50%;
    margin: 0 10px;
}

.btn1,.btn2{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    /* transform: translate(0 -50%); */
    background: rgba(128,128,128,.5);
    color: rgb(231, 219, 219,.3);
    font-size: 30px;
    font-weight: bold;
    text-align: center;

}

.btn1{
    left: 5px;

}

.btn2{
    right: 5px;

}
</style>