const string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789{}()!%éèâ#:';

function generatePassword(event) {
event.preventDefault();

let length = 12;
    let password = '';
    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * string.length);
        password += string[index]
    }
    document.getElementById('resultMdp').value = password;

}