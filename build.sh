ARG1=${1}
if [ ${ARG1} ]
then
    rm -rf ${ARG1}/transpiled
    mkdir ${ARG1}/transpiled
    #node -e \"console.log(process.cwd())\"
    babel experiments -d ${ARG1}/transpiled
else
    echo \"Error: Param not specified\" && exit 1
fi