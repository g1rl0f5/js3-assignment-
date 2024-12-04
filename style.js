//  1) Change the text of the heading(h1) element to "Text Changed!".
//  2) Change the text color of all paragraphs with the class text to blue. 
//  3) Log the text content of each li element to the console. 
//  4) Change the background color of the first li element to yellow. 
//  5) Change the text color of all li elements to green.host the site and submit the link.


const mainHeading = document.getElementById("header")
mainHeading.textContent="Text Changed !"


const paragraphs=document.querySelectorAll("p.text")
paragraphs.forEach(function (p) {
    p.style.color = "blue"
})

const list=document.querySelectorAll(".list-item")
list.forEach(listItems =>
{
   console.log(listItems.textContent)
   list[0].style.backgroundColor="yellow"
   listItems.style.color="green"
}
) 


