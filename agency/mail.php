<?php

$method = $_SERVER['REQUEST_METHOD'];
$admin_email = 'ekaterina.minich@gmail.com';
$form_subject = 'Agency site';

($method === 'POST') ? $mtt = $_POST : $mtt = $_GET;

$name = trim($mtt["name"]);
$email = trim($mtt["email"]);
foreach ($mtt as $key => $value) {
    if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
        $message .= "
			" . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
    }
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text)
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    'From: ' . adopt($name) . ' <' . $name . '>' . PHP_EOL .
    'Reply-To: ' . $name . '' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers);
