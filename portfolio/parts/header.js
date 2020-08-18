var header = `
<header>
    <nav>
        <div class="header-bar">
            <div class="menu-button">
                <span id="first" class="menu-bar"></span>
                <span id="second" class="menu-bar"></span>
                <span id="third" class="menu-bar"></span>
                <span id="fourth" class="menu-bar"></span>
            </div>
            <h1 class="logo">
                <a href="/">Moonsung</a>
            </h1>
            <div class="header-nav-container">
                <ul class="header-menu">
                    <li class="header-item"><a href="#" onclick="onNavigate('/'); return false;">Home</a></li>
                    <li class="header-item"><a href="#" onclick="onNavigate('/About'); return false;">About</a></li>
                    <li class="header-item"><a href="#" onclick="onNavigate('/Portfolio'); return false;">Portfolio</a></li>
                    <li class="header-item header-drop-btn"><a href="#" onclick=" return false;">MORE....</a>
                        <ul class="header-drop-menu">
                            <li class="header-item"><a href="#" onclick="onNavigate('/Contact'); return false;">Contact</a></li>
                            <li class="header-item"><a href="#" onclick="onNavigate('/CV'); return false;">CV</a></li>
                            <li class="header-item"><a href="#" onclick=" return false;">Blog</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-container">
            <ul class="nav-menu">
                <li class="nav-item"><a href="#" onclick="onNavigate('/'); return false;">Home</a></li>
                <li class="nav-item"><a href="#" onclick="onNavigate('/About'); return false;">About</a></li>
                <li class="nav-item"><a href="#" onclick="onNavigate('/Portfolio'); return false;">Portfolio</a></li>
                <li class="nav-item drop-btn"><a href="#" onclick=" return false;">MORE....</a>
                    <ul class="drop-menu">
                        <li class="nav-item"><a href="#" onclick="onNavigate('/Contact'); return false;">Contact</a></li>
                        <li class="nav-item"><a href="#" onclick="onNavigate('/CV'); return false;">CV</a></li>
                        <li class="nav-item"><a href="#" onclick=" return false;">Blog</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</header>
`