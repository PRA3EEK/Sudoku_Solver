let mat = [];
let arr1 = [];
// arr1.length = 9;
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];

// console.log(arr1[0]);


document.getElementById("reset").addEventListener("click", fun = () => {
   document.getElementById("msg").innerText = "";
mat = [];
       arr1 = [];
     // arr1.length = 9;
      arr2 = [];
      arr3 = [];
      arr4 = [];
      arr5 = [];
      arr6 = [];
      arr7 = [];
      arr8 = [];
      arr9 = [];
    let inputs = document.querySelectorAll("input");

    for(let i=0 ; i<inputs.length ; i++){
        inputs[i].value = "";
    }
    flag = true;
})

let checkForAlphabetInRowOne = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr1[i] == ""){
            // console.log("prateek chauhan");
            arr1[i] = 0;
        }else{
            if(isNaN(parseInt(arr1[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr1[i] = parseInt(arr1[i]);
            }
        }
    }

    return true;
    
}

let checkForAlphabetInRowTwo = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr2[i] == ""){
            // console.log("prateek chauhan");
            arr2[i] = 0;
        }else{
            if(isNaN(parseInt(arr2[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr2[i] = parseInt(arr2[i]);
            }
        }
    }

    return true;    
}

let checkForAlphabetInRowThree = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr3[i] == ""){
            // console.log("prateek chauhan");
            arr3[i] = 0;
        }else{
            if(isNaN(parseInt(arr3[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr3[i] = parseInt(arr3[i]);
            }
        }
    }

    return true;    
}

let checkForAlphabetInRowFour = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr4[i] == ""){
            // console.log("prateek chauhan");
            arr4[i] = 0;
        }else{
            if(isNaN(parseInt(arr4[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr4[i] = parseInt(arr4[i]);
            }
        }
    }

    return true;
}

let checkForAlphabetInRowFive = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr5[i] == ""){
            // console.log("prateek chauhan");
            arr5[i] = 0;
        }else{
            if(isNaN(parseInt(arr5[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr5[i] = parseInt(arr5[i]);
            }
        }
    }

    return true;
}

let checkForAlphabetInRowSix = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr6[i] == ""){
            // console.log("prateek chauhan");
            arr6[i] = 0;
        }else{
            if(isNaN(parseInt(arr6[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr6[i] = parseInt(arr6[i]);
            }
        }
    }

    return true;
}

let checkForAlphabetInRowSeven = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr7[i] == ""){
            // console.log("prateek chauhan");
            arr7[i] = 0;
        }else{
            if(isNaN(parseInt(arr7[i]))){
                // console.log(arr1[i]);
                return false;
            }
            else{
                arr7[i] = parseInt(arr7[i]);
            }
        }
    }

    return true;
}

let checkForAlphabetInRowEight = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr8[i] == ""){
            // console.log("prateek chauhan");
            arr8[i] = 0;
        }else{
            if(isNaN(parseInt(arr8[i]))){
                // console.log(arr1[i]);
                return false;
            }else{
                arr8[i] = parseInt(arr8[i]);
            }
        }
    }

    return true;
}

let checkForAlphabetInRowNine = () => {

    for(let i=0 ; i< 9 ; i++){
        if(arr9[i] == ""){
            // console.log("prateek chauhan");
            arr9[i] = 0;
        }else{
            if(isNaN(parseInt(arr9[i]))){
                // console.log(arr1[i]);
                return false;
            }else{
                arr9[i] = parseInt(arr9[i]);
            }
        }
    }

    return true;
}


let validSudoku = () => {
    for(let i=0 ; i<9 ; i++){
        for(let j=0 ; j<9 ; j++){
            if(mat[i][j]!=0){
                let num = mat[i][j];
                mat[i][j] = 0;
                if(check(i, j, mat, num) == 1){
                    mat[i][j]=num;
                    return 1; 
                }else if(check(i, j, mat, num) == 2){
                    mat[i][j]=num;
                    return 2; 
                }else if(check(i, j, mat, num) == 3){
                    mat[i][j]=num;
                    return 3; 
                }
                mat[i][j] = num;
            }
        }
       }
       return 4;
}

