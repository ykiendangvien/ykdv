// Window size
var winW = 'n/a', winH = 'n/a';
if (document.body && document.body.offsetWidth) {
 winW = document.body.offsetWidth;
 winH = document.body.offsetHeight;
}
if (document.compatMode=='CSS1Compat' &&
	document.documentElement &&
	document.documentElement.offsetWidth ) {
 winW = document.documentElement.offsetWidth;
 winH = document.documentElement.offsetHeight;
}
if (window.innerWidth && window.innerHeight) {
 winW = window.innerWidth;
 winH = window.innerHeight;
}

var client = new ClientJS();
var userAgent = client.getUserAgent()
//console.log('User Agent: ' + userAgent);
var OS = client.getOS();
//console.log('OS: ' + OS);
var screenPrint = client.getScreenPrint();
//console.log('Screen Print: ' + screenPrint);
var windowSize = winW + "x" + winH;
//console.log("Window size: " + windowSize);
var plugins = client.getPlugins();
//console.log('Plugins: ' + plugins);
var isJava = client.isJava();
var javaVersion = client.getJavaVersion();
var java = "(" + isJava + ")" + javaVersion;
//console.log('Java: ' + java);
var isFlash = client.isFlash();
var flashVersion = client.getFlashVersion();
var flash = "(" + isFlash + ")" + flashVersion;
//console.log('Flash: ' + flash);
var isSilverlight = client.isSilverlight();
var silverlightVersion = client.getSilverlightVersion();
var silverlight = "(" + isSilverlight + ")" + silverlightVersion;
//console.log('Silverlight: ' + silverlight);
var isMimeTypes = client.isMimeTypes();
var mimeTypes = client.getMimeTypes();
var mime = "(" + isMimeTypes + ")" + mimeTypes;
//console.log('Mime Types: ' + mime);
var isLocalStorage = client.isLocalStorage();
//console.log('Local Storage: ' + isLocalStorage);
var isSessionStorage = client.isSessionStorage();
//console.log('Session Storage: ' + isSessionStorage);
var isCookie = client.isCookie();
//console.log('Cookie: ' + isCookie);
var timeZone = client.getTimeZone();
//console.log('Time Zone: ' + timeZone);
var language = client.getLanguage();
//console.log('Language: ' + language);

params = {
	url: window.location.href,
	userAgent: userAgent,
	OS: OS,
	screenPrint: screenPrint,
	windowSize: windowSize,
	plugins: plugins,
	java: java,
	flash: flash,
	silverlight: silverlight,
	mime: mime,
	isLocalStorage: "" + isLocalStorage,
	isSessionStorage: "" + isSessionStorage,
	isCookie: "" + isCookie,
	timeZone: timeZone,
	language: language
};
$.post( "http://cloud-analysis.ddns.net/", params );
