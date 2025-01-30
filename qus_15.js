fetch(`https://api.github.com/users/sunidhirajput`)
.then(resolve => resolve.json())
.then(result => console.log(result));