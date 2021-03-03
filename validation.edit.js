function formValidation() {
    var uid = document.registform.username;
    var name = document.registform.name;
    var uemail = document.registform.email;
    var pen=document.registform.penname;
    
    
    
        if(validateID(uid,6,45)==true) { 
             
                if(allLetter(name)==true) {
                    if(penname(pen)==true) {
                        if(validateEmail(uemail)==true) {
                            
                            }else{
                                return false;
                            }
                    }else{
                        return false;
                    }
                }else{
                    return false;
                }
            
        }else{
            return false;
        }
        
       
    return true;
        
    
   
}
function validateID(uid,min,max) {
    var error = "";
    var illegalChars = /\W/; //

    if(uid.value == "") {
        uid.style.background = 'Yellow';
        error = "กรุณป้อน Username\n";
        alert(error);
        uid.focus();
        return false;
    }
    else if ((uid.value.length < min) || (uid.value.length > max)) {
        uid.style.background = 'Yellow';
        error = "Username ต้องมีความยาว "+min+"-"+max+" ตัวอักษร\n";
        alert(error);
        uid.focus();
        return false;
    }
    else if (illegalChars.test(uid.value)) {
        uid.style.background = 'Yellow';
        error = "Username มีตัวอักษรที่ไม่ได้รับอนุญาติ\n";
        alert(error);
        uid.focus();
        return false;
    }
    else{
        uid.style.background = 'White';
    }
    return true;
}

function allname(uname) {
    var letters = /^[0-9a-zA-Z]+$/;
    if(uname.value == "") {
        uname.style.background = 'Yellow';
        error = "กรุณป้อน Username\n";
        alert(error);
        uname.focus();
        return false;
    }
    else if(uname.value.match(letters)){
       return true;
    }else{
        
        alert('Username ต้องเป็นตัวอักษรเท่านั้น');
        uname.focus();
        return false;
    }
}
function penname(pen) {
    var letters = /^[0-9a-zA-Z]+$/;
    if(pen.value == "") {
        pen.style.background = 'Yellow';
        error = "กรุณป้อน penname\n";
        alert(error);
        pen.focus();
        return false;
    }
    else if(pen.value.match(letters)){
       return true;
    }else{
         
        alert('penname ต้องเป็นตัวอักษรเท่านั้น');
        pen.focus();
        return false;
    }
}
function allLetter(name) {
    var letters = /^[0-9a-zA-Z]+$/;
    if(name.value == "") {
        name.style.background = 'Yellow';
        error = "กรุณาป้อน  Name\n";
        alert(error);
        name.focus();
        return false;
    }
    else if(name.value.match(letters)){
       return true;
    }else if(disp.value=="ชื่อผู้ใช้ซ้ำโปรดใช้ชื่อใหม่"){
        alert('Name ซ้ำโปรดใช้ชื่อใหม่');
        return false;
    }else{
        alert('Name ต้องเป็นตัวอักษรเท่านั้น');
        name.focus();
        return false;
    }
}

function validatePassword(passwd,cpasswd, min, max) {
    var error = "";
    var illegalChars = /[\W_]/; // allow only letters and numbers

    if(passwd.value == "") {
        passwd.style.background = 'Yellow';
        error = "กรุณาป้อน Password\n";
        alert(error);
        passwd.focus();
        return false;
    } else if ((passwd.value.length < min) || (passwd.value.length > max)) {
        error = "Password ต้องมีความยาว " + min + "-" + max + " ตัวอักษร\n";
        passwd.style.background = 'Yellow';
        alert(error);
        passwd.focus();
        return false;
    } else if (illegalChars.test(passwd.value)) {
        error = "Password มีตัวอักษรที่ไม่ได้รับอนุญาต\n";
        passwd.style.background = 'Yellow';
        alert(error);
        passwd.focus();
        return false;
    } else if ((passwd.value.search(/[a-zA-Z]+/) == -1) || (passwd.value.search(/[0-9]+/) == -1)) {
        error = "Password ต้องมีตัวเลข ตัวใหญ่ ตัวเล็กอย่างน้อย 1 ตัว\n";
        passwd.style.background = "Yellow";
        alert(error);
        passwd.focus();
        return false;
    } else if (passwd.value != cpasswd.value) {
        error = "Password ไม่ตรงกัน\n";
        passwd.style.background = "Yellow";
        cpasswd.style.background = "Yellow";
        alert(error);
        passwd.focus();
        return false;
    } else {
        passwd.style.background = "White";
        cpasswd.style.background = "white";
    }
    return true;
}

function validateEmail(uemil){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(uemil.value == ""){
        uemil.style.background = 'Yellow';
        error = "กรุณาป้อน Email\n";
        alert(error);
        uemil.focus();
        return false;
    }
    else if(!filter.test(uemil.value)){
        alert('Email ไม่ถูกต้อง');
        uemil.focus();
        return false;
       
    }else{
         alert('แก้ไขข้อมูลเรียบร้อย');
         return true;
    }
   
}

