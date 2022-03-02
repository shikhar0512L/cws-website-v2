import React from 'react'

function Obs() {
    return (
        <>
        <div className="container w-full md:max-w-4xl mx-auto pt-2">
                <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
                <div className=" font-sans">
                    <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">How to Record your screen With OBS Studio</h1>
                    </div>
                        <div className="py-6 break-words">
                        <p>Follow the steps given below to record your screen with OBS :</p>
                        <br />
                        <p><strong>Step 1: </strong>It is obvious that to record your screen with OBS studio, the first thing you need is the OBS studio itself. So, <a href="https://obsproject.com" target="_blank">click here</a>, and you will be redirected to the official download page of OBS studio.</p>
                        <br />
                        <p><img src="https://api.codewithharry.com/media/blogFiles/record-screen-with-obs-studio/obs_gif1.gif" width="825" height="464"/>&nbsp;</p>
                        <br />
                        <p><strong>Step 2: </strong>&nbsp;After downloading the software, install it on your system like any other application.</p>
                        <br />
                        <p><strong>Step 3: </strong>Open the OBS studio. On opening the OBS studio for the first time, you will see a black screen with a bunch of options in the toolbar.</p>
                        <br />
                        <p><strong>Step 4:</strong> To record your screen with OBS, you need to set <strong>Scenes</strong> and&nbsp; <strong>Sources.</strong></p>
                        <br />
                        <p><strong>Step 5: </strong>In the bottom left corner, you will see the scenes section. Notice that a default scene is already present there. If you want, you can use the default scene or create a new one. Click on the <strong>+</strong> icon to create a new scene. Choose a name for your new scene and click <strong>Ok</strong> as shown in the below animation.</p>
                        <br />
                        <p><img src="https://api.codewithharry.com/media/blogFiles/record-screen-with-obs-studio/obs_gif2.gif" width="825" height="464"/></p>
                        <br />
                        <p><strong>Step 6: </strong>After this, you need to add a source inside the scene. To add a source, click on the <strong>+</strong> icon under the <strong>Sources</strong> section. After clicking on the <strong>+</strong> icon, select <strong>Display capture</strong>.</p>
                        <br />
                        <p><strong>Step 7: </strong>&nbsp;Click Ok on the box that pops up.</p>
                        <br />
                        <p><img src="https://api.codewithharry.com/media/blogFiles/record-screen-with-obs-studio/obs_gif3.gif" width="825" height="464"/></p>
                        <br />
                        <p><strong>Step 8:</strong> Till now, you’ve successfully set up your scenes and sources. Now, you need to select the folder where you want your recordings to be saved.</p>
                        <br />
                        <p><strong>Step 9:</strong> To select the output folder, click on the <strong>Settings</strong> options in the bottom right corner of the OBS window. Then choose the <strong>Output tab</strong> and set the output path as shown in the below animation.</p>
                        <br />
                        <p><img src="https://api.codewithharry.com/media/blogFiles/record-screen-with-obs-studio/obs_gif4.gif" width="825" height="464"/></p>
                        <br />
                        <p><strong>Step 10:</strong> With this, you’re all set to record your screen. Every time you need to record your screen, just click on the <strong>Start Recording </strong>button at the bottom right.</p>
                        <br />
                        <p><strong>Step 11:</strong> Click on the <strong>Stop Recording </strong>button when you’re done, and your video will be saved in your destination folder.</p>
                        </div>
                </div>
        </div>
        </>
    )
}

export default Obs