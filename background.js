function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}



function go() {

    if (window.location.href.includes("#/market")) {

        try {
            document.getElementsByClassName("row button-row")[0].appendChild(createElementFromHTML(`<div data-v-0a3362b9="" class="col">
	<button type="button" class="btn gtag-link-others btn-primary" onclick="var chars=document.getElementsByClassName('character');chars.forEach(e=>{e.innerHTML.includes('sold')&&(e.hidden=!0)});var weapons=document.getElementsByClassName('weapon');weapons.forEach(e=>{e.innerHTML.includes('sold')&&(e.hidden=!0)});">
	Remove Sold
	</button>
</div>`))
        }
        catch {
            setTimeout(() => {
                go()
            }, 1000)
        }
    }
}

go()

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
	if(changeInfo.url){
		chrome.tabs.sendMessage(tab.id, { message: changeInfo.url});
	}
  }
);
