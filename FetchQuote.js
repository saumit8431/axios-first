import {useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function FetchQuote() {
    const [quote, setQuote] = useState('');
    const getQuote = () =>{
        axios.get('https://quotable.io/random')
        .then(res => {
            console.log(res.data.content)
            setQuote(res.data.content)
        }).catch(err => {
            console.log(err)
        })
    }
  return (

 <div className="container bg-light my-5">
<div className="col-md-12 text-center">
    <button type="button" className="btn btn-primary" onClick={getQuote} >Get Quote</button>
    {quote && <p>{quote}</p>}
    
</div> 
</div> 


  );
}

export default FetchQuote