moodle-tinymce_eocontenteffect
==============================

Moodle TinyMCE Plugin that inserts JS/YUI3 effects (Hide word, section etc.)

Requires a user to have ability to insert script tags.  Should be converted to filter combo maybe.

For more info and a demo checkout http://www.easyochem.com/eolms/mod/forum/discuss.php?d=42

Youll need this css added to your custom css section of your theme



.ot-hidden {
 position: absolute;
 left: -999em;
border:none;
}
.empty-region-side-post.used-region-side-pre #region-main.span8 {
    width: 73.4681%;
}

.ot-shown {
padding:1em;
background-color:#a9e9fb;
width:93%;
border-radius:10px;
}

#eocontentquestion_fs {
border:2px solid #1979fa;
width: 95%;
border-radius:10px;
padding-left:2em;
padding-bottom: 1em;
}

#eocontentquestion_legend {
position: relative;
line-height: 2px;
font-size: 18px;
color:#1979fa;
width:auto;
padding-top: 5px;
padding-bottom; 0px;
padding-right; 2em;
padding-left; 2em;
border-style: none none none;
margin-left: 10px;
margin-top: 10px;
}
.show_button {
    padding: 5px 5px;
    background: #1979fa;
    color: #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border: solid 1px #20538D;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.show_button:hover {
    background: #30add1;
    color: white;
    border: solid 1px #2A4E77;
    text-decoration: none;
}
.show_button:active {
    -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    background: #2E5481;
    border: solid 1px #203E5F;
}
