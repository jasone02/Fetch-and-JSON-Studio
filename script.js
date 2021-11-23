window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then( function(formattedJson) {
            let formattedSkills;
            let colorHTML;
            getElementById(activeState).style.color = "green";
            for(let key in formattedJson) {
                if (formattedJson[key].active) {
                    colorHTML = `getElementById(activeState).style.color = "green";`;
                }
                formattedSkills = "";
                for(let key1 in formattedJson[key].skills) {
                    if (key1 < Object.keys(formattedJson[key].skills).length - 1) {
                        formattedSkills += formattedJson[key].skills[key1] + ", ";
                    } else {
                        formattedSkills += formattedJson[key].skills[key1];
                    }
                }
                document.getElementById("container").innerHTML += 
                `<div class="astronaut">
                <div class="bio">
                <script>
                    ${colorHTML}
                </script>
                <h3>${formattedJson[key].firstName} ${formattedJson[key].lastName}</h3>
                <ul>
                    <li>Hours in space: ${formattedJson[key].hoursInSpace}</li>
                    <li id="activeState">Active: ${formattedJson[key].active}</li>
                    <li>Skills: ${formattedSkills}</li>
                </ul>
                </div>
                <img class="avatar" src="${formattedJson[key].picture}">
            </div>`
            }
        });
    });
});