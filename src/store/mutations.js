export default {
   
        addCart(state, item) {
            if (state.cart.includes(item)) {
                item.count++;
            }
            else {
                item.count = 1;
                state.cart.push(item)
            }
        },
        increaseCart(state, item) {
            item.count++
        },
        minusCart(state, item) {
            item.count--
            if (item.count < 1)
                item.count = 1
        },
        deleteItem(state, index) {
            state.cart.splice(index, 1)
        },
        clearCart(state) {
            state.cart = [];
        },
        showForm(state) {
            state.showDialog = !state.showDialog;
        },
        // order(){
        //     let position=document.querySelector('.drop').textContent;
        //     const bill={
        //         nameCustomer:'' ,
        //         addressCustomer:'' ,
        //         phone:'',
        //         statusBill: 1,
        //         method: 1,
        //         position,
        //     }
        //     console.log(bill);
        // }
    
}
