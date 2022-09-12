<template>
   
    <div class="cart">
        <div class="cart-top ">
            <div class="container">
                <h2>Current Order</h2>
                <div class="cart-top-icon" @click="this.clearCart">
                    <img src="../../images/broom.png" alt="">
                </div>
            </div>
        </div>
        <div class="banner wrapper">
            <img src="../../images/banner1.png" alt="">
        </div>
        <div class="cart-main wrapper">
            <div class="position container">
                <h2 class="select">Chọn bàn</h2>
                <ul class="menu">
                    <li v-for="index in setPositions" :key="index">Bàn {{ index }}</li>
                </ul>
            </div>
            <div class="cart-main-product container " v-for="(item, index) in this.getCart" :key="item.id">
                <h2>{{ item.title }}</h2>
                <p>${{ item.price }}</p>
                <div class="cart-main-product-count">
                    <div @click="this.minusCart(item)"><i class="fa-solid fa-minus"></i>
                    </div>
                    <p>{{ item.count }}</p>
                    <div @click="this.increaseCart(item)"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="cancel" @click="this.deleteItem(index)">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
        <div class="cart-more wrapper">
            <div class="cart-more-total">
                <h3>Sub</h3>
                <p>${{ this.totalCart }}</p>
            </div>
            <div class="cart-more-total">
                <h3>Dis</h3>
                <p>{{ this.getDiscount }}</p>
            </div>
            <div class="cart-more-total">
                <h3>Total</h3>
                <p ref="total">${{ handleTotal }}</p>
            </div>
        </div>
        <div class="cart-bottom wrapper" @click="order">
            <button id="submit">Submit</button>
            <LoadingUI v-if="loading" />
        </div>
    </div>

</template>
<script>
import $ from 'jquery';
import { HTTP } from '../commom/api/api-commom.js';
import axios from 'axios';
import { mapGetters, mapMutations, mapState,mapActions } from 'vuex';
import LoadingUI from '../components/LoadingUI.vue'
export default {
    data() {
        return {
            loading: false,
            count: [],
            position: [],
        }
    },
    components: {
        LoadingUI
    },
    created() {
        for (let i = 1; i <= 20; i++)
            this.position.push(i)
        axios.get('http://localhost/data/api/bill/selectByStatus.php?status=1')
            .then(data => {
                data.data.forEach(item => {
                    this.count.push(item.position)
                });
            })
            .catch(err => console.log(err))
    },
    computed: {
        ...mapState([
            'discount',        
        ]),
        ...mapGetters([
            'getCart',
            'getDiscount',
            'totalCart',
            
        ]),
        handleTotal() {
            return this.totalCart - this.getDiscount
        },
        setPositions() {
            this.count.forEach(tmp => {
                this.position.forEach((item, index) => {
                    if (item == tmp)
                        this.position.splice(index, 1)
                })
            })
            return this.position
        }
    },
    methods: {
        ...mapMutations([
            'addCart',
            'increaseCart',
            'minusCart',
            // 'deleteItem',
            'clearCart',
            'showForm',
            'order'
        ]),
        ...mapActions([
            'deleteItem'
        ]),
        order() {
            this.loading = !this.loading;
            let temp = document.querySelector('.select').textContent;
            let position = temp.split(' ')[1];
            let total = this.handleTotal;
            let createDate = new Date();
            const bill = {
                nameCustomer: '',
                addressCustomer: '',
                phone: '',
                total,
                statusBill: 1,
                method: 1,
                position,
                createDate

            }
            HTTP.post('bill/create.php', JSON.stringify(bill))
                .then(() => {
                    HTTP.get('bill/read.php')
                        .then(data => {
                            let tmp = data.data.reverse();
                            let idBill = tmp[0].idBill;
                            let detailBill = [];
                            this.getCart.forEach(item => {
                                let arr = {
                                    idBill: idBill,
                                    idProduct: item.id,
                                    nameProduct: item.title,
                                    quantity: item.count,
                                    price: item.price,
                                }
                                detailBill.push(arr);
                            })
                            return detailBill
                        })
                        .then((detailBill) => {
                            HTTP.post('detailBill/create.php', JSON.stringify(detailBill))
                                .then(() => {
                                    document.querySelector('.select').innerText = 'Chọn Bàn';
                                    let index=this.position.findIndex(tmp=>tmp==position)
                                    this.position.splice(index, 1);

                                    this.clearCart();
                                    this.loading = !this.loading
                                })
                        })

                })
                .catch(() => console.log('that bai '))
        },
    },
    mounted() {
        $(document).ready(function () {
            $(".select").click(function () {
                $(".menu").slideToggle("slow");
                $(".menu>li").on('click', function (event) {
                    event.preventDefault();
                    $(".menu").hide("slow");
                    let a1 = $(this).text();
                    // let a2=$('.select').text();
                    $(".select").text(a1)
                })
            });
        });
    }
}
</script>
<style lang="scss" scoped>
$bg: #121212;
$white: #fff;
$light: rgba(112, 112, 112, 0.3);

