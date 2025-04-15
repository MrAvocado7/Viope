// Create an object array about courses
let courses = [ 
{  name: "Introduction to Software Development",
    code   : "SOF001IT1AE",
    extent : 5,
    timing : "1.semester"
    }, 
{  name: "Programming 1",
    code   : "SOF005AS2AE",
    extent : 5,
    timing : "2.semester"
    }, 
{  name: "Programming 2",
    code   : "SOF001AS3AE",
    extent : 5,
    timing : "2.semester"
    }, 
{  name: "Data Management and Databases",
    code   : "SOF001AS2AE",
    extent : 5,
    timing : "2.semester"
    }, 
{  name: "Front End Programming",
    code   : "SOF004AS3AE",
    extent : 5,
    timing : "3.semester"
    }
];

function listCourses() {
    // List courses from an object array , i is an index of array
    let html = "";
    // Write the answer on the page, to the answer div, as content of the div
    for (let i = 0; i < courses.length; i++) {
        html += "<p>Code: " + courses[i].code + "<br>";
        html += "Name: " + courses[i].name + "<br>";
        html += "Extent: " + courses[i].extent + "<br>";
        html += "Timing: " + courses[i].timing + "</p>";
    }
    document.getElementById("answer").innerHTML = html;
}