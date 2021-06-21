const app = require('./app');

require('./database');


// --- Init the app
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});