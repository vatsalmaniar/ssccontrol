'use client';
import './vfd.css';
import { useState, useRef, useCallback } from 'react';

// ── VFD DATA (Mitsubishi FR-A840 / FR-A842, 400V 3-phase)
// [model, SLD_kW, SLD_A, LD_kW, LD_A, ND_kW, ND_A]
const VFD = [
  ["FR-A840-00023-2-60",  0.75, 2.3,   0.75, 2.1,  0.4,  1.5],
  ["FR-A840-00038-2-60",  1.5,  3.8,   1.5,  3.5,  0.75, 2.5],
  ["FR-A840-00052-2-60",  2.2,  5.2,   2.2,  4.8,  1.5,  4],
  ["FR-A840-00083-2-60",  3.7,  8.3,   3.7,  7.6,  2.2,  6],
  ["FR-A840-00126-2-60",  5.5,  12.6,  5.5,  11.5, 3.7,  9],
  ["FR-A840-00170-2-60",  7.5,  17,    7.5,  16,   5.5,  12],
  ["FR-A840-00250-2-60",  11,   25,    11,   23,   7.5,  17],
  ["FR-A840-00310-2-60",  15,   31,    15,   29,   11,   23],
  ["FR-A840-00380-2-60",  18.5, 38,    18.5, 35,   15,   31],
  ["FR-A840-00470-2-60",  22,   47,    22,   43,   18.5, 38],
  ["FR-A840-00620-2-60",  30,   62,    30,   57,   22,   44],
  ["FR-A840-00770-2-60",  37,   77,    37,   70,   30,   57],
  ["FR-A840-00930-2-60",  45,   93,    45,   85,   37,   71],
  ["FR-A840-01160-2-60",  55,   116,   55,   106,  45,   86],
  ["FR-A840-01800-2-60",  90,   180,   75,   144,  55,   110],
  ["FR-A840-02160-2-60",  110,  216,   90,   180,  75,   144],
  ["FR-A840-02600-2-60",  132,  260,   110,  216,  90,   180],
  ["FR-A840-03250-2-60",  160,  325,   132,  260,  110,  216],
  ["FR-A840-03610-2-60",  185,  361,   160,  325,  132,  260],
  ["FR-A840-04320-2-60",  220,  432,   185,  361,  160,  325],
  ["FR-A840-04810-2-60",  250,  481,   220,  432,  185,  361],
  ["FR-A840-05470-2-60",  280,  547,   250,  481,  220,  432],
  ["FR-A840-06100-2-60",  315,  610,   280,  547,  250,  481],
  ["FR-A840-06830-2-60",  355,  683,   315,  610,  280,  547],
  ["FR-A842-07700-2-60",  400,  770,   355,  683,  315,  610],
  ["FR-A842-08660-2-60",  450,  866,   400,  770,  355,  683],
  ["FR-A842-09620-2-60",  500,  962,   450,  866,  400,  770],
  ["FR-A842-10940-2-60",  560,  1094,  500,  962,  450,  866],
  ["FR-A842-12120-2-60",  630,  1212,  560,  1094, 500,  962],
];

const DUTY_IDX = { SLD: [1, 2], LD: [3, 4], ND: [5, 6] };
const DUTY_INFO = {
  SLD: { name: "Slight Light Duty (SLD)", ol: "110% · 1 min / 120% · 3 sec", amb: "40°C" },
  LD:  { name: "Light Duty (LD)",         ol: "120% · 1 min / 150% · 3 sec", amb: "50°C" },
  ND:  { name: "Normal Duty (ND)",        ol: "150% · 1 min / 200% · 3 sec", amb: "50°C" },
};

