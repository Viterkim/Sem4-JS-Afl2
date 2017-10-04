var nock = require('nock');
var n = nock('http://myapp.iriscouch.com')
                .get('/users/1')
                .reply(200, {id: '123ABC',username: 'kurt', email: 'kurt@gmail.com'});

describe("Testing nock"), function(){
  it("Get on myapp"), function(){
    n.get()
  }
}