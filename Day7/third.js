var courses = {
    "GeeksForGeeks":"DSA Self-Paced",
    "Coding Ninjas": "C++ Foundation",
    "Udemy":"The Complete Web Developer 2020 Bootcamp",
    "Coursera":"HTML,CSS and JavaScript for Web Developers",
    "edx":"CS50"
};
var key, count = 0;
for(key in courses){
    if(courses.hasOwnProperty(key)){
        count++;
    }
}
console.log("length of object : " + count);