
module.exports = function(app) {
    var router = app.loopback.Router();
    router.post('/api/sendMail', function(req, res) {
        var name = req.body.name
        var email = req.body.email 
        var city = req.body.city 
        var type = req.body.carType 
        var html = '<h1>Carwash schedule</h1><br>'+'name :'+name+'<br>'+'email :'+email+'<br>'+'city :'+city+'<br>'+'car type :'+type
        app.models.Email.send({
            to: 'muhammed.azhar@eygert.com',//'astoncarwash@gmail.com
            from: 'eygerttechnologies@gmail.com',
            subject: 'Car wash schedule request',
            text: 'User requested a car wash schedule at astoncarwash.in',
            html: html
          }, function(err, mail) {
            if (err) {
                // var error = new Error();
                //     error.status = 500;
                //     error.message = 'Could not send email due to ;
                //     next(error);
                res.send(err);
            }
            else {
                res.send({success: true, message: 'email sent!'});
            }
          });
    });

    router.get('/api/getServerTime', function(req, res) {
        var now = new Date()
        res.send(now)
    });
    app.use(router);
  }