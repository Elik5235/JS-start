const oldarr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const newarray = oldarr.map((item) => {
   return item * 2;
  })
.reverse().join(',');
