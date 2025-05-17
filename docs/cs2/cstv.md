---
slug: cstv
id: cs2-cstv
title: "CSTV"
description: "Information about CSTV for CS2 Server from FSHOST"
sidebar_label: "CSTV [Pro]"
---

## Introduction

CSTV offers the possibility to broadcast games live with a little delay. This means that outsiders who are not involved in the game can also follow what is happening on the server. This technology is also used in the well-known counter-strike tournaments so that the spectators can watch the spectacle. Furthermore, the transmissions can also be saved automatically, so that you can watch them again afterwards.

## Activation

The activation of the CSTV service is done via our **panel** page. 


## Configuration

The above commands are mandatory so that the CSTV master server is activated and accessible. However, there are other commands for advanced configuration below:

| Command          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| tv_name "name"   | CSTV hostname. Defines the CSTV name as it appears in the server browser |
| tv_record "filename" | Starts recording a CSTV demo                                         |
| tv_stoprecord    | Stops recording a CSTV demo                                              |


## Establishing the connection

If the function is activated on the server, access is possible via the IP address and the CSTV port assigned to it on the server. To connect, you need the console in the game. There you can then connect with the following command:

```
connect SERVERIP:XXXX
```

## Demo Playback
To hear all player's voice chat, use the following commands in your console before loading up the demo:
```
tv_listen_voice_indices -1
tv_listen_voice_indices_h -1

playdemo yourdemo.dem
```

## CSTV Camera Positions
`spec_pos` - which gives you the coordinations of your current location as a spectator (must have sv_cheats enabled)<br />
`spec_goto <coordinations>` - which instantly switches to that angle (or teleports you to the entered coordinations)

## ❌ Errors

You have downloaded the demo, but you can't view it due to the following errors:

<div className="demo-error-block">
```text
[Demo] Requesting playback of '2025-XX-XX_XX-XX-XX_3_de_mirage_team_XXXXX_vs_team_XXXXX.dem'
CRealMemoryDemoBuffer::Init: demo file '2025-XX-XX_XX-XX-XX_3_de_mirage_team_XXXXX_vs_team_XXXXX.dem' doesn't exist in pathid ''
[DemoFile] CDemoFile::Open: couldn't open file 2025-XX-XX_XX-XX-XX_3_de_mirage_team_XXXXX_vs_team_XXXXX.dem for reading.
[DemoFile] ReadDemoHeader: invalid pBuffer.
[Demo] 2025-XX-XX_XX-XX-XX_3_de_mirage_team_XXXXX_vs_team_XXXXX.dem: unable to extract addons from file
```
</div><br />

Please delete the file you downloaded earlier and re-download it.

**Then follow these steps:**
1. Open **Steam**  
2. Right-click on **Counter-Strike 2**  
3. Select **Properties**  
4. Go to the **Installed Files** tab  
5. Click **Browse**  
6. In the window that opens, navigate to the folder: `game` → `csgo`

This is where the `.dem` file should be located.
