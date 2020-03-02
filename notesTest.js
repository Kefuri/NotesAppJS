describe('note', () => {
  it('should have content after initializing', () => {
    catNote = new Note('black and fluffy');
    expect(catNote.description).toBe('black and fluffy')
  });
});