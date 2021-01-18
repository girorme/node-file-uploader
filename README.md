Node file uploader
--

### Start
```
$ yarn install
$ yarn start
# or debug to verbose
$ yarn debug
```

## Send xlsx
```
curl -X POST -F "data=@file.xlsx" http://localhost:3000/files/xlsx | json_pp
```