echo off
set arg1=%1
git checkout %arg1% && amplify env checkout %arg1%
