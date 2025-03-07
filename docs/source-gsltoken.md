---
id: source-gsltoken
title: "Using game server login tokens"
description: "Information on how to create and use a login token for your Source game server from FSHOST"
sidebar_label: "GSL-Token"
---

## ❓ What is a GSL token?

Gameserver Login Tokens (GSLTs) is a procedure that Steam has implemented as a security measure. To run gameservers of certain Steam Games (mostly source games) it is necessary to generate a token.



## ❓ What is the purpose of a GSL token?

In the past, Valve made a few rule changes for hosting a game server. Not all game server operators have followed those regulations. As a consequence, the IP addresses of game servers were banned.

However, this method was not effective, since it could easily be bypassed with a new IP address and was also a huge issue for game server providers. The reason for this is that by banning the IP address, other customers were often also affected.

That's why this system has been implemented, which instead bans the token and blocks the linked Steam Account for further game server operation. 


## ➕ Create token

To create a game server login token, you need to be logged in to the Steam website. The Token can be created here: [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)



![image](https://help.fshost.me/img/GSLT.png)



When you get there, you will be asked for the App ID and a memo (any name you wish to use as a note). The App ID depends on the game. In the following you will find the most important App IDs:

|              Game               | App ID |
| :------------------------------: | :----: |
|      Counter-Strike: 2           |  730   |
|      Counter-Strike: Source      |  240   |
|      Team Fortress 2             |  440   |



The GSL token can be defined in the interface under the WeaponPaints setting.

![image](https://help.fshost.me/img/fshgslt.png)

Once this step is done, remember to save and restart the server, the server will also appear in the public server list. 

## ⁉ Frequently asked questions

**What are the prerequisites for a GSL token?**

The Steam Account is not allowed to have a restriction like a community ban. In addition, a valid telephone number needs to be registered with the Steam Account.


**Can I use one GSL token for multiple servers?**

An individual token is necessary for each game server.


**Is there anything that can cause my GSL token to be banned?**

Especially with CS2 game server there are some plugins which are not allowed to be used. An official list wasn't published. However, this includes plugins which change player inventories (weapon skins), ranks or similar. 


**What happens if my GSL token is banned?**

If a token is banned, then as a result the account and all associated tokens are also banned. This means that the game server is no longer publicly accessible. Also, the account can no longer be used for operating further game servers in the future. Nevertheless, the Steam Account can still be used for playing. No further punishments are to be expected in this regard.
