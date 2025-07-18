// Generated model definitions from ruby_llm
// DO NOT EDIT - This file is auto-generated by scripts/update-models.js

// Provider-specific model types
export type AnthropicModels = 'claude-2.0' | 'claude-2.1' | 'claude-3-5-haiku-20241022' | 'claude-3-5-sonnet-20240620' | 'claude-3-5-sonnet-20241022' | 'claude-3-7-sonnet-20250219' | 'claude-3-haiku-20240307' | 'claude-3-opus-20240229' | 'claude-3-sonnet-20240229' | 'claude-opus-4-20250514' | 'claude-sonnet-4-20250514'

export const AnthropicModelData = {
  'claude-2.0': {
    contextWindow: 200000,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-2.1': {
    contextWindow: 200000,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-3-5-haiku-20241022': {
    contextWindow: 200000,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.8,
      outputPerMillion: 4
    }
  },
  'claude-3-5-sonnet-20240620': {
    contextWindow: 200000,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-3-5-sonnet-20241022': {
    contextWindow: 200000,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-3-7-sonnet-20250219': {
    contextWindow: 200000,
    maxOutputTokens: 64000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-3-haiku-20240307': {
    contextWindow: 200000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.25,
      outputPerMillion: 1.25
    }
  },
  'claude-3-opus-20240229': {
    contextWindow: 200000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 75
    }
  },
  'claude-3-sonnet-20240229': {
    contextWindow: 200000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
  'claude-opus-4-20250514': {
    contextWindow: 200000,
    maxOutputTokens: 32000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 75
    }
  },
  'claude-sonnet-4-20250514': {
    contextWindow: 200000,
    maxOutputTokens: 64000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 15
    }
  },
} as const
export type OpenAIModels = 'babbage-002' | 'chatgpt-4o-latest' | 'codex-mini-latest' | 'computer-use-preview' | 'computer-use-preview-2025-03-11' | 'dall-e-2' | 'davinci-002' | 'gpt-3.5-turbo' | 'gpt-3.5-turbo-0125' | 'gpt-3.5-turbo-1106' | 'gpt-3.5-turbo-16k' | 'gpt-3.5-turbo-instruct' | 'gpt-3.5-turbo-instruct-0914' | 'gpt-4' | 'gpt-4-0125-preview' | 'gpt-4-0613' | 'gpt-4-1106-preview' | 'gpt-4-turbo' | 'gpt-4-turbo-2024-04-09' | 'gpt-4-turbo-preview' | 'gpt-4.1' | 'gpt-4.1-2025-04-14' | 'gpt-4.1-mini' | 'gpt-4.1-mini-2025-04-14' | 'gpt-4.1-nano' | 'gpt-4.1-nano-2025-04-14' | 'gpt-4.5-preview' | 'gpt-4.5-preview-2025-02-27' | 'gpt-4o' | 'gpt-4o-2024-05-13' | 'gpt-4o-2024-08-06' | 'gpt-4o-2024-11-20' | 'gpt-4o-audio-preview' | 'gpt-4o-audio-preview-2024-10-01' | 'gpt-4o-audio-preview-2024-12-17' | 'gpt-4o-audio-preview-2025-06-03' | 'gpt-4o-mini' | 'gpt-4o-mini-2024-07-18' | 'gpt-4o-mini-audio-preview' | 'gpt-4o-mini-audio-preview-2024-12-17' | 'gpt-4o-mini-realtime-preview' | 'gpt-4o-mini-realtime-preview-2024-12-17' | 'gpt-4o-mini-search-preview' | 'gpt-4o-mini-search-preview-2025-03-11' | 'gpt-4o-mini-transcribe' | 'gpt-4o-realtime-preview' | 'gpt-4o-realtime-preview-2024-10-01' | 'gpt-4o-realtime-preview-2024-12-17' | 'gpt-4o-realtime-preview-2025-06-03' | 'gpt-4o-search-preview' | 'gpt-4o-search-preview-2025-03-11' | 'gpt-4o-transcribe' | 'o1' | 'o1-2024-12-17' | 'o1-mini' | 'o1-mini-2024-09-12' | 'o1-preview' | 'o1-preview-2024-09-12' | 'o1-pro' | 'o1-pro-2025-03-19' | 'o3' | 'o3-2025-04-16' | 'o3-mini' | 'o3-mini-2025-01-31' | 'o3-pro' | 'o3-pro-2025-06-10' | 'o4-mini' | 'o4-mini-2025-04-16' | 'omni-moderation-2024-09-26' | 'omni-moderation-latest' | 'text-embedding-3-large' | 'text-embedding-3-small' | 'text-embedding-ada-002' | 'text-moderation-latest' | 'tts-1-1106' | 'tts-1-hd-1106'

