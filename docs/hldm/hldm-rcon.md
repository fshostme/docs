---
slug: rcon
id: hldm-rcon
title: "RCON Commands"
---

## Log into RCON/SourceMod
Open console in-game and run the login command to gain access to all the following commands. The RCON password will be displayed on your [panel](https://fshost.me/free-panel).
<br /><br /> **RCON** <br />
`rcon_password type_rcon_pass_here`

<span style={{padding: '0.75rem', display: 'block', marginTop: '0.5rem', marginBottom: '1rem', borderRadius: '0.25rem', fontWeight: '600', backgroundColor: '#1F2937', color: 'white'}}>RCON<br />rcon_password type_rcon_pass_here<br /></span>

## General Settings
:::tip
If you want additional custom maps added that we don't already have, please [check here first](https://dl.fsho.st/cs16/maps/). If the maps you want are not there then [contact us](https://fshost.me/contact) with the map download links.

<br />**We suggest these site below**:
<br /> [Gamebanana](https://gamebanana.com/mods/cats/5297?)
<br /> [Gamemaps](https://www.gamemaps.com/hl/)
<br /> [7buddies.rocks](https://www.17buddies.rocks/17b2/View/Maps/Gam/1/Mod/77/Cat/149/All/0/Pag/1/Maps%20HLDM.html)
:::

**Maps**<br />
List all maps.
<br /> `rcon maps *`

Changing the map (any stock or custom map).
<br /> `rcon changelevel mapnamehere`

To restart the game.
<br /> `rcon restart`


**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `rcon sv_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you are required to keep the advert part in the hostname.**
`rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"`


## Policing Your Server

**Status**<br />
Shows the Slot Number, Name, SteamID, IP, and other info of the players connected.
<br />`rcon status`

**Players**<br />
Get players list
<br />`rcon users`

Kick a player
<br />`rcon kick #id or name`

## Other Commands
*Coming soon*
