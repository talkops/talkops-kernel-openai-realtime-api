import { Kernel, Service, Readme } from "talkops";
import axios from "axios";

import languages from "./parameters/languages.json" with { type: "json" };
import models from "./parameters/models.json" with { type: "json" };
import voices from "./parameters/voices.json" with { type: "json" };

const kernel = new Kernel("OpenAI Realtime API");

kernel.setDockerRepository("talkops/talkops-kernel-openai-realtime-api");

kernel.setDescription(
  "This Kernel based on [OpenAI Realtime API](https://openai.com/index/introducing-the-realtime-api/) defines and configures the Agent's artificial intelligence. It acts as the processing engine for real-time interactions, ensuring the analysis and understanding of user requests in real-time."
);

kernel.setEnvironmentVariables({
  API_KEY: {
    description:
      "The API key. Sign up at [OpenAI Platform](https://platform.openai.com/signup) to obtain your [api key](https://platform.openai.com/api-keys).",
  },
  DEFAULT_LANGUAGE: {
    defaultValue: "English",
    description:
      "The default language. [More info](https://platform.openai.com/docs/guides/text-to-speech#supported-languages)",
    availableValues: languages,
  },
  MODEL: {
    defaultValue: "gpt-4o-realtime-preview-2024-12-17",
    description:
      "The model. [More info](https://platform.openai.com/docs/models#gpt-4o-realtime)",
    availableValues: models,
  },
  VOICE: {
    defaultValue: "alloy",
    description:
      "The voice the model uses to respond. [More info](https://platform.openai.com/docs/guides/text-to-speech#voice-options)",
    availableValues: voices,
  },
});

if (kernel.errors.length === 0) {
  async function updateToken() {
    kernel.errors = [];
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/realtime/sessions",
        {
          model: process.env.MODEL,
          voice: process.env.VOICE,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      kernel.setParameters({
        defaultLanguage: process.env.DEFAULT_LANGUAGE,
        token: response.data.client_secret.value,
      });
    } catch (error) {
      kernel.errors.push(error.message);
    }
    setTimeout(updateToken, 59000);
  }
  await updateToken();
}

new Readme(process.env.README_TEMPLATE_URL, "/app/README.md", kernel);
new Service(process.env.AGENT_URLS.split(","), kernel);
