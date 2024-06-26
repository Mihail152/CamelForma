<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Webappfix</title>
</head>
<body>
 

 
@if ($filename['title'])
    <h1>{{ $filename['title'] }}</h1>
@endif

@if ($filename['fio'])
    <p>ФИО: <b>{{ $filename['fio'] }}</b></p> 
@endif

@if ($filename['phone'])
    <p>Телефон: <b>{{ $filename['phone'] }}</b></p> 
@endif

@if ($filename['email'])
    <p>Почта: <b>{{ $filename['email'] }}</b></p> 
@endif

@if ($filename['messages'])
    <p>Сообщение: <b>{{ $filename['messages'] }}</b></p> 
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
