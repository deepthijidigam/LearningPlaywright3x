let i = 3, count = 0;
do {
  count++;
} while (i-- > 0);
console.log(count + " " + i);
// c            i
// 1    3>0     2
// 2    2>0     1
// 3    1>0     0
// 4            -1