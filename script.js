const screenshotButton = document.querySelector(".screenshot-button");
screenshotButton.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/api/ss/generate-ss",{
            method:"POST",
        });

        if(!response.ok){
            console.log("Error Taking Screenschot");
            return;
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "screenshot.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.log("Error Taking ScreenShot")
    }
})