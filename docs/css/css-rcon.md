---
slug: rcon
id: css-rcon
title: "RCON Commands"
description: "CS Source RCON Commands"
---

## Log into RCON or SourceMod
To access the following commands, open the in-game console and use the login command. Your RCON password will be displayed for reference. [Panel](https://fshost.me/free-panel).
<span style={{padding: '0.75rem', display: 'block', marginTop: '0.5rem', marginBottom: '1rem', borderRadius: '0.25rem', fontWeight: '600', backgroundColor: '#1F2937', color: 'white'}}>RCON (in-game console)<br />`rcon_password type_rcon_pass_here`<br />SourceMod (In-game Say / Say_Team)<br />`/login type_rcon_pass_here`</span>

## SteamID64 Admin
<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Pro only</span>

:::info
If you have already added your SteamID64 by editing the server below the field: **`Admin's SteamID64`** - For example, like this image below, where you add your SteamID64.

![image](https://help.fshost.me/img/css-steamidadmin.png)
\
Then you already have access to use `!admin` and `!map mapname` already.
:::

## General Settings
:::tip
If you want additional custom maps added that we don't already have, please [check here first](https://dl.fsho.st/css/maps/). If the maps you'd like to play are not there then [contact us](https://fshost.me/contact) with the map download links.

<br />**We suggest these site below**:
<br /> [Gamebanana](https://gamebanana.com/mods/cats/5535)
<br /> [CS-BG.info](https://maps.cs-bg.info/maps/css/) 
<br /> [7buddies.rocks](https://www.17buddies.rocks/17b2/View/Maps/Gam/2/Mod/4/Cat/0/All/0/Pag/1/CS%3ASource.html)
:::

**Maps**<br />
List all maps.
<br /> `rcon maps *`

Changing the map (any stock or custom map).
<br /> `rcon changelevel mapnamehere`

To restart the game after X amount of seconds.
<br /> `rcon sv_restart seconds`

To change max rounds of the game. (example 20 rounds)
<br /> `rcon mp_maxrounds 20`

Switch teams and game will be restarted.
<br /> `rcon mp_switchteams`

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

## Bots (Pro only)
| Command (with rcon) | Description |
| ----- | ----- |
| bot_add | Adds a bot |
| bot_add_ct | `rcon bot_add_ct <type> <difficulty> <name>` - Adds a Counter-Terrorist bot matching the given criteria. |
| bot_kick | Kicking bots |
| bot_kill | Killing bots - sv_cheats 1 required to be enabled. |
| bot_quota 0 | Determines the total number of bots in the game. |
| bot_stop 0 | If nonzero, immediately stops all bot processing. |

