function Letter(ltr) {
  this.letter = ltr;
  this.show = false;
  this.check = function() {
    if(this.letter == ' ') {
      this.show = true;
    } else if (this.show === false) {
      return ' _ ';
    } else {
      return this.letter;
    }
  };
};
