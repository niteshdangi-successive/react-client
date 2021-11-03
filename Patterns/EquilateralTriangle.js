
function EquilateralTriangle(row){

  console.log("Print a Diamond with Rows ",row);
  for (let i = 1; i <= row; i++){
    for (let j = 1; j <= row - i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k <  i ; k++) {
      process.stdout.write("* ");
    }
    process.stdout.write("\n");
  }

}

EquilateralTriangle(5);
