describe('note', () => {
  it('should have content after initializing', () => {
    catNote = new Note('black and fluffy');
    expect(catNote.text).toBe('black and fluffy')
  });
  it('should show note text on calling the note method', () => {
    catNote = new Note('black and fluffy');
    expect(catNote.getText()).toBe('black and fluffy')
  })
});