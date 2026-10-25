@echo off
chcp 65001 >nul
title Q哥店長助理 Pro - 一鍵上傳與同步更新到 GitHub 雲端
echo =====================================================================
echo   ☁️ Q哥店長助理 Pro - 一鍵上傳 / 同步專案至 GitHub
echo   🔗 目標儲存庫: https://github.com/cannan841016-max/qge-manager-app.git
echo =====================================================================
echo.

set GCM_INTERACTIVE=always
set GIT_TERMINAL_PROMPT=1

git remote set-url origin https://github.com/cannan841016-max/qge-manager-app.git 2>nul || git remote add origin https://github.com/cannan841016-max/qge-manager-app.git

git add .
git diff --cached --quiet
if %errorlevel% neq 0 (
    git commit -m "更新 Q哥店長助理 Pro"
)

echo 🚀 正在呼叫 GitHub 瀏覽器登入授權並上傳專案 (main 分支)...
echo 💡 若跳出視窗，請選擇「Sign in with your browser」或輸入 GitHub 帳號授權！
echo.
git push -u origin main
echo.
echo =====================================================================
echo ✅ 若上方顯示 branch 'main' set up to track 'origin/main' 即代表上傳成功！
echo 👉 接著請打開: https://github.com/cannan841016-max/qge-manager-app/settings/pages
echo    將 Source 選為「GitHub Actions」或「Deploy from a branch (main)」，
echo    即可獲得專屬網址並安裝到您的 iPhone 18 Pro Max 主畫面！
echo =====================================================================
pause
