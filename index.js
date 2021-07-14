const express = require ('express');
const app = express();
const path = require('path');

const friends = require('./model/friendsList');



const PORT = 3000;
// get all friends
app.get('/', (req, res) =>{
res.json(friends)
})

// get single friends
 app.get('/friend/:id', (req, res)=>{
     const found = friends.find(friend=>friend.id ===parseInt(req.params.id))
     if (found) {
        res.json(friends.find(friend=> friend.id ===parseInt(req.params.id)))
     }
     
else{
    res.status(404).send(`friend not found with id ${parseInt(req.params.id)}`)
}
 })


app.listen(PORT, () => {
    console.log(`server started to run on port http://127.0.0.1:${PORT}`);
});