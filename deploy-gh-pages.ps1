# Script para desplegar a GitHub Pages
Write-Host "🚀 Iniciando despliegue a GitHub Pages..." -ForegroundColor Green

# Build de producción
Write-Host "📦 Generando build de producción..." -ForegroundColor Yellow
ng build --configuration=production

# Copiar archivos a docs
Write-Host "📂 Copiando archivos a docs..." -ForegroundColor Yellow
Copy-Item -Path "dist\riesgird-web\browser\*" -Destination "docs\" -Recurse -Force

# Git add, commit y push
Write-Host "📤 Subiendo cambios a GitHub..." -ForegroundColor Yellow
git add docs angular.json
git commit -m "Deploy: Actualizar GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push

Write-Host "✅ ¡Despliegue completado! El sitio estará disponible en unos minutos." -ForegroundColor Green
Write-Host "🌐 URL: https://james250920.github.io/riesgird-web/" -ForegroundColor Cyan
