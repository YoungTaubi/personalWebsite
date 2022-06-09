//Splitify
import backgroundImage from './images/splitify/20220606_Intro_Image.jpg'
import carouselImages00 from './images/splitify/carousel_gifs/splitify-how-to-00.gif'
import carouselImages01 from './images/splitify/carousel_gifs/splitify-how-to-01.gif'
import carouselImages02 from './images/splitify/carousel_gifs/splitify-how-to-02.gif'
import carouselImages03 from './images/splitify/carousel_gifs/splitify-how-to-03.gif'
import carouselImages04 from './images/splitify/carousel_gifs/splitify-how-to-04.gif'
import carouselImages05 from './images/splitify/carousel_gifs/splitify-how-to-05.gif'
import carouselImages06 from './images/splitify/carousel_gifs/splitify-how-to-06.gif'


const projects = {
  "projects": [
    {
      "title": "Splitify",
      "description": "Bla Bla",
      "type": "Programming",
      "introImageURL": backgroundImage,
      "id": "000",
      "carouselImages": [
        { "url": carouselImages00, "description": "Sign up to create your personal account." },
        { "url": carouselImages01, "description": "Create a new trip and add all fellow travelers." },
        { "url": carouselImages02, "description": "The fellow travelers will be informed about the invitation via a real-time pop-up." },
        { "url": carouselImages03, "description": "After accepting the invitation, all travelers can create new expenses. The exact breakdown of the expenses can be divided into shares, for example if a person in the restaurant ordered more." },
        { "url": carouselImages04, "description": `Under the heading "Settlement" you can see exactly who owes whom how much, or who has what credit balance with the other party.` },
        { "url": carouselImages05, "description": "Once a person has transferred the amount owed, they can mark it as paid." },
        { "url": carouselImages06, "description": "As soon as a person has marked the open amount as paid, the recipient is informed in real time and can then mark the payment as received." }
      ]
    },
    { "title": "Project 02", "description": "Bla Bla", "type": "Programming", "introImageURL": "../images/20220606_Intr_Image.jpg", "id": '001' },
    { "title": "Project 03", "description": "Bla Bla", "type": "Indusrial Design", "introImageURL": "../images/20220606_Intr_Image.jpg", "id": '002' },
    { "title": "Project 04", "description": "Bla Bla", "type": "Personal Project", "introImageURL": "../images/20220606_Intr_Image.jpg", "id": '003' }
  ]
}

export default projects
