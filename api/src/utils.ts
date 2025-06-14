export function random(len : number){
    let options = "qwertyuiop";
    let ans = "";
    for(let i = 0 ; i < len ; i++)
    {
        ans+= options;
    }
    return ans;
}       