const MITSU_LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkgNDYiPjxzdHlsZT4uc3Qwe2ZpbGw6IzY2Nn0uc3Qxe2ZpbGw6cmVkfTwvc3R5bGU+PGcgaWQ9ImxvZ29feDVGX3BjXzFfIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNSA0MC40Yy0uMS4yLS4zLjUtLjggMS0uNS42LS44LjktMSAuOS0uMSAwLS4yLS4xLS4yLS4zIDAtLjUuMi0uOS41LTEuNC4zLS42LjctLjkgMS4xLS45LjIgMCAuMy4xLjUuMmwtLjEuNXptMS0xLjdoLTEuMmMtLjggMC0xLjUuNC0yLjMgMS4zLS43LjgtMS4xIDEuNi0xLjIgMi40IDAgLjMgMCAuNi4yLjkuMi4zLjQuNC43LjQuNCAwIC45LS4zIDEuNC0uNy40LS40LjctLjkgMS0xLjRoLjFsLS43IDJoMS42bDEuNC00LjljLS4yIDAtLjUuMS0xIDB6bTEwLjQgMS43Yy0uMS4yLS4zLjUtLjggMS4xLS41LjUtLjguOC0xIC44LS4xIDAtLjEtLjEtLjEtLjMgMC0uNC4yLS45LjUtMS40LjMtLjYuNy0uOCAxLS44LjIgMCAuMyAwIC41LjFsLS4xLjV6bS45LTEuN2gtMS4xYy0uOCAwLTEuNS40LTIuMyAxLjItLjcuOC0xLjEgMS41LTEuMiAyLjQgMCAuMyAwIC42LjIuOS4yLjIuNC40LjguNC44IDAgMS41LS43IDIuMi0yaC4yYy0uMS40LS4yLjctLjMgMS4xLS4yLjUtLjMuOS0uNSAxLjItLjMuNC0uNi41LS45LjUtLjYgMC0xLjItLjItMi0uNmwuMSAxLjRjLjQuMS45LjEgMS41LjEgMS43IDAgMi44LS43IDMuMi0yLjFsMS4zLTQuNWMtLjMgMC0uNy4xLTEuMiAwem0zLjEgMi4zYy4xLS4zLjItLjUuNC0uOHMuNS0uNC43LS40LjMuMS4zLjRjLS4xLjUtLjYuOC0xLjQuOHptLjUgMS43Yy0uNSAwLS44LS4yLS44LS43LjcgMCAxLjMtLjIgMS45LS42LjctLjQgMS4xLTEgMS4yLTEuNiAwLS4zLS4xLS42LS4zLS44cy0uNS0uMy0uOC0uM2MtLjkgMC0xLjcuMy0yLjQgMXMtMS4xIDEuNS0xLjIgMi40YzAgLjUuMS45LjUgMS4yLjMuMy44LjQgMS4zLjQuNyAwIDEuNS0uMiAyLjUtLjVsLjMtMS4yYy0uOS41LTEuNi43LTIuMi43em03LjMtMy44bC0uMyAxYy0uNC0uMS0uNy0uMi0xLS4yLS40IDAtLjcuMS0uNy40IDAgLjEuMS4zLjMuNS40LjMuNi41LjYuNi4yLjMuMy42LjMuOS0uMS42LS4zIDEtLjggMS4yLS40LjItLjkuMy0xLjUuMy0uNSAwLTEtLjEtMS43LS4zbC4zLTEuMWMuNi4zIDEuMS40IDEuNC40LjEgMCAuMyAwIC40LS4xLjEtLjEuMi0uMi4yLS4zIDAtLjItLjEtLjQtLjMtLjZsLS42LS42Yy0uMi0uMy0uMy0uNi0uMy0uOC4xLS41LjMtLjkuOC0xLjIuNC0uMi45LS4zIDEuNC0uMy4zIDAgLjcuMSAxLjUuMnptOC4zLTJsLS4zIDFjLS40LS4yLS43LS4zLTEtLjNzLS41LjEtLjcuNGMtLjEuMS0uMi40LS4zLjhoMS4ybC0uMy45aC0xLjJsLTEuNCA1aC0xLjdsMS43LTUuOGMuMi0uNi42LTEuMiAxLjEtMS41LjUtLjQgMS4xLS42IDEuNy0uNi41LS4xLjggMCAxLjIuMXptMiA1Yy0uMy41LS43LjgtMS4xLjgtLjIgMC0uNC0uMS0uNS0uM3MtLjEtLjQtLjEtLjZjMC0uNS4yLS45LjQtMS4zLjMtLjUuNi0uOCAxLjEtLjguMiAwIC40LjEuNS4zcy4xLjQuMS42Yy0uMS41LS4yLjktLjQgMS4zem0xLjYtMi44Yy0uMy0uMy0uOC0uNC0xLjMtLjQtLjkgMC0xLjcuMy0yLjQgMXMtMS4xIDEuNS0xLjIgMi40YzAgLjUuMS45LjUgMS4yLjMuMy44LjQgMS4zLjQuOSAwIDEuNy0uMyAyLjQtMXMxLjEtMS41IDEuMi0yLjRjMC0uNS0uMi0uOS0uNS0xLjJ6bTUuNy0uM2wtLjUgMS41Yy0uMS0uMS0uNC0uMS0uNS0uMS0uMyAwLS43LjItMS4yLjgtLjUuNS0uOC45LS45IDEuMmwtLjQgMS41aC0xLjZsMS40LTQuOGgxLjZsLS43IDIuMWguMWMuMy0uNS42LTEgMS0xLjQuNS0uNSAxLS44IDEuNC0uOC4xLS4xLjItLjEuMyAwem02LjQuMWwtLjMuOWgtLjhjLS4xLjQtLjMuOC0uNCAxLjItLjEuNS0uMi45LS4zIDEuMiAwIC4zLjEuNS4zLjUuMSAwIC4zLS4xLjUtLjJsLS4zIDFjLS41LjEtLjkuMi0xLjIuMnMtLjYtLjEtLjgtLjJjLS4yLS4yLS4zLS40LS4zLS44cy4yLS45LjMtMS41Yy4yLS41IDEtMy4xIDEtMy4xbDEuNy0uMi0uMyAxaC45em03LjcgMi4xYy4xLS4zLjItLjUuNC0uOC4yLS4zLjUtLjQuNy0uNHMuMy4xLjMuNGMtLjEuNS0uNS44LTEuNC44em0uNiAxLjdjLS41IDAtLjgtLjItLjgtLjcuNyAwIDEuMy0uMiAxLjktLjYuNy0uNCAxLjEtMSAxLjItMS42IDAtLjMtLjEtLjYtLjMtLjgtLjItLjItLjUtLjMtLjgtLjMtLjkgMC0xLjcuMy0yLjQgMXMtMS4xIDEuNS0xLjIgMi40YzAgLjUuMS45LjUgMS4yLjMuMy44LjQgMS4zLjQuNyAwIDEuNS0uMiAyLjUtLjVsLjMtMS4yYy0uOS41LTEuNi43LTIuMi43ek04OC4zIDQxYy4xLS4zLjItLjUuNC0uOC4yLS4zLjUtLjQuNy0uNHMuMy4xLjMuNGMtLjEuNS0uNS44LTEuNC44em0uNiAxLjdjLS41IDAtLjgtLjItLjgtLjcuNyAwIDEuMy0uMiAxLjktLjYuNy0uNCAxLjEtMSAxLjItMS42IDAtLjMtLjEtLjYtLjMtLjgtLjItLjItLjUtLjMtLjgtLjMtLjkgMC0xLjcuMy0yLjQgMXMtMS4xIDEuNS0xLjIgMi40YzAgLjUuMS45LjUgMS4yLjMuMy44LjQgMS4zLjQuNyAwIDEuNS0uMiAyLjUtLjVMOTEgNDJjLS44LjUtMS42LjctMi4xLjd6bTYuNC0zLjlsLS4zLjloLS44Yy0uMS40LS4zLjktLjQgMS4zLS4xLjUtLjIuOS0uMyAxLjIgMCAuMy4xLjUuMy41LjEgMCAuMy0uMS41LS4ybC0uMyAxYy0uNS4xLS45LjItMS4yLjItLjMgMC0uNi0uMS0uOC0uMi0uMi0uMi0uMy0uNC0uMy0uOHMuMi0uOS4zLTEuNWMuMi0uNSAxLTMuMSAxLTMuMWwxLjctLjItLjMuOWguOXptMy41IDBsLS4zLjloLS44Yy0uMS40LS4zLjktLjQgMS4zLS4xLjUtLjIuOS0uMyAxLjIgMCAuMy4xLjUuMy41LjEgMCAuMy0uMS41LS4ybC0uMyAxYy0uNS4xLS45LjItMS4yLjItLjMgMC0uNi0uMS0uOC0uMi0uMi0uMi0uMy0uNC0uMy0uOHMuMS0uOS4zLTEuNWMuMS0uNSAxLTMuMSAxLTMuMWwxLjctLjItLjIuOWguOHptMS43IDIuMmMuMS0uMy4yLS41LjQtLjguMi0uMy41LS40LjctLjRzLjMuMS4zLjRjMCAuNS0uNS44LTEuNC44em0uNiAxLjdjLS42IDAtLjgtLjItLjgtLjcuNyAwIDEuMy0uMiAxLjktLjYuNy0uNCAxLjEtMSAxLjItMS42IDAtLjMtLjEtLjYtLjMtLjgtLjItLjItLjUtLjMtLjgtLjMtLjkgMC0xLjcuMy0yLjQgMXMtMS4xIDEuNS0xLjIgMi40Yy0uMS41LjEuOS41IDEuMi4zLjMuOC40IDEuMy40LjcgMCAxLjUtLjIgMi41LS41bC4zLTEuMmMtLjkuNS0xLjYuNy0yLjIuN3pNLjEgNDFjLS4yIDEuOSAxIDMgMy4yIDMgMS4yIDAgMi40LS4yIDMuNS0uNCAwLS4xLjMtLjkuNC0xLjItLjEgMC0uMi4xLS4yLjEtLjkuMi0xLjkuNS0yLjcuNS0xLjMgMC0yLjEtLjktMi0yLjIuMi0yIDEuOC00LjEgMy44LTQuMS44IDAgMS42LjIgMi40LjUuMi0uMi40LTEuMS41LTEuMy0uOC0uMi0xLjctLjMtMi41LS4zQzIuNiAzNS42LjMgMzguNy4xIDQxem04MS44LS44Yy45IDAgMS45LjIgMS44IDEuMy0uMSAxLTEgMS4zLTEuOCAxLjMtLjMgMC0uNSAwLS44LS4xbC44LTIuNXptMS4xLTMuNGMuMi0uMS40LS4xLjYtLjEuNSAwIDEuMS4xIDEuMS43LS4xIDEuMS0xLjIgMS42LTEuNiAxLjZoLS42bC41LTIuMnptLTQuMSA2LjloMy45Yy45IDAgMi44LS42IDIuOS0yLjMuMS0xLS44LTEuNi0xLjctMS45IDEuMS0uMyAyLjQtMS4xIDIuNS0yLjMuMS0xLjYtMS42LTEuNS0yLjgtMS41aC0yLjVsLTIuMyA4em0yOS45LTQuOGwtLjYgMS41Yy0uMS0uMS0uNC0uMS0uNS0uMS0uMyAwLS43LjItMS4yLjgtLjUuNS0uOC45LS45IDEuMmwtLjQgMS41aC0xLjZMMTA1IDM5aDEuNmwtLjcgMi4xaC4xYy4zLS41LjYtMSAxLTEuNC41LS41IDEtLjggMS40LS44LjItLjIuMy0uMS40IDB6bS04NC45IDQuN2gtMS42cy44LTIuNy45LTMuMmMwIDAgMC0uMi0uMS0uMS0uMSAwLS41LjQtLjkuOXMtLjcuOC0uNyAxbC0uNSAxLjRoLTEuNmwxLjQtNC45aDEuNmwtLjcgMi4xaC4xYy4zLS41LjYtMSAxLTEuNC41LS41IDEtLjggMS40LS44LjMgMCAuNS4xLjYuMy4xLjEuMy40LjEgMWwtMSAzLjd6bS0xMy4xIDBzLjgtMi43LjktMy4yYzAgMCAuMS0uMi0uMS0uMS0uMS4xLS41LjQtLjkuOXMtLjcuOC0uNyAxbC0uNCAxLjVIOGwyLTYuOGgxLjZjLS40IDEuMy0uOCAyLjctMS4zIDRoLjFjLjMtLjUuNi0xIDEtMS40LjUtLjUgMS0uOCAxLjQtLjguMyAwIC41LjEuNi4zLjEuMS4zLjQuMSAxbC0xIDMuNmgtMS43em01Ni43IDBzLjgtMi43LjktMy4yYzAgMCAuMS0uMi0uMS0uMS0uMS4xLS41LjQtLjkuOXMtLjcuOC0uNyAxbC0uNCAxLjVoLTEuNmwyLTYuOGgxLjZjLS40IDEuMy0uOCAyLjctMS4zIDQgLjMtLjUuNi0xIDEtMS40LjUtLjUgMS0uOCAxLjQtLjguMyAwIC41LjEuNi4zLjEuMS4zLjQuMSAxbC0xIDMuNmgtMS42eiIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMi4xIDMxLjVIMEw2LjEgMjFoMTIuMWwtNi4xIDEwLjV6bTEyLjIgMGgxMi4xTDMwLjMgMjFIMTguMmw2LjEgMTAuNXptMC0yMUwxOC4yIDBsLTYuMSAxMC41TDE4LjIgMjFsNi4xLTEwLjV6Ii8+PHBhdGggZD0iTTQxLjggMjdoNC45di0xLjdoLTQuOXYtMi4yaDUuNXYtMS44aC03LjV2MTAuMmg3LjZ2LTEuOGgtNS42VjI3em0tLjEtMTQuOWwyLjEgNy42aDJsMi4yLTcuNnY3LjZoMS45VjkuNUg0N2wtMi4yIDcuMS0yLjEtNy4xaC0yLjl2MTAuMmgxLjl2LTcuNnptNDQuNy0yLjZoMnYxMC4yaC0yVjkuNXptMS43IDExLjhoMnYxMC4yaC0yVjIxLjN6bTE4LjUtMTEuOGgydjEwLjJoLTJWOS41em0tNTUuOSAwaDJ2MTAuMmgtMlY5LjV6bTUzLjEgNGgtNC4xdi00aC0ydjEwLjJoMnYtNC41aDQuMXY0LjVoMlY5LjVoLTJ2NHptLTQ4IDYuMmgyLjF2LTguNGgyLjRWOS41aC03djEuOGgyLjV2OC40em0xOC42IDExLjhoMi4xdi04LjRINzl2LTEuOGgtN3YxLjhoMi40djguNHpNNzMgMTkuOWMyLjYgMCA0LjEtMS4yIDQuMS0zLjV2LTdoLTJ2Ny4yYzAgLjktLjcgMS42LTIgMS42LTEuNSAwLTItLjktMi0xLjZWOS41aC0ydjdjLS4xIDIuNCAxLjUgMy40IDMuOSAzLjR6TTU3LjYgMjdoNC44di0xLjdoLTQuOHYtMi4ySDYzdi0xLjhoLTcuNXYxMC4yaDcuN3YtMS44aC01LjZWMjd6bTIyLjMtNy4zaDIuOWMxLjkgMCAzLjEtMS4xIDMuMS0yLjcgMC0xLjMtLjktMi40LTItMi43LjktLjIgMS42LTEuMSAxLjYtMi4zIDAtMS41LTEuMS0yLjUtMy4yLTIuNWgtNC42djEwLjJoMi4yem0yLjQtMS42aC0yLjR2LTIuOWgyLjRjLjkgMCAxLjYuNSAxLjYgMS41LS4xLjgtLjggMS40LTEuNiAxLjR6bS4xLTdjLjYgMCAxLjIuNSAxLjIgMS4yIDAgLjYtLjQgMS4zLTEuMyAxLjNoLTIuNHYtMi41aDIuNXptMy4yIDE1LjVjLjktLjMgMS44LTEgMS44LTIuNSAwLTEuOC0xLjItMi44LTMuMy0yLjhoLTQuNnYxMC4yaDIuMXYtNGgxLjdjMS4xIDAgMS42LjUgMS44IDEuMy4yLjguMSAyIC4zIDIuN2gyLjFjLS4yLS44LS4zLTEuOC0uNC0yLjcgMC0xLjQtLjctMS45LTEuNS0yLjJ6bS00LS43di0yLjhIODRjLjggMCAxLjQuNiAxLjQgMS40IDAgLjYtLjUgMS40LTEuMyAxLjRoLTIuNXptLTMxLjUtNC42aC0ydjEwLjJoNi44di0xLjhoLTQuOHYtOC40em0xMy43LTUuOWMxLjcuMyAyLjYuNiAyLjYgMS42IDAgLjctLjcgMS4zLTIgMS4zcy0yLjEtLjgtMi4xLTEuN2gtMmMwIDEuOCAxLjEgMy40IDQuMSAzLjQgMi44IDAgNC4xLTEuNSA0LjEtMy4yIDAtMS42LTEtMi42LTIuOS0zLTEuOC0uNC0zLS40LTMtMS42IDAtLjguNy0xLjIgMS44LTEuMiAxLjIgMCAxLjguNiAxLjggMS42aDJjMC0xLjYtMS4yLTMuMy0zLjktMy4zLTEuOSAwLTMuOCAxLjEtMy44IDMuMSAwIDEuNiAxLjIgMi42IDMuMyAzem0yOC42IDBjMS42LjMgMi42LjYgMi42IDEuNiAwIC43LS43IDEuMy0yIDEuMy0xLjQgMC0yLjEtLjgtMi4xLTEuN2gtMmMwIDEuOCAxLjEgMy40IDQuMSAzLjQgMi44IDAgNC4xLTEuNSA0LjEtMy4yIDAtMS42LTEtMi42LTIuOS0zLTEuOC0uNC0zLS40LTMtMS42IDAtLjguNy0xLjIgMS44LTEuMiAxLjIgMCAxLjguNiAxLjggMS42aDJjMC0xLjYtMS4yLTMuMy0zLjktMy4zLTEuOSAwLTMuOCAxLjEtMy44IDMuMSAwIDEuNiAxLjMgMi42IDMuMyAzeiIvPjxwYXRoIGQ9Ik02Ny44IDI5LjljLTEuNyAwLTIuNi0xLjYtMi42LTMuNiAwLTEuOS45LTMuNiAyLjYtMy42IDEuMyAwIDEuOS44IDIuMiAxLjdoMi4xYy0uMy0yLTEuOS0zLjUtNC40LTMuNS0zLjEgMC00LjcgMi40LTQuNyA1LjNzMS42IDUuMyA0LjcgNS4zYzIuNCAwIDQuMS0xLjQgNC40LTMuNkg3MGMtLjMgMS4zLS45IDItMi4yIDJ6bTI3LjUgMGMtMS43IDAtMi42LTEuNi0yLjYtMy42IDAtMS45LjktMy42IDIuNi0zLjYgMS4zIDAgMS45LjggMi4yIDEuN2gyLjFjLS4zLTItMS45LTMuNS00LjQtMy41LTMuMSAwLTQuNyAyLjQtNC43IDUuM3MxLjYgNS4zIDQuNyA1LjNjMi40IDAgNC4xLTEuNCA0LjQtMy42aC0yLjFjLS4zIDEuMy0uOSAyLTIuMiAyeiIvPjwvZz48L3N2Zz4NCg==";

