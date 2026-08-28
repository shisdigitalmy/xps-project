# Design: Hugging Face Image Generation CLI (`hf_image_gen`)

## Overview
A lightweight Python-based Command Line Interface (CLI) tool to generate human-centric images using the Hugging Face Inference API.

## Purpose
To allow the agent (and user) to generate high-quality images based on text prompts directly from the terminal, specifically optimized for human subjects.

## Architecture

### Components
1. **CLI Interface (`generate_human.py`)**: The entry point for users.
2. **API Client**: A module within the script that handles HTTP requests to Hugging Face.
3. **Image Manager**: Handles directory creation and file naming.

### Data Flow
1. User input (prompt string) $\rightarrow$ `generate_human.py`.
2. `generate_human.py` $\rightarrow$ Hugging Face Inference API (via `requests`).
3. API $\rightarrow$ Binary Image Data $\rightarrow$ `generate_human.py`.
4. `generate_human.py` $\rightarrow$ Save to `generated_images/<filename>.png`.

## Technical Specifications

### Requirements
- Python 3.x
- `requests` library

### Environment Variables
- `HF_TOKEN`: The Hugging Face User Access Token.

### Model Selection
- Primary: `stabilityai/stable-diffusion-xl-base-1.0` (Excellent for detailed human subjects).

### File Naming Convention
- `human_YYYYMMDD_HHMMSS.png`

## Implementation Plan (High Level)
- Create `generate_human.py`.
- Implement error handling for API errors (401 Unauthorized, 429 Too Many Requests, etc.).
- Implement directory management for `generated_images/`.

## Testing Strategy
- Test with a simple prompt.
- Test with an invalid token.
- Test with a very long/complex prompt.

## Security & Safety
- No hardcoded API tokens.
- Use `.env` or environment variables.
