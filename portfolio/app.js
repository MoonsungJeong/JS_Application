var routes = {
    '/': home,
    '/About': about,
    '/Portfolio': portfolio,
    '/Contact': contact,
    '/CV':cv
};

var appDiv = document.getElementById('app');
//appDiv.innerHTML = routes[window.location.pathname];
appDiv.innerHTML = routes['/'];

var onNavigate = function(pathname){
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    appDiv.innerHTML = routes[pathname]
}

window.onpopstate = function(){
    var path = window.location.pathname;
    if(path === '/' || path === '/About' || path === '/Portfolio' || path === '/Contact' || path === '/Blog' || path === '/Cv'){
        appDiv.innerHTML = routes[window.location.pathname]
    }else{
        appDiv.innerHTML = routes['/'];
    }
}