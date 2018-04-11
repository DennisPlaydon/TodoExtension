var contextMenuItem = {
	"id": "addItem",
	"title": "Add Item",
	"contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
	if (clickData.menuItemId == "addItem" && clickData.selectionText){
		chrome.storage.sync.get(['list'], function(budget) {
			
		}
	}
})