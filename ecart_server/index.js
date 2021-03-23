//require modules
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const bodyparser = require('body-parser');
const fetch = require('node-fetch');
const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APP_KEY, process.env.ADMIN_KEY)
const index = client.initIndex('products')

//middlewares

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));

//routing

app.get('/api/allProducts', (request, response) => {
  let url = `https://fakestoreapi.herokuapp.com/products`
  fetch(url).then((response) => {
      return response.json();
    }).then((products) => {
    //    console.log(result);
        return res.send(products)
    })
    .catch((error) => {
      console.log('Error While getting Data', error);
      return response.send(error)
    })
    index.saveObject(this.result,{autoGenerateObjectIDIfNotExist: true},function(err,content){
        if(err){
            console.log(err);
        }
    })
})
app.get('/search', (request, response) => {
  const query = request.body.query;

  index.search(query)
    .then(({
      hits
    }) => {
    //   console.log(hits);
      return res.send(hits)
    }).catch(
      error => {
        // console.log(error);
        response.send(error)
      }
    )

})

//server listining
app.listen(config.server.PORT, (request,response)=>{
    if(config.server.HOST !='localhost' && config.server.HOST != '0.0.0.0')
    {
        console.log(`Express server listening on http://${config.server.HOST}:${config.server.PORT}`);
    } else {
        config.server.HOST ='localhost';
        console.log(`Express server listening on http://${config.server.HOST}:${config.server.PORT}`);
    }
});