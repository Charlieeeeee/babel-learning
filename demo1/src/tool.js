export const qianFen = (numStr)=>{
    return numStr.replace(/(?!^)(?=(\d{3})+$)/g,',');
}