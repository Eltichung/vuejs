<template>
    <div class="main">
        <div class="title">
            <div class="container">
                <h1>Food & Drinks</h1>
                <div class="search"  @click="showHide">  
                    <Transition name="bounce">
                        <input type="text" placeholder="search" id="input" v-if="isShow">
                    </Transition>
             
                    <i class="fa-solid fa-magnifying-glass" id="icon-search"></i>
                </div>
            </div>
        </div>
        <div class="catergories">
            <div class="container text">
                <h1 class="md-text">catergories</h1>
                <!-- <p><a href="#">See all</a></p> -->
                <!-- <img src="{{this.test}}" alt=""> -->
            </div>
            <div class="wrapper" v-dragscroll="true">
                <div class="container">
                    <div class="items activeType" >
                        <p>All</p>
                    </div>
                    <div class="items" v-for="item in dataType" :key="item.id">     
                     <img :src="require(`../../images/${item.imgUrl}`)" alt="">              
                        <p>{{item.name}}</p>     
                    </div>
                </div>
            </div>
        </div>
        <div class="product">
            <div class="product-type" v-for="title in dataType" :key="title.id">
                <div class="container text">
                    <h1 class="md-text">{{title.name}}</h1>
                    <p><a href="#">See all</a></p>
                </div>
                <div class="wrapper" v-dragscroll="true">
                    <div class="container">
                        <div class="product-item" v-for="item in exportData(title.id)" :key="item.id">
                            <div class="product-item-img">
                                <img src="../../images/chicken2.png" alt="">
                            </div>
                            <div class="product-item-text">
                                <h2>{{item.title}}</h2>
                                <p>${{item.price}}</p>
                            </div>
                            <div class="btn" @click="this.addCart(item)">
                                <button><i class="fa-solid fa-plus"></i></button>
                            </div>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import showHide from '../mixin/showHide';
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios';
// import $ from 'jquery'
export default {
    name: 'MyComponent',
    mixins:[showHide],
    components: {
    },
    data() {
        return {
           
            dataType:[],
            dataProduct:[],
            datatest:[],
          
        }
    },
    created(){
        //data type
       try
       {
        axios.get('http://localhost:3000/types')
            .then(data=>{
                this.dataType=data.data;
                this.test=`${this.dataType[0].imgUrl}`;  
            })
            // .catch(err=>{
            //     console.log(err)
            // })
       }
       catch(err){
        console.log(err)
       }
       //data product
       try
       {
        axios.get('http://localhost:3000/product')
            .then(data=>{
                this.dataProduct=data.data;
              
            })
            .catch(err=>{
                console.log(err)
            })
       }
       catch(err){
        console.log(err)
       }

       try
       {
        axios.get('http://localhost/data/api/product/read.php')
            .then(data=>{
                this.datatest=data.data;
               
            })
            .catch(err=>{
                console.log(err)
            })
       }
       catch(err){
        console.log(err)
       }
    },
    computed:{
        ...mapGetters(
            [
                'getCart'
            ]
        )
    },
    methods: {
        exportData(id)
        {
           return this.dataProduct.filter(item=>item.typeID==id)  
        },
  
        ...mapMutations(
            [
                'addCart'
            ]
        )
    },
    mounted() {
    }
}
</script>
<style lang="scss">
$bg-light: #f3f3f3;
$white: #fff;
$black: #000;
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0 20px;
    h1 {
        text-transform: capitalize;
        font-weight: 600;
    }

    p {
        a {
            font-weight: 800;
            color: #6d6868;
        }
    }

}

.wrapper {
    width: 98%;
    margin: 0 auto;
    background-color: $white;
    border-radius: 16px;
    cursor: grab;
    overflow-x: hidden;
    position: relative;

    .container {
        display: flex;
        width: 100%;
        padding: 30px 0;
        gap: 15px;
    }
}
.activeType
{
    background-color:#000 !important;
    color: $white;
}
.main {
    height: 100vh;
    width: 65%;
    background-color: $bg-light;
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar {
        width: 5px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgb(170, 114, 114);
        background-image: -webkit-linear-gradient(45deg,
                rgba(255, 255, 255, .2) 25%,
                transparent 25%,
                transparent 50%,
                rgba(255, 255, 255, .2) 50%,
                rgba(255, 255, 255, .2) 75%,
                transparent 75%,
                transparent)
    }

    .title {
        background-color: $white;

        .container {
            height: 10vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .search {
            background-color: $bg-light;
            padding: 10px 25px;
            border-radius: 20px;
            cursor: pointer;

            i {
                font-size: 125%;
                color: #2d2d2d;

            }

            input {
                background-color: transparent;
                outline: none;
                font-size: 125%;
                border: 0;
                // display: none;
            }
        }
    }

    .catergories {
        .items {
            display: flex;
            gap: 10px;
            align-items: center;
            padding: 12px 24px;
            background-color: $bg-light;
            border-radius: 13px;
            cursor: pointer;

            p {
                font-size: 125%;
                font-weight: 700;
                white-space:nowrap;
            }
        }
    }

    .product {
        position: relative;
        .container {
            gap: 50px;
        }
        &-item {
            display: flex;
            position: relative;
            align-items: center; 
            &-img {
                position: relative;
                
                &::after {
                    content: "";
                    position: absolute;
                    width: 50%;
                    height: 95%;
                    right: 0%;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: $bg-light;
                    z-index: 1;
                }

                img {
                    position: relative;
                    height: 13vh;
                    object-fit: contain;
                    z-index: 222;
                    // box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
                }
            }

            &-text {
                height: 95%;
                background-color: $bg-light;
                border-radius: 0 13px 13px 0;
                position: relative;
                padding: 0 25px 0 10px;
                z-index: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 5px;
                min-width: 180px;
                h2 {
                    font-weight: 500;
                    white-space: nowrap;
                }

                p {
                    font-weight: 600;
                }
            }

            .btn {
                position: absolute;
                bottom: 2.5%;
                right: 0;
                z-index: 3;
                cursor: pointer;
                
                button {
                    outline: none;
                    border: none;
                    background-color: #ff1e41;
                    border-radius: 3px 3px 16px 3px;
                    cursor:pointer;      
                    &:hover
                    {
                        background-color: #fd2f4e;
                    }
                    i {
                        padding: 12px;
                    }

                }
            }
        }
    }
}
</style>