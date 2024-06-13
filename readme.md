My homepage
===========

visit at https://oostd.am

TODO:
-----
- 

How to deploy
-------------

- Have the gcloud commandline tools installed. https://cloud.google.com/sdk/docs/install-sdk
- init glcoud ```gcloud init```
- for windows enable script execution in powershell: ```Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned```
- run ```gcloud app deploy ./app.yaml```

Fix the build
--------------
If you break the build by deleting buckets for example
Try ```gcloud beta app repair```
And ```gcloud app deploy ./app.yaml --no-cache```