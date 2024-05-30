import express from 'express';
const app = express();

//app.get('/', (req, res)=>{

  //  res.send('Welcome')
//});

//get a list of 6 joks

app.get('/api/jo',(req, res)=>{
    const jocks = [

        
            {
              "id": 1,
              "title": "Why don't scientists trust atoms?",
              "content": "Because they make up everything!"
            },
            {
              "id": 2,
              "title": "Why did the scarecrow win an award?",
              "content": "Because he was outstanding in his field!"
            },
            {
              "id": 3,
              "title": "How do you organize a space party?",
              "content": "You planet!"
            },
            {
              "id": 4,
              "title": "Why don't some couples go to the gym?",
              "content": "Because some relationships don't work out."
            },
            {
              "id": 5,
              "title": "What do you call fake spaghetti?",
              "content": "An impasta!"
            }
          ];
          res.send(jocks);

          
    


});


const port = process.env.PORT ||3000;
app.listen(port,()=>{

    console.log('serve at htpp:/localhost:${port}');


});