export const OpenAIModelData = {
  'babbage-002': {
    contextWindow: 0,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.4,
      outputPerMillion: 0.4
    }
  },
  'chatgpt-4o-latest': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 5,
      outputPerMillion: 15
    }
  },
  'codex-mini-latest': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.5,
      outputPerMillion: 6
    }
  },
  'computer-use-preview': {
    contextWindow: 8192,
    maxOutputTokens: 1024,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 12
    }
  },
  'computer-use-preview-2025-03-11': {
    contextWindow: 8192,
    maxOutputTokens: 1024,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 3,
      outputPerMillion: 12
    }
  },
  'dall-e-2': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: null
  },
  'davinci-002': {
    contextWindow: 0,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2,
      outputPerMillion: 2
    }
  },
  'gpt-3.5-turbo': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-3.5-turbo-0125': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-3.5-turbo-1106': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-3.5-turbo-16k': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-3.5-turbo-instruct': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-3.5-turbo-instruct-0914': {
    contextWindow: 16385,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-4': {
    contextWindow: 8192,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 30,
      outputPerMillion: 60
    }
  },
  'gpt-4-0125-preview': {
    contextWindow: 4096,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-4-0613': {
    contextWindow: 8192,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 30,
      outputPerMillion: 60
    }
  },
  'gpt-4-1106-preview': {
    contextWindow: 4096,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 1.5
    }
  },
  'gpt-4-turbo': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 10,
      outputPerMillion: 30
    }
  },
  'gpt-4-turbo-2024-04-09': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 10,
      outputPerMillion: 30
    }
  },
  'gpt-4-turbo-preview': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 10,
      outputPerMillion: 30
    }
  },
  'gpt-4.1': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2,
      outputPerMillion: 8
    }
  },
  'gpt-4.1-2025-04-14': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2,
      outputPerMillion: 8
    }
  },
  'gpt-4.1-mini': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.4,
      outputPerMillion: 1.6
    }
  },
  'gpt-4.1-mini-2025-04-14': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.4,
      outputPerMillion: 1.6
    }
  },
  'gpt-4.1-nano': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gpt-4.1-nano-2025-04-14': {
    contextWindow: 1047576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gpt-4.5-preview': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 10,
      outputPerMillion: 30
    }
  },
  'gpt-4.5-preview-2025-02-27': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 10,
      outputPerMillion: 30
    }
  },
  'gpt-4o': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-2024-05-13': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-2024-08-06': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-2024-11-20': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-audio-preview': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-audio-preview-2024-10-01': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-audio-preview-2024-12-17': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-audio-preview-2025-06-03': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-mini': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-2024-07-18': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-audio-preview': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-audio-preview-2024-12-17': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-realtime-preview': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.6,
      outputPerMillion: 2.4
    }
  },
  'gpt-4o-mini-realtime-preview-2024-12-17': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.6,
      outputPerMillion: 2.4
    }
  },
  'gpt-4o-mini-search-preview': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-search-preview-2025-03-11': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gpt-4o-mini-transcribe': {
    contextWindow: 16000,
    maxOutputTokens: 2000,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 5
    }
  },
  'gpt-4o-realtime-preview': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 5,
      outputPerMillion: 20
    }
  },
  'gpt-4o-realtime-preview-2024-10-01': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 5,
      outputPerMillion: 20
    }
  },
  'gpt-4o-realtime-preview-2024-12-17': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 5,
      outputPerMillion: 20
    }
  },
  'gpt-4o-realtime-preview-2025-06-03': {
    contextWindow: 128000,
    maxOutputTokens: 4096,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 5,
      outputPerMillion: 20
    }
  },
  'gpt-4o-search-preview': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-search-preview-2025-03-11': {
    contextWindow: 128000,
    maxOutputTokens: 16384,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'gpt-4o-transcribe': {
    contextWindow: 16000,
    maxOutputTokens: 2000,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 2.5,
      outputPerMillion: 10
    }
  },
  'o1': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 60
    }
  },
  'o1-2024-12-17': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 60
    }
  },
  'o1-mini': {
    contextWindow: 128000,
    maxOutputTokens: 65536,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'o1-mini-2024-09-12': {
    contextWindow: 128000,
    maxOutputTokens: 65536,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'o1-preview': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 60
    }
  },
  'o1-preview-2024-09-12': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 60
    }
  },
  'o1-pro': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 150,
      outputPerMillion: 600
    }
  },
  'o1-pro-2025-03-19': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 150,
      outputPerMillion: 600
    }
  },
  'o3': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2,
      outputPerMillion: 8
    }
  },
  'o3-2025-04-16': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 2,
      outputPerMillion: 8
    }
  },
  'o3-mini': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'o3-mini-2025-01-31': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'o3-pro': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 20,
      outputPerMillion: 80
    }
  },
  'o3-pro-2025-06-10': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 20,
      outputPerMillion: 80
    }
  },
  'o4-mini': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'o4-mini-2025-04-16': {
    contextWindow: 200000,
    maxOutputTokens: 100000,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.1,
      outputPerMillion: 4.4
    }
  },
  'omni-moderation-2024-09-26': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: true,
    pricing: null
  },
  'omni-moderation-latest': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: true,
    pricing: null
  },
  'text-embedding-3-large': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.13,
      outputPerMillion: 0
    }
  },
  'text-embedding-3-small': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.02,
      outputPerMillion: 0
    }
  },
  'text-embedding-ada-002': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0
    }
  },
  'text-moderation-latest': {
    contextWindow: 0,
    maxOutputTokens: 32768,
    supportsTools: false,
    supportsImageInput: false,
    pricing: null
  },
  'tts-1-1106': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 15,
      outputPerMillion: 15
    }
  },
  'tts-1-hd-1106': {
    contextWindow: 0,
    maxOutputTokens: 0,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 30,
      outputPerMillion: 30
    }
  },
} as const
export type GoogleModels = 'aqa' | 'embedding-gecko-001' | 'gemini-1.0-pro-vision-latest' | 'gemini-1.5-flash' | 'gemini-1.5-flash-001' | 'gemini-1.5-flash-001-tuning' | 'gemini-1.5-flash-002' | 'gemini-1.5-flash-8b' | 'gemini-1.5-flash-8b-001' | 'gemini-1.5-flash-8b-exp-0827' | 'gemini-1.5-flash-8b-exp-0924' | 'gemini-1.5-flash-8b-latest' | 'gemini-1.5-flash-latest' | 'gemini-1.5-pro' | 'gemini-1.5-pro-001' | 'gemini-1.5-pro-002' | 'gemini-1.5-pro-latest' | 'gemini-2.0-flash' | 'gemini-2.0-flash-001' | 'gemini-2.0-flash-exp' | 'gemini-2.0-flash-lite' | 'gemini-2.0-flash-lite-001' | 'gemini-2.0-flash-lite-preview' | 'gemini-2.0-flash-lite-preview-02-05' | 'gemini-2.0-flash-live-001' | 'gemini-2.0-flash-preview-image-generation' | 'gemini-2.0-flash-thinking-exp' | 'gemini-2.0-flash-thinking-exp-01-21' | 'gemini-2.0-flash-thinking-exp-1219' | 'gemini-2.0-pro-exp' | 'gemini-2.0-pro-exp-02-05' | 'gemini-2.5-flash-exp-native-audio-thinking-dialog' | 'gemini-2.5-flash-preview-04-17' | 'gemini-2.5-flash-preview-04-17-thinking' | 'gemini-2.5-flash-preview-05-20' | 'gemini-2.5-flash-preview-native-audio-dialog' | 'gemini-2.5-pro-exp-03-25' | 'gemini-2.5-pro-preview-03-25' | 'gemini-2.5-pro-preview-05-06' | 'gemini-2.5-pro-preview-06-05' | 'gemini-embedding-exp' | 'gemini-exp-1206' | 'gemini-pro-vision' | 'gemma-3-12b-it' | 'gemma-3-1b-it' | 'gemma-3-27b-it' | 'gemma-3-4b-it' | 'gemma-3n-e4b-it' | 'learnlm-2.0-flash-experimental'

