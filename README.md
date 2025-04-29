# Pingua CMS

The **Pingua CMS** is an internal tool used by administrators to manage the content and structure of the Pingua language learning application. It supports multilingual content management, AI-assisted translation and TTS generation, and structured educational unit design.

Check out the [mobile app](https://github.com/damix00/pingua-expo-app) for more information about the project.

---

## Tech Stack

- **Frontend/Backend Framework**: Next.js  
- **CMS Library**: PayloadCMS (headless CMS with built-in admin panel)  
- **Database**: MongoDB  
- **AI Services**:  
  - **OpenAI** for automatic translations  
  - **ElevenLabs** for realistic text-to-speech generation  
- **Media Hosting**: Cloudinary (image CDN)  
- **Containerization**: Docker  
- **Authentication**: Built-in via Payload with role-based access

---

## Key Features

- Admins can manage:
  - Sections (levels)
  - Units (quizzes or stories)
  - Dialogue scenarios
  - Questions and interactive content types
- Automatic TTS generation for stories using ElevenLabs
- Dialogues and scenario previews with AI voices
- Secure role-based access and login management

---

## Project Structure

### Sections

- Require XP to unlock (e.g. 10 XP per unit level)
- Each section contains multiple **Units**

### Units

- Two types: **Story** or **Quiz**
- Each unit has:
  - Title (EN/HR)
  - Max XP required for completion
  - Linked content (questions or dialogues)

### Stories

- Structured as dialogues between AI characters or narrator
- TTS is generated per line using ElevenLabs
- Some lines may contain questions to reinforce comprehension

### Questions

- Assigned to units
- Types supported:
  - Flashcard
  - Multiple Choice
  - Listen and Write
  - Listen and Choose
  - Record Voice
  - Translate
- Each question can have multiple randomized variations

### Dialogue Themes (Scenarios)

- Include: Title, Image URL, Description, AI Role, AI Voice, Difficulty
- Used in the app’s conversational practice
- Auto-translated and voice-generated

---

## Getting Started

### Prerequisites

- **Docker**
- **Windows users**: WSL (Windows Subsystem for Linux)

### Installation & Startup

Run the following commands:

```bash
docker compose build --no-cache
docker compose up
```

This will start the entire CMS (Next.js + PayloadCMS) environment.

---

## Authentication & Access

- New users must be created by an existing admin under the **Users** collection
- Users can reset their passwords after login
- Accounts are auto-locked after multiple failed login attempts; another admin must unlock them

---

## Collections Overview

| Collection        | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Users**          | Admin users with role-based access                                         |
| **Media**          | Default Payload media library (optional, Cloudinary is used for images)    |
| **Sections**       | Represents levels; contains Units                                          |
| **Units**          | Subsections of Sections; can be Quizzes or Stories                         |
| **Questions**      | Educational exercises linked to Units                                      |
| **Stories**        | Dialogues with narration and comprehension checks                          |
| **Dialogue Themes**| Roleplay scenarios with AI configuration                                   |

---

## Image Hosting

- All images are hosted via **Cloudinary CDN**

---

## Developer Notes

- Collections are defined in `src/payload-types.ts`
- Easily extendable via Payload's modular schema system
- Translations and TTS are triggered automatically when content is created or edited
