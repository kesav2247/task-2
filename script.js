let object1 = {
    person1 : "kesavan",
    age : 21,
};

let obj2 = {
    perrson2 : "kesavan",
    age : 21,
};


console.log(JSON.stringify(object1) === JSON.stringify(obj2))

let xhtpp = new XMLHttpRequest ();
xhtpp.onload = function (){
       let response = JSON.parse(this.responseText)
       console.log(response.map((country) => {
        return country.flag
    }));
};

xhtpp.open ('GET' , "https://restcountries.com/v3.1/all" , true)
xhtpp.send()

