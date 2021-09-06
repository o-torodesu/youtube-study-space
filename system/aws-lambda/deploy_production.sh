# TODO: ################## これは本番環境用です!!!!!!!!!!! ###################


# rooms_state, youtube_organize_database, reset_daily_total_study_time


# Windows (PowerShell)
$env:CGO_ENABLED = "0"; $env:GOOS = "linux"; $env:GOARCH = "amd64"; aws configure set region ap-northeast-1
go build -o main constants.go credential.go response.go    youtube_organize_database.go
C:\Users\momom\go\bin\build-lambda-zip.exe -output main.zip main
aws lambda create-function --function-name     test_function     --runtime go1.x --zip-file fileb://main.zip --handler main --role arn:aws:iam::652333062396:role/service-role/my-first-golang-lambda-function-role-cb8uw4th --timeout 10
aws lambda update-function-code --function-name     test_function     --zip-file fileb://main.zip


# TODO: ################## これは本番環境用です!!!!!!!!!!! ###################

# Mac OS
GOARCH=amd64 && GOOS=linux && aws configure set region ap-northeast-1 &&  go build -o main common.go news.go
zip main.zip main

aws lambda create-function --function-name change_user_info --runtime go1.x --zip-file fileb://main.zip --handler main --role arn:aws:iam::652333062396:role/service-role/my-first-golang-lambda-function-role-cb8uw4th --timeout 10

aws lambda update-function-code --function-name news --zip-file fileb://main.zip
