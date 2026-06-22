# 🎮 Best Bookmarklet Hacks

A collection of **Blooket cheats and hacks** including a comprehensive GUI userscript and individual bookmarklet JavaScript codes for all game modes.

⚠️ **Disclaimer**: These cheats violate Blooket's Terms of Service. Use at your own risk. Account bans may result from using these cheats.

---

## 📋 Table of Contents
1. [Blooket GUI Userscript](#-blooket-gui-userscript)
2. [Bookmarklet Hacks](#-bookmarklet-hacks)
3. [Installation Guide](#-installation-guide)
4. [How to Use](#-how-to-use)

---

## 🖥️ Blooket GUI Userscript

### What is it?
The **Blooket GUI Userscript** is a comprehensive, user-friendly interface that provides cheats for **all Blooket game modes** in one place. It features:

- 🎨 **Customizable GUI** with themes and colors
- ⌨️ **Keybind controls** (Hide: Ctrl+E, Close: Ctrl+X)
- 📊 **Real-time leaderboard** tracking
- 🎮 **40+ game mode cheats** including:
  - Global (Auto Answer, Highlight Answers, Spam Buy Blooks)
  - Gold Quest, Crypto Hack, Fishing Frenzy
  - Tower Defense, Tower Defense 2, Factory
  - Monster Brawl, Cafe, Flappy Blook
  - Deceptive Dinos, Tower of Doom, Crazy Kingdom
  - Racing, Battle Royale, Blook Rush, Santa's Workshop
  - And more...

### Installation (Userscript)

#### Option 1: Tampermonkey (Recommended)
1. Install [Tampermonkey](https://www.tampermonkey.net/) for your browser
2. Go to: [`blooket-gui.user.js`](./blooket-gui.user.js)
3. Click **Raw** (top-right)
4. Tampermonkey will prompt you to install - click **Install**
5. Done! The script will auto-run on Blooket sites

#### Option 2: Manual Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Open Tampermonkey Dashboard
3. Click **+ Create a new script**
4. Copy the entire contents of [`blooket-gui.user.js`](./blooket-gui.user.js)
5. Paste into the editor
6. Press **Ctrl+S** to save
7. Done!

### How to Use (Userscript)

1. **Open Blooket** and start/join a game
2. **Toggle the GUI** with `Ctrl+E` (show/hide)
3. **Close the GUI** with `Ctrl+X`
4. **Select a game mode** from the left menu
5. **Click on a cheat** to activate it
6. **Customize settings** in the Settings tab:
   - Change colors, themes
   - Adjust GUI scale (25%-100%)
   - Modify keybinds

#### GUI Features:
- **Settings**: Themes, colors, scale, keybinds
- **Alerts**: Live game logs and leaderboard
- **Toggle Cheats**: Cheats that can be turned on/off
- **Input Cheats**: Cheats that require values (e.g., set gold amount)
- **Drag**: Use the ✥ button to move the GUI around

---

## 📚 Bookmarklet Hacks

### What are Bookmarklets?
**Bookmarklets** are JavaScript codes that run directly in your browser bookmarks. They're simpler than userscripts but less user-friendly. Each file is a standalone hack for a specific cheat.

### Available Bookmarklets
The repository contains individual bookmarklet JS files for each cheat. Examples:
- `autoAnswer.js` - Auto-answers questions correctly
- `setGold.js` - Sets your gold amount
- `setCrypto.js` - Sets your crypto amount
- `removeEnemies.js` - Removes all enemies in tower defense
- And many more...

### Installation (Bookmarklet)

#### Step 1: Access Your Bookmarks
- **Chrome/Edge**: Press `Ctrl+Shift+B` to show bookmarks bar
- **Firefox**: Press `Ctrl+Shift+B` to show bookmarks bar
- **Safari**: Press `Cmd+Option+B`

#### Step 2: Create a New Bookmark
1. Right-click on your bookmarks bar
2. Select **Add page** or **Create bookmark**
3. In the **Name** field, enter the cheat name (e.g., "Auto Answer")
4. Leave the **URL** field empty for now

#### Step 3: Add the Code
1. Go to the bookmarklet file you want (e.g., [`autoAnswer.js`](./))
2. Click **Raw** to view the raw code
3. Copy the entire code (Ctrl+C)
4. Return to your new bookmark
5. In the **URL** field, paste: `javascript:` followed by the code
   - Example: `javascript:(function() { /* code here */ })()`
6. Save the bookmark

#### Step 4: Use the Bookmarklet
1. Open Blooket and start a game
2. Click the bookmarklet in your bookmarks bar
3. The cheat will run immediately
4. Some cheats may show an alert with results

### Example: Adding "Auto Answer" Bookmarklet

```
javascript:(function() {
  // Code from autoAnswer.js goes here
  // When you click this bookmark, it auto-answers the question
})();
```

---

## 🚀 How to Use

### Using the GUI (Easiest)
```
1. Install Tampermonkey + blooket-gui.user.js
2. Start a Blooket game
3. Press Ctrl+E to open GUI
4. Select your game mode
5. Click cheats to activate
6. Press Ctrl+X to close
```

### Using Bookmarklets (Quick & Simple)
```
1. Create bookmarks with bookmarklet codes
2. Start a Blooket game
3. Click the bookmark to run a specific cheat
4. That's it!
```

### Recommended Setup
- **For full game**: Use the **GUI Userscript** (more features, customizable)
- **For quick hacks**: Use **Bookmarklets** (faster, no setup needed after installation)
- **Mix & Match**: Use both for maximum flexibility

---

## 🎯 Popular Cheats

### Global (Works in most games)
- **Auto Answer** - Automatically selects correct answers
- **Highlight Answers** - Colors correct answers green, wrong ones red
- **Spam Buy Blooks** - Open packs automatically
- **Every Answer Correct** - Makes all answers correct

### Gold Quest
- **Always Triple** - Always get 3x gold multiplier
- **Auto Choose** - Automatically picks best gold option
- **Chest ESP** - Shows what each chest contains

### Crypto Hack
- **Choice ESP** - Shows what each choice gives
- **Password ESP** - Highlights correct password
- **Always Triple** - Always get 3x crypto

### Factory
- **Remove Glitches** - Removes all enemy glitches
- **Send Glitch** - Send glitches to all players
- **Set Cash** - Set your cash amount

### Tower Defense
- **Max Tower Stats** - Makes all towers overpowered
- **Remove Enemies** - Removes all enemies
- **Set Round** - Jump to any round

---

## ⚙️ Troubleshooting

### Userscript not working?
- ✅ Make sure Tampermonkey is installed and enabled
- ✅ Check that you're on `dashboard.blooket.com` or `play.blooket.com`
- ✅ Try refreshing the page (F5)
- ✅ Check Tampermonkey dashboard to ensure script is enabled

### GUI won't appear?
- ✅ Press `Ctrl+E` to toggle it
- ✅ Check browser console for errors (F12)
- ✅ Try using an incognito window

### Bookmarklet not running?
- ✅ Make sure bookmark is in the format: `javascript:` + code
- ✅ Check if JavaScript is enabled in your browser
- ✅ Some cheats only work in specific game modes

### Getting caught/Banned?
- ✅ Use "Prevent Suspension" cheat in Global menu
- ✅ Don't use obvious cheats in multiplayer
- ✅ Blooket detection gets better - use at your own risk

---

## 📝 Credits

- **Original Developer**: minesraft2 (Aerell McKnight)
- **GUI Creator**: OneMinesraft2#5394
- **Repository**: [Minesraft2/Blooket-Cheats](https://github.com/Minesraft2/Blooket-Cheats)
- **Current Repository**: [Malik7528/best-bookmarklet-hacks](https://github.com/Malik7528/best-bookmarklet-hacks)

---

## ⚠️ Legal Disclaimer

These cheats are provided **for educational purposes only**. Using them:
- Violates Blooket's Terms of Service
- May result in account suspension or permanent ban
- Is not encouraged or endorsed by Blooket
- Use at your own risk

**We are not responsible for any consequences resulting from using these cheats.**

---

## 📞 Support

- Found a bug? Open an [Issue](https://github.com/Malik7528/best-bookmarklet-hacks/issues)
- Want to contribute? Submit a [Pull Request](https://github.com/Malik7528/best-bookmarklet-hacks/pulls)
- Have questions? Check the [Discussions](https://github.com/Malik7528/best-bookmarklet-hacks/discussions)

---

## 🔗 Useful Links

- [Tampermonkey Installation](https://www.tampermonkey.net/)
- [Original Blooket Cheats](https://github.com/Minesraft2/Blooket-Cheats)
- [Blooket Official Site](https://www.blooket.com/)

---

**Last Updated**: June 22, 2026  
**Version**: 1.0
