var theme_color = 'teal'

function get_theme_color(){
    
    if (!!(window.localStorage.getItem('dynaconf'))) {
        theme_color = JSON.parse((window.localStorage.getItem('dynaconf')));
        change_color(theme_color)
    }

}

function change_color(color){

    document.body.dataset.mdColorPrimary = color
    theme_color = color
    localStorage.setItem('dynaconf', JSON.stringify(theme_color))

}
