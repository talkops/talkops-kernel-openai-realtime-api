# TalkOps Kernel: OpenAI Realtime API
![Docker Pulls](https://img.shields.io/docker/pulls/talkops/talkops-kernel-openai-realtime-api)

A TalkOps Kernel made to work with [TalkOps](https://link.talkops.app/talkops).


## Installation Guide

_[TalkOps](https://link.talkops.app/install-talkops) must be installed beforehand._


## Integration Guide

Add the service and setup the environment variables if needed:

_compose.yml_
``` yml
name: talkops

services:
...
  talkops-kernel-openai-realtime-api:
    image: talkops/talkops-kernel-openai-realtime-api
    environment:
      API_KEY: [your-value]
    restart: unless-stopped
```

## Environment Variables

#### API_KEY

The API key. Sign up at [OpenAI Platform](https://platform.openai.com/signup) to obtain your [api key](https://platform.openai.com/api-keys).

#### DEFAULT_LANGUAGE

The default language. [More info](https://platform.openai.com/docs/guides/text-to-speech#supported-languages)
* Default value: `English`
* Available values: `Afrikaans` `Arabic` `Armenian` `Azerbaijani` `Belarusian` `Bosnian` `Bulgarian` `Catalan` `Chinese` `Croatian` `Czech` `Danish` `Dutch` `English` `Estonian` `Finnish` `French` `Galician` `German` `Greek` `Hebrew` `Hindi` `Hungarian` `Icelandic` `Indonesian` `Italian` `Japanese` `Kannada` `Kazakh` `Korean` `Latvian` `Lithuanian` `Macedonian` `Malay` `Marathi` `Maori` `Nepali` `Norwegian` `Persian` `Polish` `Portuguese` `Romanian` `Russian` `Serbian` `Slovak` `Slovenian` `Spanish` `Swahili` `Swedish` `Tagalog` `Tamil` `Thai` `Turkish` `Ukrainian` `Urdu` `Vietnamese` `Welsh`

#### MODEL

The model. [More info](https://platform.openai.com/docs/models#gpt-4o-realtime)
* Default value: `gpt-4o-realtime-preview-2024-12-17`
* Available values: `gpt-4o-realtime-preview` `gpt-4o-realtime-preview-2024-12-17` `gpt-4o-realtime-preview-2024-10-01` `gpt-4o-mini-realtime-preview` `gpt-4o-mini-realtime-preview-2024-12-17`

#### VOICE

The voice the model uses to respond. [More info](https://platform.openai.com/docs/guides/text-to-speech#voice-options)
* Default value: `alloy`
* Available values: `alloy` `ash` `coral` `echo` `fable` `onyx` `nova` `sage` `shimmer`

#### AGENT_URLS

A comma-separated list of WebSocket server URLs for real-time communication with specified agents.
* Default value: `ws://talkops`
