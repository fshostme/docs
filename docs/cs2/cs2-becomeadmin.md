---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become admin"
description: Information on how to become an admin on your CS2 server from FSHOST
sidebar_label: Become admin
---



## Introduction

Using administrator privileges allows you to manage the server in-game. This gives you the ability to execute commands through the console.

## Prerequisites
To use administrator privileges, a foundation must first be established. By default, CS2 does not offer comprehensive administration management. However, there are frameworks for this purpose, such as CounterStrikeSharp.


:::note
**You won't be added as admin automatically by use `/login`.**
<br />
Please use `/addadmin <target>` to add yourself or your friend as admin.
<br />**Example target**:
<br />SteamID64
<br />Steam-Nickname
:::

| Chat Command | Description |
| ------------ | ----------- |
| `/login [rconpassword]` | Authenticate as the server owner to add or remove administrators from the server. |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their nickname/user ID if they are online on the server. If they are not online, you can use their SteamID64 or nickname. |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their nickname/user ID if they are online. If they are not online, you can use their SteamID64 or nickname. |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
