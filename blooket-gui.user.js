/**
 * @license StewartPrivateLicense-2.0.1
 * Copyright (c) Aerell McKnight 2023
 *
 * You may not reproduce or distribute any code inside this file without the licenser's permission.
 * You may not copy, modify, steal, skid, or recreate any of the code inside this file.
 * You may not under any circumstance republish any code from this file as your own.
 * 
 * ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
 * https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
 */

// ==UserScript==
// @name         Blooket GUI Hacks
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Comprehensive GUI with hacks for all Blooket game modes
// @author       minesraft2, OneMinesraft2
// @match        https://dashboard.blooket.com/*
// @match        https://play.blooket.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();

    // GUI and cheat code will load here
    console.log('Blooket GUI loaded successfully!');
})();
