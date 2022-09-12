<template>
    <div class="left">
        <div class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li >
                    <router-link :to="{name:'HomeView'}" active-class="active" exact >
                        Food & Drinks    
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'BookView'}" active-class="active">
                        Book
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'BillView'}" active-class="active">
                        Bills
                    </router-link>
                </li>
                <li>
                    <a href="#" id="show-hidden-menu" @click="this.isShow=!this.isShow">Manage 
                       <span><img src="../../images/arrow-down.png" alt="" id="arrow" :class="{active_arrow:isShow}"></span>
                    </a>
                    <Transition name="bounce">
                        <ul class="menu-children" v-if="isShow">
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Type</a></li>
                            <li><a href="#">Account</a></li>
                        </ul>
                    </Transition>
                </li>
            </ul>
            <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Notifications</a></li>
            </ul>
        </nav>
        <div class="contacts">
        </div>
    </div>

</template>
<script>
// import $ from 'jquery';
export default {
    data() {
        return {
            isShow:false,        
        }
            
    },
    computed: {
        addClass() {
            return this.$router.params
        }
    },
    methods: {
      
    },
    mounted() {
        // $(document).ready(function () {
        //     $('#show-hidden-menu').click(function () {
        //         $('.menu-children').slideToggle("slow");
        //     });
        // });
    }
}
</script>
<style lang="scss" scoped>
$bg: #121212;
$white: #fff;
@keyframes example {
  0%   {transform:rotate(0deg);}
 
  100% {transform:rotate(180deg);}
}
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
.active_arrow{
    transform:rotate(180deg);
    animation:example 0.5s linear;
}
#show-hidden-menu {
    display: block;
    position: relative;
    span
    {
        margin-left: 15px;
        img
        {
            width:12px;  
        }
    }
}

.left nav ul li .menu-children {
    li {
        padding: 5px 0;

        a {
            font-size: 100%;
        }

        &:hover {
            background-color: rgba(112, 112, 112, 0.3);
            border-radius: 10px;
        }
    }
}

.left {
    width: 15%;
    background-color: #000;

    .logo {
        height: 10vh;
        background-color: $bg;

    }

    nav {

        margin: 0 auto;

        ul {
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 20px;

            &:first-child {
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    width: 80%;
                    height: 3px;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: $bg;

                }
            }

            li {
                width: 90%;
                margin: 0 auto;  
                a {
                    display: block;        
                    color: #fff;
                    font-size: 125%;
                    display:block;
                    padding: 10px 0;
                    padding-left: 25px;
                }

                &:hover {
                    background-color: $bg;
                    border-radius: 10px;
                }
            }
        }
    }
}

.active {
    background-color: $bg;
    border-radius: 10px;
}
</style>