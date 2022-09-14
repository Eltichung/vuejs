<template>
    <the-menu />

    <div class="book-view">
        <div class="title">
            <div class="container">
                <h1>Book</h1>
            </div>
        </div>
        <div class="list container">
            <div class="list-item" v-for="item in  20" :key="item">
                <img src="../../images/round-table.png">
                <p>{{ item }}</p>
            </div>
        </div>

    </div>
    <the-cart />
    <OrderView />
    <DetailBill v-if="showBill" :data="detailBill" @hide="hide" :btn='true' />

</template>

<script>
import TheMenu from '../components/TheMenu.vue';
import { HTTP } from '../commom/api/api-commom.js';
import OrderView from '../view/OrderView.vue';
import TheCart from '../components/TheCart.vue';
import DetailBill from '../components/DetailBill.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            count: [],
            showBill: false,
            detailBill: [],

        }
    },
    components: {
        TheMenu,
        TheCart,
        OrderView,
        DetailBill
    },
    created() {
    },
    computed: {
        ...mapGetters([
            'showDialog',
            'getPosition'
        ]),
    },
    mounted() {
        this.showPosition();
        document.querySelector('#submit').disabled = true;
    },
    methods: {
        ...mapMutations([
            'showForm',
            'addposition'
        ]),
        hide() {
            this.showBill = false;
        },
        async showPosition() {
            await HTTP.get(`bill/filter.php?status=1&method=1`)
                .then(data => {
                    data.data.forEach(item => {
                        this.count.push(item.position)
                    });
                })
                .catch(err => console.log(err))
            let text = document.querySelectorAll(".list-item>p");
            let img = document.querySelectorAll(".list-item>img");
            this.count.forEach(item => {
                text[item - 1].style = `color:#000`;
                img[item - 1].style = `opacity:1`;
                text[item - 1].addEventListener('click', () => {

                    HTTP.get(`detailBill/selectByPosition.php?position=${item}`)
                        .then(data => {
                            this.detailBill = data.data;
                            this.showBill = true;
                        })
                })
            })
            for (let i = 0; i < 9; i++) {
                text[i].innerText = `0${i + 1}`;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

.book-view {

    // padding-top: 10vh;
    // height: 90vh;
    width: 65%;
    height: 100vh;

    .title {
        height: 10vh;
        display: flex;
        align-items: center;

        h1 {
            display: block;

        }
    }

    .list {

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 5vh 5vw;

        &-item {
            position: relative;

            img {
                width: 100%;
                object-fit: contain;
                opacity: 0.4;
            }

            p {
                font-size: 200%;
                font-family: 'Alfa Slab One', cursive;
                color: rgba(112, 112, 112, 0.3);
                cursor: pointer;
                position: absolute;

                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 32;
            }
        }
    }
}
</style>