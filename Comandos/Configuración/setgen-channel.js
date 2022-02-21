module.exports = ({
name: "setgen-channel", 
code: `
$description[$getVar[goodemoji] Listo $username, he configurado el canal de los comandos del generador en <#$findChannel[$message]>]
$color[GREEN]
$footer[Desarrollado por HuguitisYT#1234]

$setServerVar[genchannel;$findChannel[$message]]

$cooldown[15s;{description:$getVar[bademoji] **Hey $username, debes esperar %time% antes de volver a ejecutar el comando.**}{color:RED}{footer: Desarrollado por HuguitisYT#1234}]

$onlyIf[$channelExists[$findChannel[$message]]!=false;{color:RED}{footer: Desarrollado por HuguitisYT#1234}{description: $getVar[bademoji] **Hey $username, el canal que indicastes no existe.**}]

$onlyBotPerms[admin;{color:RED}{footer: Desarrollado por HuguitisYT#1234}{description: $getVar[bademoji] **Hey $username, necesito administrador en el servidor para poder hacer eso.**}]

$onlyPerms[managechannels;{color:RED}{footer: Desarrollado por HuguitisYT#1234}{description: $getVar[bademoji] **Hey $username, debes tener el permiso de configurar canales para poder usar eso.**}]

$onlyIf[$getGlobalUserVar[blacklist;$authorID]==No Blacklisteado;{color:RED}{description: $getVar[bademoji] **No puedes usar el bot porque estas en la blacklist del bot debido a que incumpliste las normas o hiciste un mal uso de este. Si quieres apelar [abre un ticket](https://discord.gg/GeVRXn8KZ3) en el servidor oficial.**}]
`
})