export const GoogleModelData = {
  'aqa': {
    contextWindow: 7168,
    maxOutputTokens: 1024,
    supportsTools: false,
    supportsImageInput: false,
    pricing: null
  },
  'embedding-gecko-001': {
    contextWindow: 1024,
    maxOutputTokens: 1,
    supportsTools: false,
    supportsImageInput: false,
    pricing: null
  },
  'gemini-1.0-pro-vision-latest': {
    contextWindow: 12288,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-001': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-001-tuning': {
    contextWindow: 16384,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-002': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-8b': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-8b-001': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-8b-exp-0827': {
    contextWindow: 1000000,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.0375,
      outputPerMillion: 0.15
    }
  },
  'gemini-1.5-flash-8b-exp-0924': {
    contextWindow: 1000000,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.0375,
      outputPerMillion: 0.15
    }
  },
  'gemini-1.5-flash-8b-latest': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-flash-latest': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-1.5-pro': {
    contextWindow: 2097152,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 5
    }
  },
  'gemini-1.5-pro-001': {
    contextWindow: 2097152,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 5
    }
  },
  'gemini-1.5-pro-002': {
    contextWindow: 2097152,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 5
    }
  },
  'gemini-1.5-pro-latest': {
    contextWindow: 2097152,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 5
    }
  },
  'gemini-2.0-flash': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-001': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-exp': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-lite': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-lite-001': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-lite-preview': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.0-flash-lite-preview-02-05': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.0-flash-live-001': {
    contextWindow: 1048576,
    maxOutputTokens: 8192,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-preview-image-generation': {
    contextWindow: 32000,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-thinking-exp': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-thinking-exp-01-21': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-flash-thinking-exp-1219': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.1,
      outputPerMillion: 0.4
    }
  },
  'gemini-2.0-pro-exp': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.0-pro-exp-02-05': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.5-flash-exp-native-audio-thinking-dialog': {
    contextWindow: 128000,
    maxOutputTokens: 8000,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 2
    }
  },
  'gemini-2.5-flash-preview-04-17': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.5-flash-preview-04-17-thinking': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.5-flash-preview-05-20': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.15,
      outputPerMillion: 0.6
    }
  },
  'gemini-2.5-flash-preview-native-audio-dialog': {
    contextWindow: 128000,
    maxOutputTokens: 8000,
    supportsTools: true,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.5,
      outputPerMillion: 2
    }
  },
  'gemini-2.5-pro-exp-03-25': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.12,
      outputPerMillion: 0.5
    }
  },
  'gemini-2.5-pro-preview-03-25': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.5-pro-preview-05-06': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-2.5-pro-preview-06-05': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 1.25,
      outputPerMillion: 10
    }
  },
  'gemini-embedding-exp': {
    contextWindow: 8192,
    maxOutputTokens: 1,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.002,
      outputPerMillion: 0.004
    }
  },
  'gemini-exp-1206': {
    contextWindow: 1048576,
    maxOutputTokens: 65536,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemini-pro-vision': {
    contextWindow: 12288,
    maxOutputTokens: 4096,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemma-3-12b-it': {
    contextWindow: 32768,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemma-3-1b-it': {
    contextWindow: 32768,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemma-3-27b-it': {
    contextWindow: 131072,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemma-3-4b-it': {
    contextWindow: 32768,
    maxOutputTokens: 8192,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'gemma-3n-e4b-it': {
    contextWindow: 8192,
    maxOutputTokens: 2048,
    supportsTools: false,
    supportsImageInput: false,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
  'learnlm-2.0-flash-experimental': {
    contextWindow: 1048576,
    maxOutputTokens: 32768,
    supportsTools: true,
    supportsImageInput: true,
    pricing: {
      inputPerMillion: 0.075,
      outputPerMillion: 0.3
    }
  },
} as const
export type MistralModels = never

export type OllamaModels = string

export type AllModels = AnthropicModels | OpenAIModels | GoogleModels | OllamaModels

export const ModelToProvider = {
  'claude-2.0': 'anthropic',
  'claude-2.1': 'anthropic',
  'claude-3-5-haiku-20241022': 'anthropic',
  'claude-3-5-sonnet-20240620': 'anthropic',
  'claude-3-5-sonnet-20241022': 'anthropic',
  'claude-3-7-sonnet-20250219': 'anthropic',
  'claude-3-haiku-20240307': 'anthropic',
  'claude-3-opus-20240229': 'anthropic',
  'claude-3-sonnet-20240229': 'anthropic',
  'claude-opus-4-20250514': 'anthropic',
  'claude-sonnet-4-20250514': 'anthropic',
  'babbage-002': 'openai',
  'chatgpt-4o-latest': 'openai',
  'codex-mini-latest': 'openai',
  'computer-use-preview': 'openai',
  'computer-use-preview-2025-03-11': 'openai',
  'dall-e-2': 'openai',
  'davinci-002': 'openai',
  'gpt-3.5-turbo': 'openai',
  'gpt-3.5-turbo-0125': 'openai',
  'gpt-3.5-turbo-1106': 'openai',
  'gpt-3.5-turbo-16k': 'openai',
  'gpt-3.5-turbo-instruct': 'openai',
  'gpt-3.5-turbo-instruct-0914': 'openai',
  'gpt-4': 'openai',
  'gpt-4-0125-preview': 'openai',
  'gpt-4-0613': 'openai',
  'gpt-4-1106-preview': 'openai',
  'gpt-4-turbo': 'openai',
  'gpt-4-turbo-2024-04-09': 'openai',
  'gpt-4-turbo-preview': 'openai',
  'gpt-4.1': 'openai',
  'gpt-4.1-2025-04-14': 'openai',
  'gpt-4.1-mini': 'openai',
  'gpt-4.1-mini-2025-04-14': 'openai',
  'gpt-4.1-nano': 'openai',
  'gpt-4.1-nano-2025-04-14': 'openai',
  'gpt-4.5-preview': 'openai',
  'gpt-4.5-preview-2025-02-27': 'openai',
  'gpt-4o': 'openai',
  'gpt-4o-2024-05-13': 'openai',
  'gpt-4o-2024-08-06': 'openai',
  'gpt-4o-2024-11-20': 'openai',
  'gpt-4o-audio-preview': 'openai',
  'gpt-4o-audio-preview-2024-10-01': 'openai',
  'gpt-4o-audio-preview-2024-12-17': 'openai',
  'gpt-4o-audio-preview-2025-06-03': 'openai',
  'gpt-4o-mini': 'openai',
  'gpt-4o-mini-2024-07-18': 'openai',
  'gpt-4o-mini-audio-preview': 'openai',
  'gpt-4o-mini-audio-preview-2024-12-17': 'openai',
  'gpt-4o-mini-realtime-preview': 'openai',
  'gpt-4o-mini-realtime-preview-2024-12-17': 'openai',
  'gpt-4o-mini-search-preview': 'openai',
  'gpt-4o-mini-search-preview-2025-03-11': 'openai',
  'gpt-4o-mini-transcribe': 'openai',
  'gpt-4o-realtime-preview': 'openai',
  'gpt-4o-realtime-preview-2024-10-01': 'openai',
  'gpt-4o-realtime-preview-2024-12-17': 'openai',
  'gpt-4o-realtime-preview-2025-06-03': 'openai',
  'gpt-4o-search-preview': 'openai',
  'gpt-4o-search-preview-2025-03-11': 'openai',
  'gpt-4o-transcribe': 'openai',
  'o1': 'openai',
  'o1-2024-12-17': 'openai',
  'o1-mini': 'openai',
  'o1-mini-2024-09-12': 'openai',
  'o1-preview': 'openai',
  'o1-preview-2024-09-12': 'openai',
  'o1-pro': 'openai',
  'o1-pro-2025-03-19': 'openai',
  'o3': 'openai',
  'o3-2025-04-16': 'openai',
  'o3-mini': 'openai',
  'o3-mini-2025-01-31': 'openai',
  'o3-pro': 'openai',
  'o3-pro-2025-06-10': 'openai',
  'o4-mini': 'openai',
  'o4-mini-2025-04-16': 'openai',
  'omni-moderation-2024-09-26': 'openai',
  'omni-moderation-latest': 'openai',
  'text-embedding-3-large': 'openai',
  'text-embedding-3-small': 'openai',
  'text-embedding-ada-002': 'openai',
  'text-moderation-latest': 'openai',
  'tts-1-1106': 'openai',
  'tts-1-hd-1106': 'openai',
  'aqa': 'google',
  'embedding-gecko-001': 'google',
  'gemini-1.0-pro-vision-latest': 'google',
  'gemini-1.5-flash': 'google',
  'gemini-1.5-flash-001': 'google',
  'gemini-1.5-flash-001-tuning': 'google',
  'gemini-1.5-flash-002': 'google',
  'gemini-1.5-flash-8b': 'google',
  'gemini-1.5-flash-8b-001': 'google',
  'gemini-1.5-flash-8b-exp-0827': 'google',
  'gemini-1.5-flash-8b-exp-0924': 'google',
  'gemini-1.5-flash-8b-latest': 'google',
  'gemini-1.5-flash-latest': 'google',
  'gemini-1.5-pro': 'google',
  'gemini-1.5-pro-001': 'google',
  'gemini-1.5-pro-002': 'google',
  'gemini-1.5-pro-latest': 'google',
  'gemini-2.0-flash': 'google',
  'gemini-2.0-flash-001': 'google',
  'gemini-2.0-flash-exp': 'google',
  'gemini-2.0-flash-lite': 'google',
  'gemini-2.0-flash-lite-001': 'google',
  'gemini-2.0-flash-lite-preview': 'google',
  'gemini-2.0-flash-lite-preview-02-05': 'google',
  'gemini-2.0-flash-live-001': 'google',
  'gemini-2.0-flash-preview-image-generation': 'google',
  'gemini-2.0-flash-thinking-exp': 'google',
  'gemini-2.0-flash-thinking-exp-01-21': 'google',
  'gemini-2.0-flash-thinking-exp-1219': 'google',
  'gemini-2.0-pro-exp': 'google',
  'gemini-2.0-pro-exp-02-05': 'google',
  'gemini-2.5-flash-exp-native-audio-thinking-dialog': 'google',
  'gemini-2.5-flash-preview-04-17': 'google',
  'gemini-2.5-flash-preview-04-17-thinking': 'google',
  'gemini-2.5-flash-preview-05-20': 'google',
  'gemini-2.5-flash-preview-native-audio-dialog': 'google',
  'gemini-2.5-pro-exp-03-25': 'google',
  'gemini-2.5-pro-preview-03-25': 'google',
  'gemini-2.5-pro-preview-05-06': 'google',
  'gemini-2.5-pro-preview-06-05': 'google',
  'gemini-embedding-exp': 'google',
  'gemini-exp-1206': 'google',
  'gemini-pro-vision': 'google',
  'gemma-3-12b-it': 'google',
  'gemma-3-1b-it': 'google',
  'gemma-3-27b-it': 'google',
  'gemma-3-4b-it': 'google',
  'gemma-3n-e4b-it': 'google',
  'learnlm-2.0-flash-experimental': 'google',
} as const