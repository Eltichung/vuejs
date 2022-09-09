import axios from "axios"
export default
{
   data(){
    axios.get('http://localhost/data/api/bill/filter.php?status=1&method=1')
    .then(data=>{
        data.data.forEach(item=>{
            this.count.push(item.position)
        });
        console.log(this.count)
    })
    .catch(err=>console.log(err)) 
   }
}