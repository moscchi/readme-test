const PORT = require('./configuration/environment')
const app = require('./server/server')

app.listen(PORT, () => {
    console.log('Server up! on ', PORT);
})