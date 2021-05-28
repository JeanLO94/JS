let matriz = [[1,2,3],[1,2,3]]
let matriz2 = [[1,2,3],[1,2,3],[1,2,3]]
let matriz3 = [[0,0,0],[0,0,0]]

for(let i = 0; i<3; i++){

    for(let j = 0; j<3; j++){

        for(let k = 0;k<2;k++){

            matriz3[k][j] +=matriz[k][i]*matriz2[i][j] 

        }


    }
    

}
matriz3.forEach((a)=>console.log(a))
