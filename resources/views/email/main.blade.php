<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Webappfix</title>
</head>
<body>
 

 

@if ($mailData['title'])
    <h1>{{ $mailData['title'] }}</h1>
@endif

@if ($mailData['body'])
<p>{{ $mailData['body'] }}</p>
@endif

@if ($mailData['fio'])
    <p>ФИО: <b>{{ $mailData['fio'] }}</b></p> 
@endif

@if ($mailData['phone'])
    <p>Телефон: <b>{{ $mailData['phone'] }}</b></p> 
@endif

@if ($mailData['email'])
    <p>Почта: <b>{{ $mailData['email'] }}</b></p> 
@endif

@if ($mailData['messages'])
    <p>Сообщение: <b>{{ $mailData['messages'] }}</b></p> 
@endif
 

<!--
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
-->

<p>Thank You.</p>

</body>
</html>
