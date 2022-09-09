<template>
<div class="cart">
        <div class="cart-top ">
            <div class="container">
                <h2>Current Order</h2>
                <div class="cart-top-icon">
                    <img src="../../images/broom.png" alt="">
                </div>
            </div>
        </div>
        <div class="banner wrapper">
            <img src="../../images/banner1.png" alt="">
        </div>
        <the-form />
        <div class="cart-bottom wrapper" >
            <button id="submit">Submit</button>
        </div>
    </div>
</template>
<script>
import TheForm from "../components/FormOrder.vue"
    export default{
        components: {
            TheForm
        }
    }
</script>
<style lang="scss" scoped>
 $bg:#121212;
 $white:#fff;
 $light:rgba(112, 112, 112, 0.3);
 @keyframes example {
  from {opacity:0;}
  to {opacity:1;}
}
.cart
{
    width:20%;
    background-color:  #000;
    color: $white;
    .banner.wrapper
    {
        padding: 20px 0;
        background-color:transparent;
        img
        {
            display: block;
            width:50%;
            object-fit: contain;
        }
    }  
    &-top
    {  
         background-color:$bg;
        .container
        {
            height:10vh;
            display: flex;
            align-items: center;
            justify-content:space-between;
            h2
            {
                color: $white;
            }
        }
        &-icon
        {
            padding:6px 20px;
            background-color:$light;
            border-radius:16px;
            cursor:pointer;
        }
    }
    >h3
    {
        padding:12px 0;
    }
    .wrapper
    {
        width:95%;
        cursor:auto;
        background-color:$light;
    }
    .dialog
    {
        display: flex;
        position: relative;
        max-height:45vh;
        min-height:45vh;
    }
    &-main
    {
        background-color:$bg;
        display: flex;
        flex-direction:column;
        gap:15px;
        padding:15px 0;
        // max-height:45vh;
        // min-height:45vh;
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
    &-more
    {
        margin-top: 3vh;
         background-color:$bg;
         display: flex;
         flex-direction: column;
         gap:15px;
         padding: 15px 0;
         &-total
         {
            width:90%;
            margin: 0 auto;
            display:flex;
            justify-content: space-between;
            box-sizing: border-box;
            &:last-child
            {
                padding-top: 20px;
                border-top: 1px solid $light;
            }
         }     
    }
    &-bottom
    {
        margin-top:30px;
       
        button
        {
            border:none;
            outline:none;
            background-color:$light;
        }
        // .option
        // {
        //     display:grid;
        //     grid-template-columns: 1fr 1fr 1fr;
        //     grid-gap: 30px;
        //     button
        //     {
        //         padding:10px 0;
        //         border-radius: 100px;
        //     }
        // }
        #submit
        {
            // margin-top:20px;
            width:100%;
            height:100%;
            padding:10px 0;
            font-size: 150%;
            color:$white;
            cursor: pointer;
            &:hover
            {
                background-color:$white;
                color:#000;
            }
        }
    }
}
</style>