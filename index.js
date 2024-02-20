// 'Mr. Phuripat Just want to join ITCAMP20' index.js file
// Manipulation 1
let currentchatnum = 0;
let heartsended = false;
const nextMessage = () => {
    chatelement = document.querySelector(`[id$='${currentchatnum}']`);

    // Manupulation 2
    if (chatelement == null) {
        const endmessage = document.querySelector('.end-message');
        endmessage.style.visibility = 'visible';
        return
    }
    // Manupulation 3
    chatelement.style.visibility = 'visible'
    chatelement.style.animation = 'pull-chat 0.5s linear forwards'
    currentchatnum++;
}

// Discord Webhook API
const sendHeart = () => {
    if (heartsended) return;

    const url = 'https://discord.com/api/webhooks/1109763599867584532/kTDWKZPA07T1c4K2wK7YrbcwYxcCDrdOtceYOXZ05qhYs-hf3xXE0sWhpxhSzku_Hs8e'
    const content = {
        content: "<@249427988997734401> New Feedback!",
        embeds: [{
            title: "New Message!",
            color: 3447003,
            footer: {
                text: new Date().toUTCString()
            },
            fields: [{
                name: "Feedback / Request",
                value: "เอาหัวใจปายยยยยคร้าบบ ❤️❤️❤️"
            }]
        }]
      }
    try {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            document.querySelector('.send-love-container p').style.visibility = 'visible';
        })
    } catch (error) {
        console.log(error);
        console.warn("Couldn't send Request to Webhook. Maybe Mr.Phuripat already delete it due to security issue?")
    }

    heartsended = true;
}