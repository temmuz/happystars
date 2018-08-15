const api = require('../Components/api')

// A simple example test
describe('#getApi() using Promises', () => {
  it('should load user data', () => {

    return api.getApi('star').then(function(response) {

      return response.json();
    }).then(function(myJson) {
      console.log(Object.keys(myJson.stars[0]));
      expect(myJson.stars[0]).toBeDefined()
      expect(Object.keys(myJson.stars[0])).toEqual(["id", "name", "color", "universeId"])
    })
  })
})
