var express = require('express');
var app = express();

var upload = require('multer')();

app.get('/', (req, res) => {
    var body = '<p>Submit a file to view its filesize</p>';
    body += '<form action="/get-file-size" method="post" enctype="multipart/form-data">';
    body += '<input type="file" name="file" id="file">';
    body += '<button name="submit" type="submit">Submit</button>'
    body += '</form>';
    res.send(body);
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
    if (req.file) res.send({size: req.file.size});
    else res.send({size: null});
});

app.listen(process.env.PORT || 8000);
