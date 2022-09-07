let str = "rishav";
let N = str.length-1;
let count=0;

for(let i=0; i<=N; i++){

  let substr ="";
  for(let j=i; j<=N; j++){

    substr = substr + str[i];
  if(substr[0]==substr[substr.length-1]){
    count++;
  }
    
  }
}