function StudentDetails(name,rollno,Class,Section){
this.name=name;
this.rollno=rollno;
this.Class=Class;
this.Section=Section;
this.marks=function(science,maths,socialScience,english,hindi){
    this.science=science;
    this.maths=maths;
    this.socialScience=socialScience;
    this.english=english;
    this.hindi=hindi;
}


this.percentage=function(num){
    for(i=0;i<this.marks.length;i++){
   num+=(this.marks.length[i]*100)/500
    }
}

}

let student=new StudentDetails("priyanshu",45,10,"A");
console.log(student);

student.marks(50,70,100,70,70)
