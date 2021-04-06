rm -R .\out\
npm run build
cd out
Get-ChildItem -File -Recurse | % { Rename-Item -Path $_.PSPath -NewName $_.Name.replace(".html","")}
Rename-Item -Path "404" -NewName "404.html"
cd ..
firebase deploy