////////////////////////////////
// Creado por HuguitisYT#1234 //
//    discord.link/huguitis   //
//      Soporte abierto       //
////////////////////////////////

const settings = require("./settings.json");
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: settings.token,
suppressall: true,
errorMessage: "{description:$getVar[bademoji] **Hey $username, ha ocurrido un error, puedes reportarlo en ** http://discord.link/huguitis **}{color:RED}{footer: Desarrollado por HuguitisYT#1234}",
prefix: settings.prefix
})

// Command Handler
bot.loadCommands(`./Comandos/`)

// Callbacks
bot.onMessage() 

// Inicio
bot.readyCommand({
    channel: "",
    code: `$log[Listo en $userTag[$clientID]]`
})

// Estados
bot.status({
  text: "$serverCount servidores | +help",
  type: "WATCHING",
  time: 12
})

bot.status({
  text: "la tienda de lanos | +shop",
  type: "WATCHING",
  time: 12
})

// Variables, no modificar para que el bot funcione correctamente
bot.variables({
    genchannel: "Sin especificar",
    blacklist: "No Blacklisteado",
    blacklistpublico: "No Blacklisteado",
    baneado: "No",
    usergencount: "0",
    userrole: "Usuario",
    lanos: "0",
    biografia: "Sin especificar",
    fondo: "https://cdn.discordapp.com/attachments/880882720014745610/885473728903929867/png_fondo_blanco_by_camilhitha124_d3hgxl4-fullview.png",
    embedcolor: "#9b9b9b",

    coloraccess: "Desactivado",
    colortienes: settings.bademoji,

    fondoaccess: "Desactivado",
    fondotienes: settings.bademoji,

    bioaccess: "Desactivado",
    biotienes: settings.bademoji,

    blackaccess: "Desactivado",
    blacktienes: settings.bademoji,

    ownerid: settings.ownerid,
    logschannel: settings.logschannel,
    goodemoji: settings.goodemoji,
    bademoji: settings.bademoji
})
