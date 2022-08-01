// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
// const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
// const myDate = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
// const myDate = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const myDate = new Date(year,month,date,hour,minute,second,millisecond); 

// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
    const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
    const diffDate = new Date(diff_ms);
    
    return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge('2000-01-22')); // 22 tahun