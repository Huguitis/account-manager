module.exports = ({
name: "set-bio",
aliases: ["setbio"],
code: `
$description[$getVar[goodemoji] Listo $username, he actualizado tu biografía a **$getGlobalUserVar[biografia]**]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$wait[1s]

$setGlobalUserVar[biografia;$message]

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$charCount[$message]<300;{description:$getVar[bademoji] **Hey $username, ¡tu biografía es demasiado larga! No puede contener más de 300 carácteres.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$charCount[$message]>5;{description:$getVar[bademoji] **Hey $username, ¡tu biografía es demasiado corta! Debe tener al menos 5 carácteres.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$argsCheck[>1;{description:$getVar[bademoji] **Hey $username, debes indicar tu biografía después del comando.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$getGlobalUserVar[bioaccess]!=Desactivado;{description:$getVar[bademoji] **Hey $username, primero debes comprar por lanos esta implementación para tu perfil. Puedes usar +shop o +buy-(item) para comprarlo.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

`
})
