describe('template', function() {
  it('should expose the templates to __json__', function() {
    json = __json__['example.json'];
    jsObj = JSON.parse json
    expect(jsObj).toBeDefined();
    expect(jsObj.name).toBe('foo');
    expect(jsObj.friends.length).toBe(1);
    expect(jsObj.friends[0].name).toBe('bar');
  })
})
