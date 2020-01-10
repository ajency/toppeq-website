$(document).ready(function () {
    $(".select2").select2({
        minimumResultsForSearch: -1
    });

    $(".select-normal").select2({
        minimumResultsForSearch: -1,
        containerCssClass: "cs-select-normal",
        dropdownCssClass: "cs-select-normal-results",
    });

    // Theme mode JS

    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
             localStorage.setItem('theme', 'light');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Theme mode JS ends

});
