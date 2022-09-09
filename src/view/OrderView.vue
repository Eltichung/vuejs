<template>
   <div class="order-view" v-if="showDialog">  
        <div class="bg">
            <i class="fa-solid fa-xmark" @click="showForm"></i>
            <the-form />        
        </div>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from 'vuex'
    import TheForm from '../components/FormOrder.vue';
    // import CartItem from "../components/CartItem.vue"
    export default{
        data(){
            return {
                test:require('../../images/chicken2.png'),
                tmp:'chicken2.png'
            }
        },
        components: {
            TheForm,
            // CartItem
        },
        computed:{
           ...mapGetters([
            'showDialog',
           ]),

           style()
           {
                return require(`../../images/${this.tmp}`)
           }
        },
        methods:{
            ...mapMutations([
                'showForm'
            ]),
        },
    }
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";
.order-view
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 3333;
    display:flex;
   
    .bg
    {
        margin:auto;
        // width:50vw;
        height:auto;
        background:#000;
        display: flex;
        position: relative;
        border-radius: 20px;
        >i
        {
            font-size: 150%;
            color:$white;
            cursor:pointer;
            z-index: 9999999999;
            position: absolute;
            top:0;
            right: 0;
            padding: 15px;
        }
        // img
        // {
        //     width:200px;
        //     object-fit: contain;
        //     position:absolute;
        //     top:0%;
        //     right: 0%;
        //     transform: translate(50%,-50%);
        //     z-index: 0;
        // }
    }
}
form
{
    background:#000;
    min-height:40vh;
    justify-content:flex-start;
    // max-width:40%;
    border-radius:inherit;
    width: 23vw;
    gap:2vh;
}
</style>