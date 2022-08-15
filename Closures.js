//
function greeting(){
    let username = 'oscar';

    function displayUserName (){
        return `Hello ${username}`;
    }

    return displayUserName;

}

const g = greeting();
console.log(g);
console.log(g());