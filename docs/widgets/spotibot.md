---
title: SpotiBot
description: A complete guide for SpotiBot, the ultimate now-playing widget for Kick streamers.
---

# SpotiBot: The Ultimate Now-Playing Widget for Kick Streamers

SpotiBot is the ultimate now-playing widget designed specifically for Kick streamers. It enhances the streaming experience with interactive features like song requests, voting, and playlist curation.

---

## Key Benefits

### 1. **User Engagement in Chat**
- Your viewers can interact with the bot using fun chat commands like `!song`, `!playlist`, and more.

### 2. **Monetization Opportunities**
- Viewers earn credits by subscribing or gifting subs, which they can use to request songs or other features.

### 3. **Hot or Not Feature**
- Let your audience decide if the currently playing song is a hit or a flop using the `!hot` or `!not` commands.

---

## Hot or Not Feature

This feature encourages real-time viewer interaction with your stream's music.

- **Voting Commands:** Viewers can use `!hot` or `!not` to vote on the current song.
- **Automatic Playlist Curation:** Songs that meet the "hot" threshold are automatically added to a curated Spotify playlist.
- **Rating Command:** Use `!rating` to check the current song's rating.

---

## Song Request Search Options

SpotiBot supports three ways for viewers to request songs:

### 1. **Traditional Search**
Viewers can search for songs by typing `!sq` followed by keywords. Example:
```
!sq Never Gonna Give You Up
```

### 2. **Advanced Search**
For precise requests, viewers can use `!sq` with the `artist` and `title` fields. Example:
```
!sq artist:Rick Astley title:Never Gonna Give You Up
```

### 3. **Spotify URI Requests**
If a viewer has a Spotify URI for a specific track, they can request it directly. Example:
```
!sq spotify:track:<URI>
```

---

## Commands Overview

### Everyone Commands
- `!song` - Show the currently playing song.
- `!playlist` - Share the link to the current playlist.
- `!sq` - Queue a song (using the search options above).
- `!hot` - Vote "hot" for the current song.
- `!not` - Vote "not" for the current song.
- `!rating` - Show the rating for the current song.
- `!credits` - Show how many credits the user has.

### Moderator Commands
- `!skip` - Skip the current song.
- `!ban` - Ban a song from being requested again.
- `!clearqueue` - Clear the entire song request queue.

---

## How to Earn Credits

Viewers earn credits in the following ways:

1. **Subscribing to Your Channel**
   - Subscribers automatically receive bonus credits.

2. **Gifting Subscriptions**
   - Viewers earn credits for each gifted subscription.

3. **Watching and Interacting**
   - Additional credits can be earned by watching your stream or participating in chat.

Credits can be redeemed for song requests and other interactive features.

---

## Setup Instructions

Follow these steps to integrate SpotiBot into your Kick stream:

### Step 1: Invite the Bot
1. Visit the [SpotiBot Dashboard](https://spotibot.kicktools.app).
2. Log in with your Kick account.
3. Authorize the bot to join your channel.

### Step 2: Configure Settings
1. Navigate to the "Settings" tab on the dashboard.
2. Customize the following:
   - Maximum queue length.
   - Credit costs for requests.
   - Hot/Not voting thresholds.

### Step 3: Add the Widget to Your Stream
1. Go to the "Widget" tab on the dashboard.
2. Copy the browser source URL provided.
3. Add the URL as a browser source in your streaming software (e.g., OBS, Streamlabs).

---

## Frequently Asked Questions

### **How do I check my viewers' credits?**
Use the `!credits` command in chat to display how many credits a viewer has.

### **Can I ban specific songs?**
Yes, use the `!ban` command followed by the song's title or URI to ban it from future requests.

### **What happens if the song queue is full?**
Viewers will receive a message in chat informing them that the queue is full.

---

## Support

If you encounter any issues, please reach out:
- Visit the [Support Page](https://support.kicktools.app).
- Join the [KickTools Discord](https://discord.gg/kicktools).
- Email us at [support@kicktools.app](mailto:support@kicktools.app).

---

Happy streaming with SpotiBot!
