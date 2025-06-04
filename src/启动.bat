@echo off
chcp 65001 >nul
setlocal

:: 设置 js 文件夹路径
set "JS_FOLDER=%~dp0js"

:: 检查 js 文件夹是否存在
if not exist "%JS_FOLDER%" (
    echo 错误：未找到 js 文件夹，路径应为 "%JS_FOLDER%", 请从官网手动下载 https://kz16.top/ggb/ggbpptReadMe.html
    goto :EOF
)

:: 直接读取版本号内容（v.js）到变量 VERSION
for /f "delims=" %%v in ('powershell -Command "(Invoke-WebRequest -Uri 'https://kz16.top/ggb/js/v.js' -UseBasicParsing).Content.Trim()"') do set "VERSION=%%v"

:: 去除可能的空格
set "VERSION=%VERSION: =%"

:: 构造目标路径和下载地址
set "TARGET_FILE=%JS_FOLDER%\v%VERSION%.js"
set "DOWNLOAD_URL=https://kz16.top/ggb/js/v%VERSION%.js"

:: 如果文件已存在则不下载
if exist "%TARGET_FILE%" (
    echo 已存在文件：%TARGET_FILE%，无需下载。
) else (
    echo 未找到文件，开始下载：%DOWNLOAD_URL%
    powershell -Command "Invoke-WebRequest -Uri '%DOWNLOAD_URL%' -OutFile '%TARGET_FILE%'"
    if exist "%TARGET_FILE%" (
        echo 下载成功并保存为：%TARGET_FILE%
    ) else (
        echo 下载失败，请检查网络或地址。
    )
)


:: 构造目标路径和下载地址
set "TARGET_FILE2=%JS_FOLDER%\ggbppt%VERSION%.js"
set "DOWNLOAD_URL2=https://kz16.top/ggb/js/ggbppt%VERSION%.js"

:: 如果文件已存在则不下载
if exist "%TARGET_FILE2%" (
    echo 已存在文件：%TARGET_FILE2%，无需下载。
) else (
    echo 未找到文件，开始下载：%DOWNLOAD_URL2%
    powershell -Command "Invoke-WebRequest -Uri '%DOWNLOAD_URL2%' -OutFile '%TARGET_FILE2%'"
    if exist "%TARGET_FILE2%" (
        echo 下载成功并保存为：%TARGET_FILE2%
    ) else (
        echo 下载失败，请检查网络或地址。
    )
)


:: 构造目标路径和下载地址
set "TARGET_FILE4=%JS_FOLDER%\lang%VERSION%.js"
set "DOWNLOAD_URL4=https://kz16.top/ggb/js/lang%VERSION%.js"

:: 如果文件已存在则不下载
if exist "%TARGET_FILE4%" (
    echo 已存在文件：%TARGET_FILE4%，无需下载。
) else (
    echo 未找到文件，开始下载：%DOWNLOAD_URL4%
    powershell -Command "Invoke-WebRequest -Uri '%DOWNLOAD_URL4%' -OutFile '%TARGET_FILE4%'"
    if exist "%TARGET_FILE4%" (
        echo 下载成功并保存为：%TARGET_FILE4%
    ) else (
        echo 下载失败，请检查网络或地址。
    )
)

:: 构造目标路径和下载地址
set "TARGET_FILE5=%VERSION%.html"
set "DOWNLOAD_URL5=https://kz16.top/ggb/%VERSION%.html"

:: 如果文件已存在则不下载
if exist "%TARGET_FILE5%" (
    echo 已存在文件：%TARGET_FILE5%，无需下载。
) else (
    echo 未找到文件，开始下载：%DOWNLOAD_URL5%
    powershell -Command "Invoke-WebRequest -Uri '%DOWNLOAD_URL5%' -OutFile '%TARGET_FILE5%'"
    if exist "%TARGET_FILE5%" (
        echo 下载成功并保存为：%TARGET_FILE5%
    ) else (
        echo 下载失败，请检查网络或地址。
    )
)

echo 恭喜~~~已经全部更新成功, 目前是最新版本%VERSION%
echo 如果使用期间, 出现打不开页面等情况, 可直接从官网下载完整离线包 https://kz16.top/ggb/ggbpptReadMe.html









setlocal enabledelayedexpansion
chcp 65001 >nul
cd /d "%~dp0"

set "html_files="

for %%i in (*.html) do (
    if /i not "%%i"=="index.html" (
        set "html_files=!html_files!'%%i', "
    )
)

if defined html_files (
    set "html_files=!html_files:~0,-2!"
) else (
    set "html_files="
)

if not exist "js\" mkdir js

echo let html_files = [%html_files%]; > "js\htmlfiles.js"





@echo off
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":23456"') do set PID1=%%a
if defined PID1 (
    echo Port 23456 is already in use. Exiting...
) else (
    start "" powershell -NoExit -Command ^
      "$listener = New-Object System.Net.HttpListener;" ^
      "$listener.Prefixes.Add('http://localhost:23456/');" ^
      "$listener.Start();" ^
      "Write-Output 'Listening on port 23456...';" ^
      "while ($true) {" ^
      "  $context = $listener.GetContext();" ^
      "  $request = $context.Request;" ^
      "  $response = $context.Response;" ^
      "  $response.AddHeader('Access-Control-Allow-Origin', '*');" ^
      "  $response.AddHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');" ^
      "  $response.AddHeader('Access-Control-Allow-Headers', 'Content-Type');" ^
      "  if ($request.HttpMethod -eq 'OPTIONS') {" ^
      "    $response.StatusCode = 204;" ^
      "    $response.ContentLength64 = 0;" ^
      "    $response.Close();" ^
      "    continue;" ^
      "  }" ^
      "  $stream = $request.InputStream;" ^
      "  $reader = New-Object System.IO.MemoryStream;" ^
      "  $buffer = New-Object byte[] 4096;" ^
      "  while ($true) {" ^
      "    $bytesRead = $stream.Read($buffer, 0, $buffer.Length);" ^
      "    if ($bytesRead -eq 0) { break }" ^
      "    $reader.Write($buffer, 0, $bytesRead);" ^
      "  }" ^
      "  $rawBytes = $reader.ToArray();" ^
      "  $body = [System.Text.Encoding]::UTF8.GetString($rawBytes);" ^
      "  $queryParams = $request.Url.Query.TrimStart('?').Split('&');" ^
      "  $filePathParam = ($queryParams | Where-Object { $_ -like 'file=*' }) -replace '^file=', '';" ^
      "  if ($filePathParam) {" ^
      "    $decodedFilePath = [System.Uri]::UnescapeDataString($filePathParam);" ^
      "    $utf8Encoding = New-Object System.Text.UTF8Encoding($true);" ^
      "    [System.IO.File]::WriteAllText($decodedFilePath, $body);" ^
      "  }" ^
      "  $response.ContentType = 'text/plain; charset=utf-8';" ^
      "  $buffer = [System.Text.Encoding]::UTF8.GetBytes('true');" ^
      "  $response.ContentLength64 = $buffer.Length;" ^
      "  $response.OutputStream.Write($buffer, 0, $buffer.Length);" ^
      "  $response.OutputStream.Close();" ^
      "}"
)



powershell -ExecutionPolicy Bypass -Command "$path = (Get-Item '%cd%').FullName; $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add('http://localhost:9998/'); $listener.Start(); Start-Process 'http://localhost:9998/index.html'; while ($listener.IsListening) { $context = $listener.GetContext(); $url = $context.Request.Url.LocalPath.Substring(1); $fullpath = [System.IO.Path]::Combine($path, $url); if ($context.Request.HttpMethod -ne 'GET') { $context.Response.StatusCode = 405; $context.Response.Close(); continue }; if (Test-Path $fullpath -PathType Container) { $dir = [System.IO.Directory]::GetFiles($path); $html = '<html><body><ul>' + ($dir | %% { '<li><a href="' + $_.Substring($path.Length) + '">' + $_.Substring($path.Length) + '</a></li>' }) + '</ul></body></html>'; $buffer = [Text.Encoding]::UTF8.GetBytes($html); $context.Response.ContentType = 'text/html'; } elseif (Test-Path $fullpath) { $buffer = [System.IO.File]::ReadAllBytes($fullpath); $context.Response.ContentType = @{'.html'='text/html';'.txt'='text/plain';'.css'='text/css';'.js'='application/javascript'}[[System.IO.Path]::GetExtension($fullpath)]; } else { $context.Response.StatusCode = 404; }; $context.Response.OutputStream.Write($buffer, 0, $buffer.Length); $context.Response.Close(); }"






endlocal
pause
