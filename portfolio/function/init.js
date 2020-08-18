function init(){
    _HEADER_BUTTON_TO_POPUP_MENU();
    _DROP_BUTTON_TO_SHOW_EXTRA_MENU();
    _HEADER_DROP_BUTTON_TO_SHOW_EXTRA_MENU();
    _SCROLL_TO_THE_TOP_BTN();
    _CONTACT();
};
init();



// Attach JS Event again, when DOM is changed(=Page is changed)
var objectObserved = document.getElementById("app");
var observer = new MutationObserver(function(){
    init();
});
observer.observe(objectObserved,{childList:true});