let check = (row, col, mat, num) => {

    for(let i=0 ; i<9 ; i++){
      if(mat[row][i] == num){
        return 1;
      }
    }

    for(let i=0 ; i<9 ; i++){
        if(mat[i][col] == num){
          return 2;
        }
      }    

   let x = Math.floor((row/3))*3;
   let y = Math.floor((col/3))*3;

   for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<3 ; j++){
        if(mat[i+x][j+y] == num){
            return 3;
        }
    }
   }

   return 4;
}
// console.log(mat);
let flag = true;
let sudokuSolver = function(row, col){
    
    if(!flag){
      return;
    }
      
      if(row == 9){
        
                document.getElementById("b1").value = mat[0][0];
                document.getElementById("b2").value = mat[0][1];
                document.getElementById("b3").value = mat[0][2];
                document.getElementById("b10").value = mat[0][3];
                document.getElementById("b11").value = mat[0][4];
                document.getElementById("b12").value = mat[0][5];
                document.getElementById("b19").value = mat[0][6];
                document.getElementById("b20").value = mat[0][7];
                document.getElementById("b21").value = mat[0][8];

                document.getElementById("b4").value = mat[1][0];
                document.getElementById("b5").value = mat[1][1];
                document.getElementById("b6").value = mat[1][2];
                document.getElementById("b13").value = mat[1][3];
                document.getElementById("b14").value = mat[1][4];
                document.getElementById("b15").value = mat[1][5];
                document.getElementById("b22").value = mat[1][6];
                document.getElementById("b23").value = mat[1][7];
                document.getElementById("b24").value = mat[1][8];

                document.getElementById("b7").value = mat[2][0];
                document.getElementById("b8").value = mat[2][1];
                document.getElementById("b9").value = mat[2][2];
                document.getElementById("b16").value = mat[2][3];
                document.getElementById("b17").value = mat[2][4];
                document.getElementById("b18").value = mat[2][5];
                document.getElementById("b25").value = mat[2][6];
                document.getElementById("b26").value = mat[2][7];
                document.getElementById("b27").value = mat[2][8];
   
                document.getElementById("b28").value = mat[3][0];
                document.getElementById("b29").value = mat[3][1];
                document.getElementById("b30").value = mat[3][2];
                document.getElementById("b37").value = mat[3][3];
                document.getElementById("b38").value = mat[3][4];
                document.getElementById("b39").value = mat[3][5];
                document.getElementById("b46").value = mat[3][6];
                document.getElementById("b47").value = mat[3][7];
                document.getElementById("b48").value = mat[3][8];
                
                document.getElementById("b31").value = mat[4][0];
                document.getElementById("b32").value = mat[4][1];
                document.getElementById("b33").value = mat[4][2];
                document.getElementById("b40").value = mat[4][3];
                document.getElementById("b41").value = mat[4][4];
                document.getElementById("b42").value = mat[4][5];
                document.getElementById("b49").value = mat[4][6];
                document.getElementById("b50").value = mat[4][7];
                document.getElementById("b51").value = mat[4][8];
             
                document.getElementById("b34").value = mat[5][0];
                document.getElementById("b35").value = mat[5][1];
                document.getElementById("b36").value = mat[5][2];
                document.getElementById("b43").value = mat[5][3];
                document.getElementById("b44").value = mat[5][4];
                document.getElementById("b45").value = mat[5][5];
                document.getElementById("b52").value = mat[5][6];
                document.getElementById("b53").value = mat[5][7];
                document.getElementById("b54").value = mat[5][8];

                document.getElementById("b55").value = mat[6][0];
                document.getElementById("b56").value = mat[6][1];
                document.getElementById("b57").value = mat[6][2];
                document.getElementById("b64").value = mat[6][3];
                document.getElementById("b65").value = mat[6][4];
                document.getElementById("b66").value = mat[6][5];
                document.getElementById("b73").value = mat[6][6];
                document.getElementById("b74").value = mat[6][7];
                document.getElementById("b75").value = mat[6][8];

                document.getElementById("b58").value = mat[7][0];
                document.getElementById("b59").value = mat[7][1];
                document.getElementById("b60").value = mat[7][2];
                document.getElementById("b67").value = mat[7][3];
                document.getElementById("b68").value = mat[7][4];
                document.getElementById("b69").value = mat[7][5];
                document.getElementById("b76").value = mat[7][6];
                document.getElementById("b77").value = mat[7][7];
                document.getElementById("b78").value = mat[7][8];

                document.getElementById("b61").value = mat[8][0];
                document.getElementById("b62").value = mat[8][1];
                document.getElementById("b63").value = mat[8][2];
                document.getElementById("b70").value = mat[8][3];
                document.getElementById("b71").value = mat[8][4];
                document.getElementById("b72").value = mat[8][5];
                document.getElementById("b79").value = mat[8][6];
                document.getElementById("b80").value = mat[8][7];
                document.getElementById("b81").value = mat[8][8];

          
        
        console.log("pratee chauhan");
        flag = false;
        // console.log(flag);
        return;
      }
    
        let next_row = 0;
        let next_col = 0;
    
        if(col == 8){
         next_row = row+1;
         next_col = 0;
        }else{
            next_row = row;
            next_col = col+1;
        }
       
        if(mat[row][col] == 0){
            for(let i=1 ; i<=9 ; i++){
                if(secondCheck(row, col, i)){
                  mat[row][col] = i;
                  sudokuSolver(next_row, next_col);
                  mat[row][col] = 0;
                }
            }
        }else{
            sudokuSolver(next_row, next_col);
        }

    }
    
    let secondCheck = (row, col, num) => {
    
        for(let i=0 ; i<9 ; i++){
          if(mat[row][i] == num){
            return false;
          }
        }
    
        for(let i=0 ; i<9 ; i++){
            if(mat[i][col] == num){
              return false;
            }
          }    
    
       let x = Math.floor((row/3))*3;
       let y = Math.floor((col/3))*3;
    
       for(let i=0 ; i<3 ; i++){
        for(let j=0 ; j<3 ; j++){
            if(mat[i+x][j+y] == num){
                return false;
            }
        }
       }
    
       return true;
    }
    
    document.getElementById("solve").addEventListener("click", fun =() => {
    //   console.log(mat);
        mat = [];
        arr1 = [];
      // arr1.length = 9;
       arr2 = [];
       arr3 = [];
       arr4 = [];
       arr5 = [];
       arr6 = [];
       arr7 = [];
       arr8 = [];
       arr9 = [];
    
        document.getElementById("msg").innerText = "";
        
         arr1.push(document.getElementById("b1").value);
         arr1.push(document.getElementById("b2").value);
         arr1.push(document.getElementById("b3").value);
         arr1.push(document.getElementById("b10").value);
         arr1.push(document.getElementById("b11").value);
         arr1.push(document.getElementById("b12").value);
         arr1.push(document.getElementById("b19").value);
         arr1.push(document.getElementById("b20").value);
         arr1.push(document.getElementById("b21").value);
     
         arr2.push(document.getElementById("b4").value);
         arr2.push(document.getElementById("b5").value);
         arr2.push(document.getElementById("b6").value);
         arr2.push(document.getElementById("b13").value);
         arr2.push(document.getElementById("b14").value);
         arr2.push(document.getElementById("b15").value);
         arr2.push(document.getElementById("b22").value);
         arr2.push(document.getElementById("b23").value);
         arr2.push(document.getElementById("b24").value);
     
         arr3.push(document.getElementById("b7").value);
         arr3.push(document.getElementById("b8").value);
         arr3.push(document.getElementById("b9").value);
         arr3.push(document.getElementById("b16").value);
         arr3.push(document.getElementById("b17").value);
         arr3.push(document.getElementById("b18").value);
         arr3.push(document.getElementById("b25").value);
         arr3.push(document.getElementById("b26").value);
         arr3.push(document.getElementById("b27").value);
     
         arr4.push(document.getElementById("b28").value);
         arr4.push(document.getElementById("b29").value);
         arr4.push(document.getElementById("b30").value);
         arr4.push(document.getElementById("b37").value);
         arr4.push(document.getElementById("b38").value);
         arr4.push(document.getElementById("b39").value);
         arr4.push(document.getElementById("b46").value);
         arr4.push(document.getElementById("b47").value);
         arr4.push(document.getElementById("b48").value);
     
         arr5.push(document.getElementById("b31").value);
         arr5.push(document.getElementById("b32").value);
         arr5.push(document.getElementById("b33").value);
         arr5.push(document.getElementById("b40").value);
         arr5.push(document.getElementById("b41").value);
         arr5.push(document.getElementById("b42").value);
         arr5.push(document.getElementById("b49").value);
         arr5.push(document.getElementById("b50").value);
         arr5.push(document.getElementById("b51").value);
         
         arr6.push(document.getElementById("b34").value);
         arr6.push(document.getElementById("b35").value);
         arr6.push(document.getElementById("b36").value);
         arr6.push(document.getElementById("b43").value);
         arr6.push(document.getElementById("b44").value);
         arr6.push(document.getElementById("b45").value);
         arr6.push(document.getElementById("b52").value);
         arr6.push(document.getElementById("b53").value);
         arr6.push(document.getElementById("b54").value);
     
         arr7.push(document.getElementById("b55").value);
         arr7.push(document.getElementById("b56").value);
         arr7.push(document.getElementById("b57").value);
         arr7.push(document.getElementById("b64").value);
         arr7.push(document.getElementById("b65").value);
         arr7.push(document.getElementById("b66").value);
         arr7.push(document.getElementById("b73").value);
         arr7.push(document.getElementById("b74").value);
         arr7.push(document.getElementById("b75").value);
         
         arr8.push(document.getElementById("b58").value);
         arr8.push(document.getElementById("b59").value);
         arr8.push(document.getElementById("b60").value);
         arr8.push(document.getElementById("b67").value);
         arr8.push(document.getElementById("b68").value);
         arr8.push(document.getElementById("b69").value);
         arr8.push(document.getElementById("b76").value);
         arr8.push(document.getElementById("b77").value);
         arr8.push(document.getElementById("b78").value);
     
     
         arr9.push(document.getElementById("b61").value);
         arr9.push(document.getElementById("b62").value);
         arr9.push(document.getElementById("b63").value);
         arr9.push(document.getElementById("b70").value);
         arr9.push(document.getElementById("b71").value);
         arr9.push(document.getElementById("b72").value);
         arr9.push(document.getElementById("b79").value);
         arr9.push(document.getElementById("b80").value);
         arr9.push(document.getElementById("b81").value);
     
         
       if(!checkForAlphabetInRowOne() || !checkForAlphabetInRowTwo() || !checkForAlphabetInRowThree() || !checkForAlphabetInRowFour() || !checkForAlphabetInRowFive() || !checkForAlphabetInRowSix() || !checkForAlphabetInRowSeven() || !checkForAlphabetInRowEight() || !checkForAlphabetInRowNine()){
         document.getElementById("msg").innerText = "Invalid input type Alphabet!";
       } else{
        
         mat[0] = arr1;
         mat[1] = arr2;
         mat[2] = arr3;
         mat[3] = arr4;
         mat[4] = arr5;
         mat[5] = arr6;
         mat[6] = arr7;
         mat[7] = arr8;
         mat[8] = arr9;
          console.log(mat);
         if(validSudoku() == 1){
            
         document.getElementById("msg").innerText = "Same number exists in the row!";
     
         }
         else if(validSudoku() == 2){
     
             document.getElementById("msg").innerText = "Same number exists in the column!";
     
         }else if(validSudoku() == 3) {
             
             document.getElementById("msg").innerText = "Same number exists in the box!"; 
     
         }else{
         //  document.getElementById("msg").innerText = "Invalid Sudoku";
        //   let flag = true
          sudokuSolver(0, 0);
         //  console.log(mat);
         }
     
       }
         
    //    console.log(mat);
 
     })