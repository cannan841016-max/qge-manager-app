@echo off
chcp 65001 >nul
title Q哥店長助理 Pro - iPhone 18 Pro Max 手機安裝與預覽伺服器
echo =====================================================================
echo   👑 Q哥店長助理 Pro (iOS 27 液態玻璃版) 手機安裝伺服器已啟動！
echo =====================================================================
echo.
echo 💻 【電腦本機預覽網址】:
echo    http://localhost:8080
echo.
echo 📱 【安裝到您的 iPhone 18 Pro Max 步驟】:
echo    1. 請確認您的 iPhone 18 Pro Max 與這台電腦連接「同一個門市 Wi-Fi」
echo    2. 打開 iPhone 上的「Safari 瀏覽器」，輸入下方顯示的網址：
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
    echo       👉 http://%%a:8080   （請忽略網址前的空白）
)
echo.
echo    3. 網頁開啟後，點擊 Safari 底部中間的「分享按鈕 (方框向上箭頭 📤)」
echo    4. 往下滑點選「加入主畫面 (Add to Home Screen)」-^> 點擊右上角「新增」
echo    5. 完成！桌面就會出現「Q哥店長助理」專屬 APP 圖示，支援全螢幕與離線使用！
echo =====================================================================
echo.
start http://localhost:8080
where python >nul 2>nul
if %errorlevel%==0 (
    python -m http.server 8080 --bind 0.0.0.0
) else (
    npx --yes serve -l 8080
)
pause