export default function VfdPage() {
  const [kwVal, setKwVal] = useState('');
  const [hpVal, setHpVal] = useState('');
  const [activeField, setActiveField] = useState('kw');
  const [convNote, setConvNote] = useState('1 HP = 0.746 kW \u00a0|\u00a0 1 kW = 1.341 HP');
  const [duty, setDuty] = useState('SLD');
  const [sliderIdx, setSliderIdx] = useState(-1);
  const [sliderKwDisplay, setSliderKwDisplay] = useState('\u2014');
  const [sliderHpDisplay, setSliderHpDisplay] = useState('\u2014');
  const [sliderPct, setSliderPct] = useState(0);
  const [result, setResult] = useState(null); // null | { ... }
  const [showTable, setShowTable] = useState(false);
  const lastResultRef = useRef(null);

  // ── KW/HP CONVERSION (exact match to original)
  const HP_PER_KW = 1.34102;
  const KW_PER_HP = 0.7457;

  function runSelection(kw, currentDuty) {
    if (!kw || kw <= 0) return null;
    const idx = DUTY_IDX[currentDuty];
    const matchIdx = VFD.findIndex(r => r[idx[0]] >= kw);
    if (matchIdx < 0) {
      return { outOfRange: true, maxKw: VFD[VFD.length - 1][idx[0]], duty: currentDuty };
    }
    const row = VFD[matchIdx];
    const model = row[0];
    const dKw = row[idx[0]];
    const dA  = row[idx[1]];
    const dInfo = DUTY_INFO[currentDuty];
    const hp = (kw * HP_PER_KW).toFixed(1);
    const headroom = dKw - kw;
    const res = { model, dKw, dA, duty: dInfo.name, ol: dInfo.ol, amb: dInfo.amb, currentKw: kw, hp, headroom, matchIdx };
    lastResultRef.current = res;
    return res;
  }

  function syncSlider(kw, currentDuty) {
    const idx = DUTY_IDX[currentDuty];
    const si = VFD.findIndex(r => r[idx[0]] >= kw);
    if (si >= 0) {
      setSliderIdx(si);
      setSliderPct((si / (VFD.length - 1)) * 100);
      setSliderKwDisplay(parseFloat(kw).toFixed(2));
      setSliderHpDisplay((kw * HP_PER_KW).toFixed(1));
    }
  }

  function onKwInput(e) {
    const raw = e.target.value;
    setKwVal(raw);
    const kw = parseFloat(raw);
    if (!isNaN(kw) && kw > 0) {
      setHpVal((kw * HP_PER_KW).toFixed(2));
      setConvNote(`${kw} kW = ${(kw * HP_PER_KW).toFixed(2)} HP`);
      syncSlider(kw, duty);
      setResult(runSelection(kw, duty));
    } else {
      setHpVal('');
    }
  }

  function onHpInput(e) {
    const raw = e.target.value;
    setHpVal(raw);
    const hp = parseFloat(raw);
    if (!isNaN(hp) && hp > 0) {
      const kw = hp * KW_PER_HP;
      setKwVal(kw.toFixed(2));
      setConvNote(`${hp} HP = ${kw.toFixed(2)} kW`);
      syncSlider(kw, duty);
      setResult(runSelection(kw, duty));
    } else {
      setKwVal('');
    }
  }

  function selectDuty(d) {
    setDuty(d);
    const kw = parseFloat(kwVal);
    if (!isNaN(kw) && kw > 0) {
      syncSlider(kw, d);
      setResult(runSelection(kw, d));
    } else {
      // no kw yet — just update duty visual
      setResult(null);
    }
  }

  function onSlider(e) {
    const i = parseInt(e.target.value, 10);
    const idx = DUTY_IDX[duty];
    const row = VFD[i];
    const kw = row[idx[0]];
    const hp = (kw * HP_PER_KW).toFixed(2);
    const pct = (i / (VFD.length - 1)) * 100;
    setSliderIdx(i);
    setSliderPct(pct);
    setSliderKwDisplay(kw);
    setSliderHpDisplay((kw * HP_PER_KW).toFixed(1));
    setKwVal(String(kw));
    setHpVal(hp);
    setConvNote(`${kw} kW = ${hp} HP`);
    setResult(runSelection(kw, duty));
  }

  function buildEmailBody() {
    const r = lastResultRef.current;
    if (!r) return '';
    return `VFD Selection Enquiry
=====================
Required Motor Power  : ${r.currentKw} kW (${r.hp} HP)
Duty Type             : ${r.duty}
Overload Capacity     : ${r.ol}
Ambient Temperature   : ${r.amb}

Recommended VFD Model : ${r.model}
VFD Rated Output      : ${r.dKw} kW
VFD Rated Current     : ${r.dA} A
Power Headroom        : ${r.headroom > 0 ? '+' : ''}${r.headroom.toFixed(2)} kW

Please provide pricing and availability for the above model.
Thank you.`;
  }

  function downloadReport() {
    const r = lastResultRef.current;
    if (!r) return;
    let content = 'SSC CONTROL PVT LTD — VFD SELECTION REPORT\n';
    content += 'Generated: ' + new Date().toLocaleString('en-IN') + '\n';
    content += '================================================\n';
    content += 'Motor Power: ' + r.currentKw + ' kW (' + r.hp + ' HP)\n';
    content += 'Duty Type: ' + r.duty + '\n';
    content += 'Overload: ' + r.ol + '\n';
    content += 'Ambient: ' + r.amb + '\n\n';
    content += 'RECOMMENDED VFD\n';
    content += 'Model: ' + r.model + '\n';
    content += 'Rated Output: ' + r.dKw + ' kW\n';
    content += 'Rated Current: ' + r.dA + ' A\n';
    content += 'Headroom: ' + (r.headroom > 0 ? '+' : '') + r.headroom.toFixed(2) + ' kW\n\n';
    content += 'SSC Control Pvt Ltd | Authorised Mitsubishi Electric Partner\n';
    content += 'sales@ssccontrol.com | +91 93130 80866\n';
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
    a.download = 'SSC_VFD_Report_' + new Date().toISOString().slice(0, 10) + '.txt';
    a.click();
  }

  // ── Render helpers
  const currentKw = parseFloat(kwVal);
  const validKw = !isNaN(currentKw) && currentKw > 0;

  function ResultBody() {
    if (!result) {
      return (
        <div className="no-result">
          <div className="no-result-icon">&#9889;</div>
          <p>Enter motor power in kW or HP, select duty type,<br />and the matching Mitsubishi FR-A840 VFD will appear here.</p>
        </div>
      );
    }
    if (result.outOfRange) {
      return (
        <div className="no-result">
          <div className="no-result-icon">&#9888;&#65039;</div>
          <p>Motor power exceeds available FR-A840 range for {result.duty} duty.<br />Please consult SSC Control for custom solutions.</p>
        </div>
      );
    }
    const r = result;
    const seriesColor = r.model.startsWith('FR-A842') ? '#fca5a5' : '#93c5fd';
    const mailBody = encodeURIComponent(buildEmailBody());
    return (
      <>
        <div className="result-cards">
          <div className="result-card">
            <div className="rc-label">Motor Power</div>
            <div className="rc-value" style={{ color: 'var(--navy)' }}>{parseFloat(r.currentKw).toFixed(2)} kW</div>
            <div className="rc-sub">{r.hp} HP</div>
          </div>
          <div className="result-card">
            <div className="rc-label">VFD Model</div>
            <div className="rc-value model">{r.model}</div>
            <div className="rc-sub" style={{ color: seriesColor, fontWeight: 600 }}>{r.model.startsWith('FR-A842') ? 'FR-A842 Series' : 'FR-A840 Series'}</div>
          </div>
          <div className="result-card">
            <div className="rc-label">Rated Output</div>
            <div className="rc-value">{r.dKw} kW</div>
            <div className="rc-sub">{(r.dKw * HP_PER_KW).toFixed(1)} HP</div>
          </div>
          <div className="result-card">
            <div className="rc-label">Rated Current</div>
            <div className="rc-value amps">{r.dA} A</div>
            <div className="rc-sub">at {r.amb} ambient</div>
          </div>
          <div className="result-card">
            <div className="rc-label">Power Headroom</div>
            <div className="rc-value" style={{ color: r.headroom > 0 ? '#16a34a' : 'var(--blue2)' }}>
              {r.headroom > 0 ? '+' : ''}{r.headroom.toFixed(2)} kW
            </div>
            <div className="rc-sub">above requirement</div>
          </div>
        </div>

        <div className="rec-box">
          <div className="rec-inner">
            <div>
              <div className="rec-mitsu-badge">
                <img src={MITSU_LOGO} style={{ height: '16px', filter: 'brightness(0) invert(1)', opacity: 0.8 }} alt="Mitsubishi" />
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em' }}>MITSUBISHI ELECTRIC · FR-A840 Series</span>
              </div>
              <div className="rec-title">Recommended VFD Model</div>
              <div className="rec-model">{r.model}</div>
              <div className="rec-pills">
                <span className="rec-pill pill-kw">{r.dKw} kW · {(r.dKw * HP_PER_KW).toFixed(1)} HP</span>
                <span className="rec-pill pill-amps">{r.dA} A rated</span>
                <span className="rec-pill pill-duty">{duty} &#8212; {r.ol}</span>
              </div>
              <div className="rec-note">
                400V 3-phase · Ambient {r.amb} · {r.duty}<br />
                SSC Control is an authorised Mitsubishi Electric partner. Contact our sales team for pricing, availability, and technical support.
              </div>
            </div>
            <div className="rec-actions">
              <a
                href={`mailto:sales@ssccontrol.com?subject=VFD Enquiry \u2014 ${r.model}&body=${mailBody}`}
                className="btn-action btn-enquiry"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Send Enquiry
              </a>
              <button onClick={downloadReport} className="btn-action btn-download">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Report
              </button>
              <a href="tel:+919313080866" className="btn-action btn-primary-action">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.66 3.12 2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Contact Sales
              </a>
            </div>
          </div>
        </div>

        <div className="specs-bar">
          <span className="spec-item"><strong>Input:</strong> {parseFloat(r.currentKw).toFixed(2)} kW ({r.hp} HP) required</span>
          <span className="spec-item"><strong>Duty:</strong> {r.duty}</span>
          <span className="spec-item"><strong>Overload:</strong> {r.ol}</span>
          <span className="spec-item"><strong>Ambient:</strong> {r.amb}</span>
          <span className="spec-item"><strong>Supply:</strong> 400V 3-Phase 50/60Hz</span>
        </div>
      </>
    );
  }

  function FullTable() {
    const hi = result && !result.outOfRange ? result.matchIdx : -1;
    return (
      <table>
        <thead>
          <tr>
            <th rowSpan={2} style={{ background: 'var(--navy)' }}>Model</th>
            <th colSpan={2} className="group-sld">SLD &#8212; Slight Light Duty (40°C) · 110%/1min · 120%/3sec</th>
            <th colSpan={2} className="group-ld">LD &#8212; Light Duty (50°C) · 120%/1min · 150%/3sec</th>
            <th colSpan={2} className="group-nd">ND &#8212; Normal Duty (50°C) · 150%/1min · 200%/3sec</th>
          </tr>
          <tr>
            <th className="group-sld">kW</th><th className="group-sld">Amps</th>
            <th className="group-ld">kW</th><th className="group-ld">Amps</th>
            <th className="group-nd">kW</th><th className="group-nd">Amps</th>
          </tr>
        </thead>
        <tbody>
          {VFD.map((r, i) => (
            <tr
              key={r[0]}
              className={i === hi ? 'highlighted' : ''}
              style={r[0].startsWith('FR-A842') ? { background: 'rgba(255,100,100,0.04)' } : {}}
            >
              <td>{r[0]}</td>
              <td>{r[1]}</td><td>{r[2]}</td>
              <td>{r[3]}</td><td>{r[4]}</td>
              <td>{r[5]}</td><td>{r[6]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  const badgeText = result
    ? result.outOfRange
      ? `Out of range — max ${result.maxKw} kW`
      : `${result.model} · ${result.dKw} kW · ${result.dA} A`
    : 'Enter motor power to begin';

  return (
    <main className="page-vfd">
      {/* HERO */}
      <div className="page-hero">
        <div className="hero-tag">Variable Frequency Drive Selection</div>
        <h1>VFD Selection Tool</h1>
        <p>Find the correct Mitsubishi FR-A840 series VFD for your motor. Enter rated motor power in kW or HP, select the application duty type, and get instant model recommendation with rated current and overload capacity.</p>
        <div className="hero-partner">
          <span className="hero-partner-label">Powered by</span>
          <div className="mitsu-logo-wrap">
            <img
              src={MITSU_LOGO}
              style={{ height: '22px', width: 'auto', filter: 'brightness(0) invert(1)', opacity: 0.85 }}
              alt="Mitsubishi Electric"
            />
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>FR-A840 Series · 400V 3-Phase · 0.75 kW – 630 kW</span>
        </div>
      </div>

      <div className="tool-wrapper">
        <div className="steps-row">

          {/* STEP 1: KW / HP INPUT */}
          <div className="step-card">
            <div className="step-num">Step 1</div>
            <div className="step-title">Motor Rated Power</div>
            <div className="power-input-grid">
              <div className="power-field">
                <label htmlFor="kwInput">Kilowatts</label>
                <div className="power-input-wrap">
                  <input
                    id="kwInput"
                    type="number"
                    className={`power-input${activeField === 'kw' ? ' active-field' : ''}`}
                    placeholder="0.0"
                    step="0.01"
                    min="0.1"
                    max="700"
                    value={kwVal}
                    onChange={onKwInput}
                    onFocus={() => setActiveField('kw')}
                  />
                  <span className="power-unit">kW</span>
                </div>
              </div>
              <div className="equals-icon">&#8651;</div>
              <div className="power-field">
                <label htmlFor="hpInput">Horsepower</label>
                <div className="power-input-wrap">
                  <input
                    id="hpInput"
                    type="number"
                    className={`power-input${activeField === 'hp' ? ' active-field' : ''}`}
                    placeholder="0.0"
                    step="0.01"
                    min="0.1"
                    max="1000"
                    value={hpVal}
                    onChange={onHpInput}
                    onFocus={() => setActiveField('hp')}
                  />
                  <span className="power-unit">HP</span>
                </div>
              </div>
            </div>
            <div className="conversion-note">{convNote}</div>
          </div>

          {/* STEP 2: DUTY TYPE */}
          <div className="step-card">
            <div className="step-num">Step 2</div>
            <div className="step-title">Application Duty Type</div>
            <div className="duty-cards">
              {[
                { key: 'SLD', name: 'SLD \u2014 Slight Light Duty', spec: '110% · 1 min \u00a0|\u00a0 120% · 3 sec \u00a0|\u00a0 40°C ambient', tag: 'Fans / Pumps', tagClass: 'tag-sld' },
                { key: 'LD',  name: 'LD \u2014 Light Duty',          spec: '120% · 1 min \u00a0|\u00a0 150% · 3 sec \u00a0|\u00a0 50°C ambient', tag: 'General',     tagClass: 'tag-ld' },
                { key: 'ND',  name: 'ND \u2014 Normal Duty',         spec: '150% · 1 min \u00a0|\u00a0 200% · 3 sec \u00a0|\u00a0 50°C ambient', tag: 'Heavy Duty',  tagClass: 'tag-nd' },
              ].map(d => (
                <div
                  key={d.key}
                  className={`duty-card${duty === d.key ? ' selected' : ''}`}
                  onClick={() => selectDuty(d.key)}
                >
                  <div className="duty-radio"><div className="duty-radio-dot"></div></div>
                  <div className="duty-info">
                    <div className="duty-name">{d.name}</div>
                    <div className="duty-spec">{d.spec}</div>
                  </div>
                  <span className={`duty-tag ${d.tagClass}`}>{d.tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* STEP 3: QUICK SELECT SLIDER */}
          <div className="step-card">
            <div className="step-num">Step 3</div>
            <div className="step-title">Quick Power Select</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <span className="slider-kw-display">{sliderKwDisplay}</span>
                  <span style={{ fontSize: '13px', color: 'var(--gray)' }}> kW</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="slider-hp-display">{sliderHpDisplay}</span>
                  <span style={{ fontSize: '12px', color: 'var(--gray)' }}> HP</span>
                </div>
              </div>
              <input
                type="range"
                id="kwSlider"
                min="0"
                max={VFD.length - 1}
                step="1"
                value={sliderIdx < 0 ? 0 : sliderIdx}
                style={{ '--pct': sliderPct + '%' }}
                onChange={onSlider}
              />
              <div className="slider-minmax">
                <span>0.75 kW</span><span>37 kW</span><span>132 kW</span><span>400 kW</span><span>630 kW</span>
              </div>
              <div className="slider-hint">
                Slide to select standard motor size, or type exact value in Step 1.
              </div>
            </div>
          </div>

        </div>{/* end steps-row */}

        {/* RESULTS */}
        <div className="results-section">
          <div className="results-header">
            <h2>VFD Selection Result</h2>
            <span className="results-badge">{badgeText}</span>
          </div>
          <div id="resultsBody">
            <ResultBody />
          </div>
        </div>

        {/* TABLE TOGGLE */}
        <div className="table-toggle-row">
          <label>
            <input
              type="checkbox"
              checked={showTable}
              onChange={e => setShowTable(e.target.checked)}
            />
            Show full FR-A840 selection table for current duty type
          </label>
        </div>
        <div className={`table-section${showTable ? '' : ' hidden'}`}>
          {showTable && <FullTable />}
        </div>

      </div>{/* end tool-wrapper */}
    </main>
  );
}
