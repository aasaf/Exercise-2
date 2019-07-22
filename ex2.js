function clicked()
{
    //alert(document.getElementById("nameTxt").value)
    //call new Person with values from input boxes
    //-- create Person
    const _name = document.getElementById("nameTxt").value
    const _age = document.getElementById("ageTxt").value;
    const _password = document.getElementById("passwordTxt").value;
    const _gender = document.querySelector('input[name = "gender"]:checked').value;
    const car  = document.getElementById("carType")
    const _car_type = car.options[car.selectedIndex].text;
    const _is_have_bike = document.getElementById("boolbike").checked;
    const p1 =new Person(_name,_age,_password,_gender,_car_type,_is_have_bike)


    console.log(p1)
    p1.toString()
    console.log(p1)
    // -- use class



}


    
function Person(name, age, password, gender, car_type, is_have_bike)
{

    this.name = name
    this.age = age
    this.password = password
    this.gender = gender
    this.car_type = car_type
    this.is_have_bike = is_have_bike

    this.toString = function(){
       const {name , age, password , gender ,car_type , is_have_bike} = this
       return `${name} ${age} ${password} ${gender} ${car_type} ${is_have_bike}`
    }
}