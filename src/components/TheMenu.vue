<template>
    <div class="left">
        <div class="logo">
        </div>
        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <router-link :to="{name:'HomeView'}">
                    <li class="active"><a href="#">Food & Drinks</a></li>
                </router-link>
                <router-link :to="{name:'BookView'}">
                    <li><a href="#">Book</a></li>
                </router-link>
                <router-link :to="{name:'BillView'}">
                    <li><a href="#">Bills</a></li>
                </router-link>
                <li >
                    <a href="#" id="show-hidden-menu">Manage</a>
                    <ul class="menu-children" style="display: none">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Type</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
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
import $ from 'jquery';
export default
    {
        computed: {
            addClass() {

                return this.$router.params

            }
        },
        mounted() {
            $(document).ready(function () {
                $('ul li').click(function () {
                    $('li').removeClass("active");
                    $(this).addClass("active");
                });
            });

            $(document).ready(function () {
                $('#show-hidden-menu').click(function () {
                    $('.menu-children').slideToggle("slow");
                });
            });
        }
    }
</script>
<style lang="scss" scoped>
$bg: #121212;
$white: #fff;
#show-hidden-menu
{
    display:block;
}
.left nav ul li .menu-children
{
    li
    {
        padding: 5px 0;
        a
        {
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
                padding: 10px 0;
                width: 90%;
                margin: 0 auto;

                a {
                    margin-left: 25px;
                    color: #fff;
                    font-size: 125%;
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