---
slug: rcon
id: cod2-rcon
title: "RCON Commands"
---

## Log into RCON
Open the console in-game and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).
<br /> `/rcon login type_rcon_pass_here`

## General Settings
**Map**<br />
You can change the current map to any stock one or we have a custom map list.
<br /> `/rcon map mp_mapnamehere`

After changing any map settings, like the game mode, you must restart the map so the changes can take effect.
<br /> `/rcon map_restart`

Reset the scores and map.
<br /> `/rcon fast_restart`

**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `/rcon g_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you must keep the advert part in the hostname.**
`/rcon sv_hostname "^6CUSTOM HOSTNAME ^7- free @ fshost.me"`

**Friendly fire** <br />You can disable or enable the friendly fire.
`/rcon scr_friendlyfire 0/1`

**Game Mode** <br />
It's easy to change the game mode with this command, but please remember to restart the map after setting the game mode.
<br /> `/rcon g_gametype gametypehere`

| Command | Name |
| ------- | ---- |
| /rcon g_gametype dm  | Deathmatch |
| /rcon g_gametype tdm | Team Deathmatch |
| /rcon g_gametype sd  | Search and Destroy |
| /rcon g_gametype ctf | Capture the Flag |
| /rcon g_gametype hq | Headquarters |
| /rcon g_gametype strat | Strat / Training |

## Policing Your Server

**Status**
Shows the Slot Number, Name, GUID, IP, and other info of the players connected.
<br />`/rcon status`

**Players**
Get PB player list, if PB is enabled
<br />`/rcon pb_sv_plist`

Kick a player
<br />`/rcon clientkick clientslot`

Kick all players
<br />`/rcon kickall`

Take a screenshot (you will need PB enabled for this)
<br />`/rcon pb_sv_getss clientslot`
