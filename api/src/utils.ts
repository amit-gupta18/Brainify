export function random(len : number){
    let options = "qwertyuiop";
    let ans = "";
    for(let i = 0 ; i < len ; i++)
    {
        let index = Math.floor(Math.random() * options.length);
        ans += options[index];
    }
    return ans;
}       