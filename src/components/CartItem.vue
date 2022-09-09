<template>
            <div class="cart-main wrapper">
                <div class="cart-main-product container " v-for="(item,index) in this.getCart" :key="item.id">
                    <h2>{{item.title}}</h2>
                    <p>${{item.price}}</p>
                    <div class="cart-main-product-count">
                        <div @click="this.minusCart(item)"><i class="fa-solid fa-minus"></i>
                        </div>
                        <p>{{item.count}}</p>
                        <div @click="this.increaseCart(item)"><i class="fa-solid fa-plus"></i></div>
                    </div>
                    <div class="cancel" @click="this.deleteItem(index)">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
        data(){
            return{
                check:false
            }
        },
        components: {
            
        },
        computed:{
           ...mapGetters([
            'getCart',
            'getDiscount',
            'totalCart'
           ]),
            handleTotal()
            {
                return this.totalCart-this.getDiscount
            }
        },
        methods:{
            ...mapMutations([
                'addCart',
                'increaseCart',
                'minusCart' ,
                'deleteItem',
                'clearCart'
            ]),
            submit(){
                this.check = true;
            },
            close(){
                this.check = false;
            }
        },
    }
</script>
<style lang="scss" scoped>
@import "../assets/style/variables";
 @keyframes example {
  from {opacity:0;}
  to {opacity:1;}
}
 .cart-main
    {
        background-color:$bg;
        display: flex;
        flex-direction:column;
        gap:15px;
        padding:15px 0;
        max-height:45vh;
        min-height:45vh;
        overflow: scroll;
        &::-webkit-scrollbar {
                display: none;
            }
        &.v2
        {
            position:absolute;
            left:-10px;
            top:0;
            transform:translateX(-100%);
            z-index: 3333;
            background-color:#000;
            padding:0;
            form
            {
               max-height:45vh;
                min-height:45vh;

            }
        }
        &-product
        {
            padding: 12px 0;
            display: flex;
            flex-direction:column;
            gap:8px;
            background-color:$light;
            border-radius:inherit;
            padding-left:20px;
            box-sizing: border-box;
            position: relative;
            animation-name: example;
            animation-duration: 2s;
            >h1
            {
                font-weight: 800;
               
            }
            >p
            {
                font-weight: 700;
            }
            &-count
            {
                display: flex;
                align-items: center;
                gap:15px;
                div
                {
                    padding: 4px 6px;
                    background-color:$light;
                    cursor:pointer;
                }
                p
                {
                    font-size: 125%;
                    font-weight:800;
                }
            }
            .cancel
            {
                position: absolute;
                right: 0px;
                top:-5px;
                border-radius:inherit 0 0 0;
                cursor:pointer;
                padding: 10px;
            }
        }
    }
</style>