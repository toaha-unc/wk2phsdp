function calculateGrade(grade){
    if(grade>=80 && grade<101) return 'A+';
    else if(grade>=70 && grade<80) return 'A';
    else if(grade>=60 && grade<70) return 'A-';
    else if(grade>=50 && grade<60) return 'B';
    else if(grade>=40 && grade<50) return 'C';
    else if(grade>=33 && grade<40) return 'D';
    else if(grade>=0 && grade<33) return 'A-';
    else return 'Not valid marks';
}

console.log(calculateGrade(80))