
var mocky = require('mocky');
var fs = require('fs');

mocky.createServer([
{
    // ユーザ情報
    url: '/api/v01/user/get',
    method: 'post',
    res: function(req, res, callback) {
        var params = JSON.parse(req.body); // 受け取ったjsonデータを参照する場合
        var f = '/node/app/api/user-' + params.userid + '.json';  // パラメタ別のjsonファイル
        fs.readFile(f, 'utf8', function(err, text) {
            callback(null, {
                status: 200,
                body: text
            });
        });
    }
},
  {
    // ユーザリスト
    url: '/api/v01/user/list',
    method: 'post',
    res: function(req, res, callback) {
      fs.readFile('/node/app/api/user-list.json', 'utf8', function(err, text) {
        callback(null, {
          status: 200,
          body: text
        });
      });
    }
  }

]).listen(4321);

