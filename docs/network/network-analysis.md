---
slug: /network-analysis
title: "Network troubleshooting with MTR/WinMTR"
description: Information on how to perform a network analysis with MTR/WinMTR to identify network problems
sidebar_label: Network troubleshooting
---

## Introduction

WinMTR is a network diagnostics program that combines the features of ping and traceroute. The program was developed by Matt Kimball based on the well-known MTR program for Linux. It offers the possibility to get detailed information about possible network problems. The program also allows to track the time between sending a signal and receiving the corresponding response packet. In the following screenshot the outgoing route to fshost.me is shown as an example:


![image](https://help.fshost.me/img/winmtr-3.png)

## Installation



### Windows

WinMTR for Windows can be downloaded from the [FSHOST](https://help.fshost.me/WinMTR.zip) page. Once installed, the program must be started and the host name or IP address of the affected case needs to be filled in:

![image](https://user-images.githubusercontent.com/13604413/159171614-5ffff921-5d69-4786-8c8f-1a1f63413a97.png)



### Linux

MTR on Linux requires an SSH connection to the server.

Now the package can be installed with the following command:

```
apt install -y mtr-tiny
```

![image](https://help.fshost.me/img/aptlinux.png)


The evaluation can then be started with the command **mtr IPaddress/hostname**. By pressing CTRL+C you can stop the test at any time as desired.

![image](https://help.fshost.me/img/mtr.png)


## Create report

The network diagnostic test should be performed when the problem actively occurs. The person who is affected by the problem should perform the test. In order to be able to analyze the network problems as well as possible, an evaluation of the outgoing and ingoing route should be made. Depending on the operating system either WinMTR (Windows) or MTR (Linux) is used. 



## Evaluate report

The program provides several kinds of information. You have to check this information carefully in order to identify the problem correctly.


![image](https://help.fshost.me/img/winmtr-2.png)

While evaluating a route, the example message **No response from host** may appear from time to time, reporting 100% packet loss. However, this is often not the direct cause. In such a case it is possible that only the packets are filtered by the firewall and therefore no response comes or is generally unreachable. The next possible option for the route is then selected. Only if the packet loss starts at one point and continues through others is there active packet loss. 

| Value  |                Meaning                 |
| :----: | :------------------------------------: |
|  Host  |        Name of the network node        |
| Loss % |       Percentage of packet loss        |
|  Sent  | The number of packets sent to the node |
|  Recv  |     The number of received packets     |
|  Best  |         Best ping of the node          |
|  Avrg  |        Average ping of the node        |
|  Wrst  |         Worst ping of the node         |
|  Last  |         Last ping of the node          |
