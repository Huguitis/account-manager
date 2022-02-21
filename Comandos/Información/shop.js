module.exports = ({
name: "shop",
aliases: "tienda",
code: `
$footer[Desarrollado por HuguitisYT#1234]
$color[GREEN]
$description[
** __Compra algo con +buy-(item)__ **
**Lo tienes: $getVar[goodemoji]
No lo tienes: $getVar[bademoji]**

$getGlobalUserVar[biotienes] - **Bio** (Establece una biografía a tu perfil del bot) - 10 lanos.
$getGlobalUserVar[colortienes] - **Color** (Cambia el color del embed de tu perfil) - 50 lanos.
$getGlobalUserVar[fondotienes] - **Imagen** (Establece una imagen al embed de tu perfil) - 150 lanos.
$getGlobalUserVar[blacktienes] - **Blacklist** (Permite bloquear usuarios de usar el gen en tu server) - 300 lanos.

]
` 
})