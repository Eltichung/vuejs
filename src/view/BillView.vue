<template>
    <div class="bill-view">
        <div class="title">
            <div class="container">
                <h1>List Bill</h1>
            </div>
        </div>
        <div class="list container">
            <div class="tab">
                <div class="tab-link active" data-tab="1" @click="filterData(1)" ref="index">
                    <p>Confirm</p>
                </div>
                <div class="tab-link" data-tab="2" @click="filterData(2)" ref="index">
                    <p>Success</p>
                </div>
                <div class="tab-link" data-tab="3" @click="filterData(3)" ref="index">
                    <p>Fail</p>
                </div>
            </div>
            <div class="list-item">
                <p>ID</p>
                <p>Name</p>
                <p>Address</p>
                <p>Phone</p>
                <p>Total</p>
                <p>Date</p>
                <p>Staff</p>
            </div>
            <div class="list-item" v-for="item in showData" :key="item.id">
                <p>{{item.idBill}}</p>
                <p>{{item.nameCustomer}}</p>
                <p>{{item.addressCustomer}}</p>
                <p>{{item.phone}}</p>
                <p>{{item.total}}</p>
                <p>{{item.createDate}}</p>
                <p>CHUhngngng</p>
                <p class="more" @click="detail(item.idBill,item.total)">More</p>
            </div>
        </div>
        <detailBill :data="detailBill" v-if="show" @hide="hide" :btn='false'/>
    </div>
</template>

<script>
import $ from 'jquery';
import axios from 'axios';
import detailBill from '../components/DetailBill.vue';
export default {
    components: {
        detailBill
    },
    data() {
        return {
            data:[],
            detailBill: [],
            tabIndex: 1,
            show:false,
        }
    },
    created() {
        

        axios.get('http://localhost/data/api/bill/selectByMethod.php?method=2')
            .then(tmp => {
                this.data = tmp.data
            })
            .catch(err => console.log(err))
    },
    computed: {
        showData() {       
            return this.data.filter(item=>item.statusBill==this.tabIndex);
        }
    },
    methods: {
        filterData(index)
        {
            this.tabIndex=index;
        },
        detail(id,total){      
            axios.get(`http://localhost/data/api/detailBill/selectByID.php?id=${id}`)
            .then(data => {
                this.detailBill = data.data
                console.log(data.data)
                this.detailBill.forEach(item=>{
                    item.total=total,
                    item.position='';
                })
                this.show=true;
                document.querySelector('.btn').style.display="none";
            })
            .catch(err => console.log(err))
        },
        hide()
        {
            this.show=false;
        }
    },
    mounted() {
        $('.tab-link').click(function () {
            var tabID = $(this).attr('data-tab');
          
            $(this).addClass('active').siblings().removeClass('active');

            $('#tab-' + tabID).addClass('active').siblings().removeClass('active');         
        });
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/style/variables";

.btn
{
    display:none;
}
.tab-link:nth-of-type(2).active {
    p {
        color: #3CCF4E !important;
    }

    color: #3CCF4E;
    border-bottom: 2px solid #3CCF4E
}

.tab-link:nth-of-type(1).active {
    p {
        color: #1790D2 !important;
    }

    color: #1790D2;
    border-bottom: 2px solid #1790D2
}

.tab-link:nth-of-type(3).active {
    color: #EE6534;

    p {
        color: #EE6534 !important;
    }

    border-bottom: 2px solid #EE6534
}

.tab-link:hover {
    p {
        color: #999;
    }

    border-bottom: 2px solid #999;
}
h1 {
    word-wrap: normal;
}

.bill-view {
    width: 85%;

    .list {
        .tab {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-bottom: 40px;

            >div {
                cursor: pointer;
                padding: 20px;
                padding-top: 0;
            }

            p {
                display: inline-block;
                font-size: 135%;
                font-weight: 700;
                font-family: "Poppins", sans-serif;
                color: #999;
                // text-transform: uppercase;
            }
        }

        &-item {
            display: grid;
            grid-template-columns: 1fr repeat(3, 3fr) repeat(4, 2fr);
            grid-gap: 30px;
            padding: 15px;
            border-bottom: 2px solid $light;

            .more {
                color: #448EF6;
                font-style: italic;
                cursor: pointer;
            }
        }

    }
}
</style>