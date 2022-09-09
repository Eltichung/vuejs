<template>
    <!-- <div id="a1"></div> -->
    <form action="">
        <h3>Nhập thông tin khách hàng</h3>
        <i class="fa-solid fa-xmark" @click="$emit('close', true)"></i>
        <div class="form-item">
            <label for="">Tên khách hàng</label>
            <input type="text">
        </div>
        <div class="form-item">
            <label for="">Số điện thoại</label>
            <input type="text">
        </div>
        <div class="form-item">
            <label for="">Địa chỉ</label>
            <input type="text">
        </div>
        <div class="form-item">
            <button class="submit">Place Order</button>
        </div>
    </form>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "../assets/style/variables";

// #a1
// {
//     width:100vw;
//     height:100vh;
//     top:0;
//     left:0;
// }
form {
    display: block;
    background-color: $light;
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
    justify-content: center;
    position: relative;

    i {
        position: absolute;
        right: 0px;
        top: -5px;
        border-radius: inherit 0 0 0;
        cursor: pointer;
        padding: 10px;
        font-size: 125%;
    }

    h3 {
        margin-bottom: 20px;
        width: 80%;
        margin: 0 auto;
    }

    .form-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 80%;
        margin: 0 auto;

        label {
            color: $white;
        }

        input {
            background-color: $light;
            outline: none;
            border: none;
            color: $white;
            border-radius: 20px;
            padding: 5px 0;
            padding-left: 15px;
            box-sizing: border-box;
            font-size: 125%;
        }

        button {
            border: none;
            outline: none;
            background-color: $light;
            font-size: 100%;
            color: $white;
            cursor: pointer;
            border-radius: 20px;
            white-space: nowrap;
        }

        .submit {
            margin-top: 20px;
            border: none;
            outline: none;
            background-color: $light;
            padding: 12px 0;
            font-size: 100%;
            color: $white;
            cursor: pointer;
            border-radius: 20px;

            &:hover {
                background-color: $white;
                color: #000;
            }
        }

        .option {
            display:grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 30px;
            button
            {
                padding: 8px 0;
                box-sizing: border-box;
            }
        }
    }
}
</style>