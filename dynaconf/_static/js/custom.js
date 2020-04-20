const header_nav_ellipsis = document.querySelector('.md-header-nav__ellipsis')
// const header_nav_logo = document.querySelector('nav.md-header-nav > a.md-header-nav__button')
// console.log(header_nav_logo)

logo_top = `
        <span class="md-header-nav__topic md-ellipsis mt-5">
            <img alt="DYNACONF" src="./_static/img/logo_white.svg" height="25"></img>
        </span>`

header_nav_ellipsis.innerHTML = logo_top
// header_nav_logo.innerHTML = ''