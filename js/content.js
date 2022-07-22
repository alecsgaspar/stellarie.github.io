// -- templating practice -- //
// set all of the content inside this js
import * as src from "./content-src.js";
import util from "../js/util/util.js";

// TODO: media query for mobile

document.querySelector("#header-title").textContent = src.TITLE;
// document.querySelector("#top-comment-text").textContent = src.TOP_COMMENT;
document.querySelector("#projects-header").textContent = src.PROJECT_HEADER;


// TODO: clean this up
(() => {
  // loop through TEXT_CONTENT to set the content inside the section div
  src.TEXT_CONTENT.forEach((c, idx) => {
    // clone the section div
    const section = document.querySelector("#section").cloneNode(true);
    section.setAttribute("section-id", idx);
    document.querySelector("#content").appendChild(section);
    // after cloning, set the content inside the new section div
    const newSection = document.querySelector("[section-id='"+idx+"']");
    // set innerHTML so we can have additional functionality included in the text
    newSection.querySelector("#section-title").innerHTML = util.trimToEmpty(c.title);
    newSection.querySelector("#section-content").innerHTML = util.trimToEmpty(c.content);
  })
  // clean up the nodes
  // remove content divs that do not have a section-id attribute
  document.querySelectorAll("#section:not([section-id])").forEach(node => {
    node.remove()
  })

  // loop through PROJECT_CONTENT and display the projects that we have done
  // TODO: same procedure as the earlier one, so we might have to create a util for this 
  src.PROJ_CONTENT.forEach((c, idx) => {
    const project = document.querySelector("#project-listing").cloneNode(true);
    project.setAttribute("project-id", idx);
    document.querySelector("#projects").appendChild(project);
    const newProject = document.querySelector("[project-id='"+idx+"']");
    // newProject.querySelector("#project-title").innerHTML = util.trimToEmpty(c.title);
    newProject.querySelector("#project-desc").innerHTML = util.trimToEmpty(c.desc);
    // create the link for the project and append it inside #project-title
    const projectLink = document.createElement("a");
    projectLink.setAttribute("href", c.link);
    projectLink.setAttribute("class", "project-link");
    projectLink.innerHTML = util.trimToEmpty(c.title);
    newProject.querySelector("#project-title").append(projectLink);
  })
  // clean up the nodes
  // remove content divs that do not have a section-id attribute
  document.querySelectorAll("#project-listing:not([project-id])").forEach(node => {
    node.remove()
  })  
})()