const cron = require('node-cron');
const axios = require('axios')

// ...

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  const data = {
  "category": "Carbs",
        "name": "ttt",
        "quantity": 1
}

axios
  .post('https://download-e903e.firebaseio.com//shopping-list.json', data)
  .then(res => {
    console.log(`Status: ${res.status}`)
    console.log('Body: ', res.data)
  })
  .catch(err => {
    console.error(err)
  })
});