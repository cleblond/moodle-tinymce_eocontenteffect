tinyMCEPopup.requireLangPack();

var eocontenteffectDialog = {
	init : function() {
	

	},

	insert : function() {
		

		var selectedtext = tinymce.activeEditor.selection.getContent();
		//alert(selectedtext);

		///what type of effect
		var radios = document.getElementsByName('effect');
		//console.log(radios);
		effect = 0;
		for (var i = 0; i < radios.length; i++) {
	        var button = radios[i];
	        if (button.checked) {
	            effect = i + 1;
		    //alert(answer);
		
		}
		}

		if(effect == 0){return alert('You didn\'t choose an effect!');}

//		alert('effect'+effect);
		///ok split into each effect
		var id = new Date().getTime();

		if(effect == 1){   ///first effect 'what?'


		string = '<a href="#" style="background-color:lightgreen;" class="what_link" id="ot-show-answer'+id+'">What?</a> \
			<span id="feedback'+id+'" class="ot-hide">'+selectedtext+'</span></p>  \
			<script type="text/javascript">// <![CDATA[ \
				YUI().use(\'node\', function(Y) { \
					Y.one(\'#feedback'+id+'\').addClass(\'ot-hidden\'); \
					var node = Y.one(\'#ot-show-answer'+id+'\');  \
					node.on(\'click\', function(e) { e.preventDefault();  \
					Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\');  \
					myNode = Y.one(\'#ot-show-answer'+id+'\');  \
					myNode.get(\'parentNode\').removeChild(myNode);  \
				})});  \
				// ]]></script>';

		}		


		if(effect == 2){   ///second effect 'Show/Hide'


		string = '<p><a href="#"><button class="show_button" id="ot-show-answer'+id+'" type="button">Show</button></a></p>  \
		<div id="feedback'+id+'" class="ot-hide"><hr />'+selectedtext+'<hr/></div>  \
		<script type="text/javascript">// <![CDATA[ \
			YUI().use(\'node\', function(Y) {  \
			Y.one(\'#feedback'+id+'\').addClass(\'ot-hidden\');  \
			var parent = Y.one(\'#ot-show-answer'+id+'\').get(\'parentNode\');  \
			parent.on(\'click\', function(e) { e.preventDefault();  \
				if(Y.one(\'#feedback'+id+'\').get(\'className\') == \'ot-hide ot-hidden\'){  \
				Y.one(\'#feedback'+id+'\').removeClass(\'ot-hidden\').addClass(\'ot-shown\');  \ 					Y.one(\'#ot-show-answer'+id+'\').set(\'innerHTML\', \'Hide\');  \
				}else{  \
				Y.one(\'#feedback'+id+'\').removeClass(\'ot-shown\').addClass(\'ot-hidden\');  \
				Y.one(\'#ot-show-answer'+id+'\').set(\'innerHTML\', \'Show\');}  \
			})});  \
// ]]></script>';


		}
		


//		tinyMCEPopup.editor.execCommand('mceInsertContent', false, string);
		tinyMCEPopup.editor.execCommand('mceReplaceContent', false, string);
//		}
		tinyMCEPopup.close();
	}
};

tinyMCEPopup.onInit.add(eocontenteffectDialog.init, eocontenteffectDialog);
