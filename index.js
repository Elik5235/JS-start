function Federation(title, popul, area) {
  this.title = title;
  this.popul = popul;
  this.area = area;

  this.getTitle = function () {
    return this.popul / this.area;
  };
}
const federation1 = new Federation("США",20, 50);
