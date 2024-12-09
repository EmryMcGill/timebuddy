// logic for the timer page

// first validate the user
//validateUser();



// function to turn on settings modal
const toggleOnSettingsModal = () => {
    const modal = document.querySelector(".modal-container");
    const settings = document.querySelector(".settings-container");
    modal.style.display = "block";
    settings.style.display = "block";
}

// function to turn off settings modal
const toggleOffSettingsModal = () => {
    const modal = document.querySelector(".modal-container");
    const settings = document.querySelector(".settings-container");
    modal.style.display = "none";
    settings.style.display = "none";
}

// function to turn on new project modal
const toggleOnNewProjectModal = () => {
    const modal = document.querySelector(".modal-container");
    const newProject = document.querySelector(".new-project-container");
    modal.style.display = "block";
    newProject.style.display = "block";

    // focus the input field
    const projectInput = document.getElementById("new-project");
    projectInput.focus();
}

// function to turn off new project modal
const toggleOffNewProjectModal = () => {
    const modal = document.querySelector(".modal-container");
    const newProject = document.querySelector(".new-project-container");
    newProject.style.display = "none";
    modal.style.display = "none";
}
