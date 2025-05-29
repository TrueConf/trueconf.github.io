function checkOnline(){
    let img = new Image();
     img.src = 'https://google.com/favicon.ico'+"?dummy="+new Date().getTime();
     img.onload = function(){
        var curWeb = window.location.hostname;
        var tag = '';

        if(curWeb.match(/(.*\.?)(trueconf\.com$)/gm))
            tag = 'GTM-PT7GM32';
        else
            tag = 'GTM-5KS59XG';
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',tag); // com GTM-PT7GM32, ru GTM-5KS59XG
    }
}

checkOnline();