echo off
set arg1=%1
git checkout -b %arg1% && amplify env add %arg1%
