---
slug: becomeadmin
id: cs2-becomeadmin
title: "CS2: Become as Server Admin"
description: "How can I become an serveradmin on my CS2 Pro server"
sidebar_label: "Become as Server Admin"
---

import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction
How do I become an administrator on my own CS2 Pro server for the first time? We've created some descriptions below on how to do it.

<span style={{paddingLeft: '0.25rem', paddingRight: '0.25rem', paddingTop: '1px', paddingBottom: '1px', backgroundColor: '#4F46E5', color: '#ffffff', fontWeight: '600', borderRadius: '0.25rem'}}>PRO only</span>

**There are 2 different ways you can do this. (Videos)**
<details>
  <summary>Howto use `/login` command with Say / Say_Team In-Game?</summary>

<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-login2.mp4"/>
</video>
</details>

<details>
 <summary>Howto use `login` command with my ingame console? (Open the console first)</summary>

<video playsinline autoPlay muted width="100%">
  <source src="https://dl.fsho.st/videos/cs2-admin-console-login.mp4" type="video/mp4"/>
</video>
</details>

:::note[You can use `Say` or `Say_team` from your in-game]
1. What RCONPassword did you create for your CS2 Pro Server? (You need to remember it)
2. Join your CS2Pro Server
3. **Say**/**Say_team**: `/login YourGameServer's RCON Password`
4. **Say**/**Say_team**: `/addadmin YourSteamID64` to add yourself or your friend as admin.
:::

:::note[Open your console, from your in-game]
1. What RCON Password did you create for your CS2 Pro Server? (You need to remember it)
2. Join your CS2Pro Server
3. `login YourGameServer's RCON Password` 
4. `addadmin YourSteamID64` to add yourself or your friend as admin.
:::

**This is an example when you have added yourself as a server admin.**
![2024-08-22_13-24](https://github.com/user-attachments/assets/74a456ce-627a-4508-ab33-c827415b6593)


| Chat Command | Description |
| ------------ | ----------- |
| `/addadmin [target]` | To add a new administrator to your CS2 server, you can enter their SteamID64 |
| `/removeadmin [target]` | To remove an administrator from the server, you can enter their SteamID64 |
| `/listadmins` | Show a list of administrators on your CS2 server along with their SteamID64 and nickname. |