@keyframes example {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.cart {
    width: 20%;
    background-color: #000;
    color: $white;

    .banner.wrapper {
        padding: 20px 0;
        background-color: transparent;

        img {
            display: block;
            width: 50%;
            object-fit: contain;
        }
    }

    &-top {
        background-color: $bg;

        .container {
            height: 10vh;
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 {
                color: $white;
            }
        }

        &-icon {
            padding: 6px 20px;
            background-color: $light;
            border-radius: 16px;
            cursor: pointer;
        }
    }

    >h3 {
        padding: 12px 0;
    }

    .wrapper {
        width: 95%;
        cursor: auto;
        background-color: $light;
    }

    .dialog {
        display: flex;
        position: relative;
        max-height: 45vh;
        min-height: 45vh;
    }

    &-main {
        background-color: $bg;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px 0;
        max-height: 45vh;
        min-height: 45vh;
        overflow: scroll;

        &::-webkit-scrollbar {
            display: none;
        }

        &-product {
            padding: 12px 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            background-color: $light;
            border-radius: inherit;
            padding-left: 20px;
            box-sizing: border-box;
            position: relative;
            animation-name: example;
            animation-duration: 2s;

            >h1 {
                font-weight: 800;

            }

            >p {
                font-weight: 700;
            }

            &-count {
                display: flex;
                align-items: center;
                gap: 15px;

                div {
                    padding: 4px 6px;
                    background-color: $light;
                    cursor: pointer;
                }

                p {
                    font-size: 125%;
                    font-weight: 800;
                }
            }

            .cancel {
                position: absolute;
                right: 0px;
                top: -5px;
                border-radius: inherit 0 0 0;
                cursor: pointer;
                padding: 10px;
            }
        }

        .position {
            background-color: $light;
            border-radius: inherit;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;



            .select {
                display: inline-block;
                cursor: pointer;
                font-weight: 400;
            }

            .menu {
                display: none;
                width: 100%;
                max-height: 20vh;
                overflow-x: hidden;

                &::-webkit-scrollbar-track {
                    border-radius: 10px;
                    background-color: rgba(112, 112, 112, 0.3);
                }

                &::-webkit-scrollbar {
                    width: 5px;
                    background-color: rgba(112, 112, 112, 0.3);
                }

                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(112, 112, 112, 0.3);
                    background-color: rgba(112, 112, 112, 1);
                }

                li {
                    cursor: pointer;
                    width: 100%;
                    padding: 10px 0;
                    text-align: center;

                    &:hover {
                        background-color: rgba(112, 112, 112, 0.2);
                    }
                }
            }
        }
    }

    &-more {
        margin-top: 3vh;
        background-color: $bg;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px 0;

        &-total {
            width: 90%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;

            &:last-child {
                padding-top: 20px;
                border-top: 1px solid $light;
            }
        }
    }

    &-bottom {
        margin-top: 30px;

        button {
            border: none;
            outline: none;
            background-color: $light;
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
        #submit {
            // margin-top:20px;
            width: 100%;
            height: 100%;
            padding: 10px 0;
            font-size: 150%;
            color: $white;
            cursor: pointer;

            &:hover {
                background-color: $white;
                color: #000;
            }
        }
    }
}
</style>