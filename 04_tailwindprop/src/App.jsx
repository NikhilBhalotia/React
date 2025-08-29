import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {

  let myobj = {

    Name: "Nikhil",
    age:21
  }

  let Arr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-500 text-black border-2 rounded-2xl mb-2">
        Tailwind Test
      </h1>
      {/* <Card channel="chaiAurCode" someobj={ myobj} someArr = {Arr} /> */}
      <Card
        username="Nikhil Bhalotia"
        date="25th Aug 2025"
        text="I am a final-year B.Tech Computer Science student at JECRC University, passionate about full stack web development and emerging technologies like IoT, cryptography, and information security. I have completed the basics of HTML and CSS and am currently learning JavaScript, React, and other full stack technologies while preparing for fresher-level job interviews. I am from Alwar, India, and dedicate 2–3 hours daily to improving my skills. My strengths include time management, honesty, and adaptability. Outside academics, I enjoy running, exercise, and cricket, and I follow a vegetarian diet while working on my fitness goals."
      />
      <Card
        username="Amit Kumar"
        date="26th Aug 2025"
        text="I am currently pursuing a Bachelor of Science (B.Sc.) degree and have a strong passion for music and singing. Alongside my academic journey, I am dedicated to preparing for the UPSC Civil Services Examination, with the goal of becoming an IAS officer. I am committed to continuous learning, personal growth, and working hard to achieve my dreams while nurturing my love for music."
      />
    </>
  );
}

export default App
