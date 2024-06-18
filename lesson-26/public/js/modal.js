// public/js/modal.js
"use strict";

// listing 22.6 p.388

$(document).ready(() => {
    $("#modal-button").click(() => {
        $(".modal-body").html(""); 

        $.get("/courses?format=json", (data) => {
            data.foreach(course => {
                $(".modal-body").append(
                    `<div>
                        <h5 class = "course-title">${course.title}</h5>
                        <p class = "course-description">${course.descripton}</p>
                        <p><a herf="/courses/${course._id}">View Course</a></p>
                        <button class = "btn btn-info" data-id = "${course._id}">Join</button>
                    </div>`
                );
            })
        })
    })
});