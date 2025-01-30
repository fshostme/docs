---
slug: cstv
id: cs2-cstv
title: "CS2: CSTV"
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

## Errors

- **[Demo] 2024-11-28_XX-XX-XX_XXXX_de_mirage_team_XXXX_vs_team_XXXXXX.dem:  unable to extract addons from file** - [Follow this link](https://www.reddit.com/r/cs2/comments/18ei4n4/cant_play_demos_cs2_unable_to_extract_addons_from/)
