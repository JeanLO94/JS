let vet =  [1,2,2,2,3,3,3,4,4,4,66,66,5,5,5,5,5,3,0]
let vet1 = [2,2,2,3,4,4,4,4,5,5,5]
let vet2 = []
let l = true
for(let i = 0; i < vet.length;i++){

    for(let j = 0; j<vet1.length;j++){

        if(vet[i] == vet1[j]){

            for(let k = 0;k <vet2.length;k++){

                if(vet2[k] == vet1[j]){

                    l = false

                }


            }

            if(l == true){

                vet2.push(vet1[j])

            }
            l = true
        }

    }

}
console.log(vet2)
