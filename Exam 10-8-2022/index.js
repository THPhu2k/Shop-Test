function Bài1(){
    var CurrentYear = 2022

    let Student = {
        name: "Trần Hoàng Phú",
        age: CurrentYear - 2006,
        address: "33 deg 50 mins 11.0 secs N and 151 deg 04 mins 49.8 secs E",
    }

    StudentInfos = JSON.stringify(Student)
    console.log(StudentInfos)

    for (let infos in Student) {
        console.log(`${infos}: ${Student[infos]}`);
    }
}

// Bài1()

function Bài2(){
    var smartPhones = [
        {name : 'iphone', price: 649},
        {name : 'Galaxy S6', price: 576},
        {name : 'Galaxy Note 5', price: 489}
    ];

    console.log("product:",smartPhones[0].name,";","price:",smartPhones[0].price)
    console.log("product:",smartPhones[1].name,";","price:",smartPhones[1].price)
    console.log("product:",smartPhones[2].name,";","price:",smartPhones[2].price)
}

// Bài2()

function Bài3(){
    function foo(x,y,z) {
        console.log(x,y,z)
    }
    foo()
}

// Bài3()

function Bài4(){

    let Student1 = {
        name: "Minh Son",
        age: 10,
        address: "Da Lat",
    }

    Student1Infos = JSON.stringify(Student1)
    localStorage.setItem("Student1",Student1Infos)
}

Bài4()