module.exports = ({
name: "perfil",
aliases: ["usuario", "lanos", "yo"],
code: `
$thumbnail[$getGlobalUserVar[fondo;$findUser[$message]]]
$author[Perfil de $username[$findUser[$message]]#$discriminator[$findUser[$message]];$userAvatar[$findUser[$message]]]
$footer[Desarrollado por HuguitisYT#1234]
$color[$getGlobalUserVar[embedcolor;$findUser[$message]]]

$description[
**Rol:** $getGlobalUserVar[userrole;$findUser[$message]]
**Baneado:** $getGlobalUserVar[baneado;$findUser[$message]]
**Cantidad de lanos:** $getGlobalUserVar[lanos;$findUser[$message]]
**Cuentas generadas:** $getGlobalUserVar[usergencount;$findUser[$message]]
**Biografía:** $getGlobalUserVar[biografia;$findUser[$message]]

** __Complementos comprados__: **
$getGlobalUserVar[biotienes;$findUser[$message]] - **Biografía personalizada**
$getGlobalUserVar[colortienes;$findUser[$message]] - **Color personalizado**
$getGlobalUserVar[fondotienes;$findUser[$message]] - **Imagen personalizada**
$getGlobalUserVar[blacktienes;$findUser[$message]] - **Blacklist en su server** 

** __Puestos en la leaderboard__: **
**Cuentas Generadas:** Top #$getLeaderboardInfo[usergencount;$findUser[$message];globaluser;top]
**Cantidad de Lanos:** Top #$getLeaderboardInfo[lanos;$findUser[$message];globaluser;top]
]
` 
})
