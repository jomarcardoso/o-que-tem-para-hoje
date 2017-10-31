var request = new RequestService();

function testRequestApi() {
    request.get('/arezzo-api/function-test-api')
    .done(function(data) {
      console.log(data);
    });
}