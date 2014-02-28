describe('template', function() {
  it('should expose the templates to __json__', function() {
    example = __json__['example.json']
    expect(example).toBeDefined()
    jsObj = JSON.parse(example)
    expect(jsObj).toBeDefined()
    expect(jsObj.name).toBe('foo')
    expect(jsObj.friends.length).toBe(1)
    expect(jsObj.friends[0].name).toBe('bar')
  })
})
