n=11
string=""
num=1
for (let i = 1; i < n+1; i++) {
    
    for (let k = 0; k < i; k++){
        if (i==1 || k==(i-1)){
            string=string+"*"
        }
        else{
            string=string+num
            if(k<i/2){
            num=num+1
            }
            else{
                num--
            }
        }
    }
    console.log(string)
}
