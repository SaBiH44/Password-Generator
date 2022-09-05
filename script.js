function generator() {
    const char = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*( ){}[]<>?"
    let passwordLenghth = 16;
    let password = '';

    for (let i = 0; i < passwordLenghth; i++) {
        let randomNumber = Math.floor(Math.random() * char.length)
        
        password += char.substring(randomNumber, randomNumber +  1);
    }

    const text = document.getElementById("generatedPassword")

    text.value = password;
    console.log(password)

}

function revealPassword() {
    var x = document.getElementById("generatedPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
