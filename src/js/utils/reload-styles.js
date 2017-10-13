module.exports = chrome => {
	const reg = /\?.*|$/;
	const reload = `
		document.querySelectorAll('link[rel="stylesheet"]')
			.forEach(item => {
				console.log(item)
				item.href = item.href.replace(${reg}, '?reload=' + new Date().getTime())
		})
	`;

	chrome.tabs.executeScript({
		code: reload
	});
};
