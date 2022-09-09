<template>
    <div class="detail">
        <div class="content">
            <h2>Bàn {{data[0].position}}</h2>
            <p>Danh sách sản phẩm</p>
            <div class="list">
                <div class="list-item">
                    <p>Sản phẩm</p>
                    <p>SL</p>
                    <p>Giá</p>
                    <p>Thành tiền</p>
                </div>
                <div class="list-item" v-for="item in data" :key="item.id">
                    <p>{{item.nameProduct}}</p>
                    <p>{{item.quantity}}</p>
                    <p>{{item.price}}</p>
                    <p>{{item.price * item.quantity}}</p>
                </div>
            </div>
            <div class="total">
                <p>Tổng Cộng</p>
                <p>{{data[0].total}}</p>
            </div>
            <div class="btn" v-if="this.btn">
                <button @click="pay(data[0].idBill)">Pay</button>
            </div>
            <i class="fa-solid fa-xmark" @click="this.$emit('hide')"></i>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: ['data', 'showDialog','btn'],
    methods: {
        pay(idBill) {
            let tmp = {
                idBill: idBill,
                statusBill: 2
            }
            axios.post('http://localhost/data/api/bill/update.php', JSON.stringify(tmp))
                .then(() => {
                    this.$emit('hide');
                })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/variables";

.detail {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: $light;
    z-index: 33;
    color: $white;

    .content {
        width: 40%;
        // height: 70%;
        background-color: $bg;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 50px;
        box-sizing: border-box;
        border-radius: 15px;
        position: relative;

        >h2 {
            padding-bottom: 15px;
        }

        >p {
            font-style: italic;
        }
    }

    .list {
        max-height: 40vh;
        overflow: scroll;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            display: none;
        }

        &-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            padding: 25px 0;
            border-bottom: 2px solid $white;
            
            p {
                font-size: 115%;
            }

            p:last-child {
                text-align: right;
            }
        }

    }

    .total {
        display: flex;
        justify-content: space-between;
        margin-top: 2vh;

        p {
            font-weight: 800;
            font-size: 150%;
        }
        
    }

    .btn {
        display: flex;
        justify-content: right;
        margin-top: 2vh;

        button {
            padding: 8px 36px;
            border-radius: 16px;
            cursor: pointer;
            font-size: 125%;

            &:hover {
                background-color: rgba(255, 255, 255, 0.85);
                transition: 0.5s linear;
            }
        }
    }

    i {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 150%;
        cursor: pointer;
    }
}
</style>