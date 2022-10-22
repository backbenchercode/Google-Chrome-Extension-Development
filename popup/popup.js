async function notifyMe() {
  chrome.runtime.sendMessage("", {
    type: "notification",
    options: {
      title: "Good Morning",
      message: "Have a great day!",
      iconUrl: "/logo.png",
      type: "basic",
    },
  });
}

document.getElementById("myBtn").addEventListener("click", notifyMe);
