function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}



function go() {
	var clicks = document.getElementsByClassName("gtag-link-others");
	for(var i = 0; i < clicks.length; i ++){
		var button = clicks[i]
		if(button.innerText.includes("Market")){
			button.onclick = () => {
				var chars = document.getElementsByClassName('character');
				for(var j = 0; j < chars.length; j ++){
					var e = chars[j]
					e.innerHTML.includes('sold') && (e.hidden = !0)
				}
				var weapons = document.getElementsByClassName('weapon');
				for(var j = 0; j < weapons.length; j ++){
					var e = weapons[j]
					e.innerHTML.includes('sold') && (e.hidden = !0)
				}
			}
		}
	}
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

chrome.runtime.onMessage.addListener(function(request, sender) {
  if(["https://app.cryptoblades.io/#/market", "http://app.cryptoblades.io/#/market"].includes(request.message)){
	  go()
  }
});