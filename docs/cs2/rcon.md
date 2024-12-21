---
slug: rcon
id: cs2-rcon
title: "RCON Commands"
---

:::danger[RCON Info]
<span style={{color: 'white'}}>**The RCON provided by Valve is currently broken and non-functional. Please use `fake_rcon` (**Free servers only** – temporarily unavailable for Pro servers until a fix becomes available).**</span>
:::

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>PRO server only</span>
:::tip
If you have a Pro server and want to learn how to become a Server Admin, click the link below for more information.

Click here to learn more: [CS2 Pro: How to Become a Server Admin](https://help.fshost.me/docs/cs2/becomeadmin)
:::


## Log into RCON
Open your in-game console and use one of the following commands to log in as an admin on your server.

The RCON password will be displayed on your [Free server panel](https://fshost.me/free-panel) or within your [Pro area](https://fshost.me/pro).

**Temporary Admin Access on Free Server** - using fake_rcon
<br />`fake_rcon_password type_rcon_pass_here`
<br />`fake_rcon say hi`

![image](https://help.fshost.me/img/cs2-console.png)

## General Settings
**Maps**<br />
Displays a list of all available maps.
<br /> `rcon maps *`

You can change the current map to any stock one.
<br />**In-Game: Use say or say_team** `!map mapnamehere` - Example: `!map dust2`

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>FREE only</span> 

Restart the game after a specified number of seconds.
<br /> `fake_rcon mp_restartgame <seconds>`

This command sets how much money players are given at the beginning of a half. The default is 800.
<br /> `fake_rcon mp_startmoney Amount`

The maximum amount of rounds that the server will play before restarting.
<br /> `fake_rcon mp_maxrounds Amount`

This command, if set to 1, will make you automatically bunnyhop by holding down the space bar. Default is disabled (1).
<br /> `fake_rcon sv_autobunnyhopping <0 / 1>`

**Password** <br />You can change or remove the password to join your server by leaving the value empty.
<br /> `fake_rcon sv_password ""`

**Hostname** <br />You can change the hostname on the request form or if you want to change it after you've started it, you can do so using this command. **Please note that you must keep the advert part in the hostname.**
<br />`fake_rcon hostname "CUSTOM HOSTNAME - free @ fshost.me"`

**Cheats** <br />Do you want to enable sv_cheats?
<br />`fake_rcon sv_cheats 1`


## Load a different config/gamemode/map
<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>Free server only</span>
<br />Loads the predefined settings.

| Chat Command (`Say`/`Say_Team`) | Description |
| ------------ | ----------- |
| !esl5on5     | This is the standard ESL 5on5 configuration file. (**Note: A ready system is not included.**) |
| !scrim       | A configuration for scrims with all rounds enabled. (**Note: Pause and unpause commands are not available.**) |
| !prac        | The default practice configuration file. (**Note: Public commands are not accessible.** To use commands like `.throw`, `.bot`, and more, a Pro server is required.)
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
| !map train | !train		  |
