import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

// Define all the model identifiers
export enum OpenAIModelID {
  GPT_4 = 'gpt-4',
  GPT_4_0314 = 'gpt-4-0314',
  GPT_4_32K = 'gpt-4-32k',
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0301 = 'gpt-3.5-turbo-0301',
  GPT_3_5_16K = 'gpt-3.5-turbo-16k',
  LLAMA_2_70B_CHAT = 'llama-2-70b-chat',
  OASST_SFT_6_LLAMA_30B = 'oasst-sft-6-llama-30b',
  CLAUDE_2 = 'claude-2',
  CLAUDE_INSTANT = 'claude-instant',
  CLAUDE_2_100K = 'claude-2-100k',
}

export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_0314]: {
    id: OpenAIModelID.GPT_4_0314,
    name: 'GPT-4-0314',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4097,
  },
  [OpenAIModelID.GPT_3_5_0301]: {
    id: OpenAIModelID.GPT_3_5_0301,
    name: 'GPT-3.5-0301',
    maxLength: 12000,
    tokenLimit: 4097,
  },
  [OpenAIModelID.GPT_3_5_16K]: {
    id: OpenAIModelID.GPT_3_5_16K,
    name: 'GPT-3.5-16K',
    maxLength: 48000,
    tokenLimit: 16384,
  },
  [OpenAIModelID.LLAMA_2_70B_CHAT]: {
    id: OpenAIModelID.LLAMA_2_70B_CHAT,
    name: 'Llama-2-70B-Chat',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.OASST_SFT_6_LLAMA_30B]: {
    id: OpenAIModelID.OASST_SFT_6_LLAMA_30B,
    name: 'OASST-SFT-6-Llama-30B',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.CLAUDE_2]: {
    id: OpenAIModelID.CLAUDE_2,
    name: 'Claude-2',
    maxLength: 24000,
    tokenLimit: 10000,
  },
  [OpenAIModelID.CLAUDE_INSTANT]: {
    id: OpenAIModelID.CLAUDE_INSTANT,
    name: 'Claude-Instant',
    maxLength: 24000,
    tokenLimit: 10000,
  },
  [OpenAIModelID.CLAUDE_2_100K]: {
    id: OpenAIModelID.CLAUDE_2_100K,
    name: 'Claude-2-100K',
    maxLength: 240000,
    tokenLimit: 100000,
  },
};
