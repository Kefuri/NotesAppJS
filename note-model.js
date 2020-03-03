function Note(description) {
  this.text = description;
};

Note.prototype.getText = function(){
  return this.text
};