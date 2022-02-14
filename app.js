const express = require('express');
const app = express();

app.get('/', (req, res) => res.json(
    {
        message:"Automate all the things!",
        timestamp:Math.round(new Date().getTime() / 1000)
    }
));

app.listen(3000, () => {
  console.log('My rest API running on port 3000!');
});
