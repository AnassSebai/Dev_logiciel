
import axios from 'axios';
axios.get('http://webcode.me').then =(resp=>{
    console.log(resp.data);
});