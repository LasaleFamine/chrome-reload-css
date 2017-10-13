import '../img/icon-128.png';
import '../img/icon-34.png';

import reloadStyles from './utils/reload-styles';

window.chrome.browserAction.onClicked.addListener(() => {
	reloadStyles(window.chrome);
});

