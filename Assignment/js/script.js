const navbarItems = `
  <div class="topnav" id="navbar">
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="projects.html">Projects</a>
    <a href="contact.html">Contact</a>
    <a href="reflection.html">Reflection</a>
  </div>
`;
document.body.insertAdjacentHTML("afterbegin", navbarItems);

const fbDiv = document.getElementById("fb"); // get the div element
const fbLink = fbDiv.querySelector("a"); // get the anchor element inside the div
fbLink.setAttribute("href", "https://www.facebook.com/prishnee.nuckcheddy/"); // set the href attribute of the anchor element to the desired link

const igDiv = document.getElementById("ig"); // get the div element
const igLink = igDiv.querySelector("a"); // get the anchor element inside the div
igLink.setAttribute("href", "https://www.instagram.com/"); // set the href attribute of the anchor element to the desired link

const snapDiv = document.getElementById("snap"); // get the div element
const snapLink = snapDiv.querySelector("a"); // get the anchor element inside the div
snapLink.setAttribute("href", "https://www.snapchat.com/add/prishnee2011?share_id=uJcn0N5tJ34&locale=en-GB"); // set the href attribute of the anchor element to the desired link

const linkinDiv = document.getElementById("linkIn"); // get the div element
const linkinLink = linkinDiv.querySelector("a"); // get the anchor element inside the div
linkinLink.setAttribute("href", "https://www.linkedin.com/in/prishnee-nuckcheddy-645614216/"); // set the href attribute of the anchor element to the desired link

const tweetDiv = document.getElementById("tweet"); // get the div element
const tweetLink = tweetDiv.querySelector("a"); // get the anchor element inside the div
tweetLink.setAttribute("href", "https://twitter.com/n_prishnee"); // set the href attribute of the anchor element to the desired link

const box = document.querySelector('.box');
const paragraphs = box.querySelectorAll('p');
let delay = 0;

paragraphs.forEach(paragraph => {
  paragraph.style.opacity = '0';
  paragraph.style.transition = 'opacity 1s ease ' + delay + 's';
  delay += 0.3;
});

window.addEventListener('load', () => {
  paragraphs.forEach(paragraph => {
    paragraph.style.opacity = '1';
  });
});


const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', (event) => {
        checkInputs();
});

function checkInputs() {


        let elements = document.getElementsByClassName("formbold-form-input")


        for (let i = 0; i < elements.length; i++) 
        {
                elements[i].setAttribute("oninput","this.setCustomValidity('')")
                elements[i].setAttribute("oninvalid","this.setCustomValidity('Field is blank')")
        }



}