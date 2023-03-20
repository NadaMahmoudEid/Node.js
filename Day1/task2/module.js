function getage(name, birth) {
;
   
    var Datecast= new Date(birth)
    var Age=Datecast.getUTCFullYear();
Age=2023-Age;
    return "Hi " + name + " your Age is " + Age
}

// return constructor 
module.exports = getage;