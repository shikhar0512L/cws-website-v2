import React, { Component } from 'react'

export default class Text extends Component {

  render() {
    return (
      <>
        <div className="container w-full md:max-w-4xl mx-auto pt-2">
          <div class="font-sans">
            <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">How to use Google Chrome as a Text Editor?</h1>
          </div>
          <div className="py-6 break-words">
            <p>In this article, I will tell you trick to turn your chrome browser into a notepad. Follow the steps given below to use chrome browser as a notepad :</p>
            <br />
            <p><strong>METHOD : </strong>The first trick is a code snippet from which allows you to convert a normal chrome tab into a notepad. Follow the steps given below to convert a normal tab into a notepad.</p>
            <br />
            <ol>
              <li>Open the chrome browser.</li>
              <li>Copy and paste the code given below in the search bar of the chrome tab.</li>
            </ol>
            <br />
            <p>data:text/html, &lt;html contenteditable&gt;</p>
            <br />
            <ol start="3">
              <li>Hit enter after pasting the above code.</li>
              <li>That’s it! You will see a blank screen. You can note down anything there.</li>
            </ol>            <br />
            <p>Note : You will all the content if you close the tab. So, make sure that you save anything you typed before closing the tab. Below is the steps to save the content :</p>
            <br />
            <ol>
              <li>Once you are done with writing on the chrome notepad, press<strong> CTRL+S.</strong></li>
              <li>A windows explorer pop up will get opened. Select the location where you want to save the document.</li>
              <li>Click on the save button.</li>
            </ol>
            <br />
            <p>All your content will be downloaded as a HTML file on your computer. You can open this file anytime you want.</p>
            <br />
          </div>
        </div>
      </>
    )
  }
}
