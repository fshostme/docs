---
slug: rcon
id: cs2-rcon
title: "RCON Commands"
---

::::danger[RCON Info]
<span style={{color: 'white'}}>**RCON supplied by Valve is currently broken/non-functional. Please use `fake_rcon` or other options as directed below.**</span>
::::

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>PRO only</span>
:::tip
If you have a Pro server, you do NOT need to use `fake_rcon` on your game's console. 

You can already add yourself as a server admin on your Pro server.
\
\
Click here > [CS2Pro: Become an Server Admin](https://help.fshost.me/docs/cs2/becomeadmin)
:::


## Log into RCON
Open your in-game console and run one of the following commands to log in to your server as admin.

The RCON password will be displayed on your [free server panel](https://fshost.me/free-panel) or within your [Pro area](https://fshost.me/pro).

**Temporary Admin on Free Server** - using Fake RCON
<br />`fake_rcon_password type_rcon_pass_here`
<br />`fake_rcon say hi`

![image](https://help.fshost.me/img/cs2-console.png)

## General Settings
**Maps**<br />
List all maps.
<br /> `rcon maps *`

You can change the current map to any stock one.
<br />**In-Game: Say/Say_team** `!map mapnamehere` - Example: `!map dust2`


<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>FREE only</span> 

To restart the game after X amount of seconds.
<br /> `fake_rcon mp_restartgame seconds`

This command sets how much money players are given at the beginning of a half. The default is 800.
<br /> `fake_rcon mp_startmoney Amount`

The maximum amount of rounds that the server will play before restarting.
<br /> `fake_rcon mp_maxrounds Amount`

This command, if set to 1, will make you automatically bunny hop by holding down the space bar. Default is disabled (1).
<br /> `fake_rcon sv_autobunnyhopping <0 / 1>`

**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `fake_rcon sv_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you must keep the advert part in the hostname.**
`fake_rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"`

**Cheats** <br />Do you want to enable sv_cheats?
`fake_rcon sv_cheats 1`



## Load a different config/gamemode/map
<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Free server only</span>
<br />Loads the predefined settings.

| Chat Command | Description |
| ------------ | ----------- |
| !esl5on5     | This is a default esl5on5 file (No Ready system!) |
| !scrim       | Scrim config with all rounds enabled (None pause/unpause command!) |
| !prac        | Default Practice CFG (**There are no public commands available! - If you need .throw, .bot and other commands - you'll need a Pro server**)
| !dm          | Deathmatch Gamemode |
| !retake      | Retake Gamemode |
| !wingman     | Wingman Gamemode |
| !map ancient | !ancient         |
| !map anubis  | !anubis          |
| !map dust2   | !dust2           |
| !map inferno | !inferno         |
| !map mirage  | !mirage          |
| !map nuke    | !nuke            |
| !map overpass | !overpass       |
| !map vertigo | !vertigo         |
