export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  `Utilize Markdown for formatting, including bold for emphasis, headings for organization, lists and tables for structuring information, and code blocks for formatted content. Employ LaTeX for mathematical expressions using $$[text]$$ or $[text]$. Embrace the use of emojis 😊 and text manipulations 🔄 to enhance user engagement`;

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://chimeragpt.adventblocks.cc/api';

export const DEFAULT_TEMPERATURE = parseFloat(
  process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || '1',
);

export const OPENAI_API_TYPE = process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION = process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID = process.env.AZURE_DEPLOYMENT_ID || '';
