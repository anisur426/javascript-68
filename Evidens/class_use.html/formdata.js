class FormData{
    constructor(name,address,phone,District){
        this.name =name;
        this.address= address;
        this.phone =phone;
        this.District=District;
  }
  DataDisplay(){
     let output="";
        output += "Name:"+this.name+"<br>";
         output += "address:"+this.address+"<br>";
          output += "phone:"+this.phone+"<br>";
          output += "District:"+this.District+"<br";
          return output ;
  }
}