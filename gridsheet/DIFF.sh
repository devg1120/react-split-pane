SRC1=case20
SRC2=case20_1

diff -r -y  --suppress-common-lines --color=always    ./${SRC1}/react-core/src  ./${SRC2}/react-core/src  | less -R
diff -r  --color=always    ./${SRC1}/react-core/src  ./${SRC2}/react-core/src  | less -R
#diff -r -y  --suppress-common-lines --color=always    ./${SRC1}/src  ./${SRC2}/src  


