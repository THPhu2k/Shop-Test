// ArrowFunc
(a, b, c) => {
    console.log(a, b, c);
}

// Wait Function 1 second = 1000 milisecond
setTimeout ((a = 1, b = 3, c = 2) => {
    console.log(a, b, c);
},5000); //func runs after 5s