<?php




define('NO_MOODLE_COOKIES', true); // Session not used here.

require(dirname(dirname(dirname(dirname(dirname(dirname(__FILE__)))))) . '/config.php');

$PAGE->set_context(context_system::instance());
$PAGE->set_url('/lib/editor/tinymce/plugins/eocontenteffect/eoeffect.php');

$editor = get_texteditor('tinymce');
$plugin = $editor->get_plugin('eocontenteffect');


$htmllang = get_html_lang();
header('Content-Type: text/html; charset=utf-8');
header('X-UA-Compatible: IE=edge');



?>
<!DOCTYPE html>
<html <?php echo $htmllang ?>
<head>
    <title><?php print_string('eocontenteffect:desc', 'tinymce_eocontenteffect'); ?></title>
    <script type="text/javascript" src="<?php echo $editor->get_tinymce_base_url(); ?>/tiny_mce_popup.js"></script>
    <script type="text/javascript" src="<?php echo $plugin->get_tinymce_file_url('js/dialog.js'); ?>"></script>

	<link href="tinymce/css/image.css" rel="stylesheet" type="text/css" />
</head>
<body id="moodleimage" style="display: none" role="application" aria-labelledby="app_title">



<form onsubmit="eocontenteffectDialog.insert();return false;" action="#">

	<p> </p>
		





<div id="choice_panel" class="panel">


				<fieldset>
						<legend>Choose An Effect To Apply</legend>

						


<ol>
<li><input name="effect"value="1" id="effect11" type="radio" />What? - Hide a word or two until What? is clicked.</li>
<li><input name="effect" value="2" id="effect2" type="radio" />Show/Hide - Hide blocks of text/images/structures</li>
<!-- <li><input name="effect" value="3" id="effect3" type="radio" />Popup</li> -->
</ol>

				</fieldset>
				

</div>




    </form>

<table><tr>
		<td><input type="button" id="insert" name="insert" value="{#insert}" onclick="eocontenteffectDialog.insert();" /></td>
		<td><input type="button" id="cancel" name="cancel" value="{#cancel}" onclick="tinyMCEPopup.close();" /></td>
		    	<td>
		
		<td>

		</tr>
		</table>




</body>
</html>




