<template>
        <the-menu />
        <the-product />
        <the-cart />
        

    <!-- <div class="app">
    </div> -->
    <OrderView />
</template>
<script>
    
    import TheMenu from '../components/TheMenu.vue';
    import TheProduct from '../components/TheProduct.vue';
    import TheCart from '../components/TheCart.vue';
    import OrderView from '../view/OrderView.vue';
    export default{
       
        components: {
           TheMenu,
            TheProduct,
            TheCart,
            OrderView
        }
    }
</script>
<style lang="scss" scoped>
// .app
// {
//     display: flex;
//     height:100vh;
// }
.left
{
    width:15vw;
}
.cart
{
    width:20vw;
}
</style>