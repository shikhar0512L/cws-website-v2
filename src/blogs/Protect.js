import React from 'react'

const Protect = () => {
  return (
    <div className="container w-full md:max-w-4xl mx-auto pt-2">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div className="font-sans">
          <h1 className="jsx-1794874986 font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">How to Password Protect a Folder in Windows 10 Without Any Additional Software</h1>
        </div>
        <div className="py-6 break-words">
          <p>In this article, I will tell you a trick that will help you lock and hide any folder without installing any third-party software. With just a simple .bat file, you can protect your folders easily. Whenever you want to open the protected folder, a password will be required before the folder becomes visible and accessible. So, without further delay, follow the steps given below to password protect a folder :</p>
          <br />
          <ol>
            <li>First of all, open the folder you want to secure with a password. You can see in the below animation that I’ve created a folder named “<strong>Demo,</strong>” which consists of an image and an HTML file.</li>
          </ol>
          <br />
          <p><img src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif1.gif" width="825" height="461" alt="img" /></p>
          <br />
          <ol start="2">
            <li>Now, create a new text file inside the same folder. You can name the text file according to your choice. I’m naming it “LockedFolder.txt.”</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif2.gif" width="825" height="461" /></p>
          <br />
          <ol start="3">
            <li><a href="https://gist.github.com/pknowledge/1feef32fa21475eb9742ea247aefe1af#file-folderlock-bat">Click here</a>, and you’ll be redirected to a GitHub repository. Copy the code given on the repo and paste it into the text file that you’ve created in the last step.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif3.gif" width="825" height="461" /></p>
          <br />
          <ol start="4">
            <li>Now, open the text file and move your cursor to line number 21(if NOT %pass%== YOUR-PASSWORD goto FAIL). Replace YOUR-PASSWORD with the password of your choice. In the below animation, you can see that I’ve used “DemoPass” as my password.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif4.gif" width="825" height="461" /></p>
          <br />
          <ol start="5">
            <li>Now, click on the <strong>File</strong> option in the top left corner. Click on the <strong>Save as </strong>button and save the file as “LockedFolder.bat.”</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif5.gif" width="825" height="461" /></p>
          <br />
          <ol start="6">
            <li>Now, double click on the “LockedFolder.bat,” and a folder named “Private” will be created automatically.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif6.gif" width="825" height="461" /></p>
          <br />
          <ol start="7">
            <li>Move all the files you want to hide inside the Private folder that we’ve just created in the last step.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif7.gif" width="825" height="461" /></p>
          <br />
          <ol start="8">
            <li>Again double click on the “LockedFolder.bat” A command prompt window will open asking you that “Are you sure you want to lock this folder?”. Type Y and hit enter as shown in the below animation.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif8.gif" width="825" height="461" /></p>
          <br />
          <ol start="9">
            <li>Once you hit enter, your Private folder will be automatically hidden, and only LockedFolder.bat will be visible to you.</li>
            <li>To open your secured folder, double click on the LockedFolder.bat file. A command prompt window will open asking you the password of the secured folder.</li>
            <li>Type the password and hit enter. Once you do that, your hidden folder will be displayed to you successfully.</li>
          </ol>
          <br />
          <p><img alt="img" src="https://api.codewithharry.com/media/blogFiles/password-protect-folder-in-windows-10/hide_gif9.gif" width="825" height="461" /></p>
          <br />
          <ol start="12">
            <li>If you want to hide your Private folder again, all you need to do is double-click on the “LockedFolder.bat” file again.</li>
          </ol>
          <br />
          <p>So that’s how you can easily hide your private files without using any additional software.</p>

        </div>
      </div>
    </div>
  )
}

export default Protect