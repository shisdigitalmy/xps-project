# Design: generate-image Skill

## Overview
The `generate-image` skill enables the agent to fulfill user requests for image generation by leveraging the Pollinations.ai API via Markdown rendering. This allows for instant visual feedback within the chat interface without requiring complex backend integration or local asset management.

## Purpose
To provide a seamless, text-to-image experience for the user during the conversation.

## Architecture
- **Mechanism**: URL-based image generation.
- **Provider**: [Pollinations.ai](https://pollinations.ai/)
- **Format**: Markdown image syntax `![image](URL)`.
- **Prompting Strategy**: The agent will take the user's prompt, clean it, and append descriptive keywords (e.g., "high resolution", "cinematic lighting") to improve output quality.

## Workflow
1. **Trigger**: The user provides a prompt for an image (e.g., "jana imej: [prompt]" or "lukis [prompt]").
2. **Processing**: 
   - Extract the core subject from the prompt.
   - URL-encode the prompt string.
   - Append quality enhancers.
3. **Execution**: Construct the URL: `https://image.pollinations.ai/prompt/{encoded_prompt}`.
4. **Output**: Render the image using `![image](URL)`.

## Success Criteria
- Images are rendered correctly in the chat.
- Prompts are translated/enhanced effectively.
- The process is fast and lightweight.

## Implementation Plan (Next Steps)
- Create `SKILL.md` in `.agents/skills/generate-image`.
- Implement the logic within the agent's response loop.
