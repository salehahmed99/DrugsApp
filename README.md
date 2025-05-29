
# MediFind (Working Title)

MediFind is a cross-platform React Native application (Android & iOS) that allows users to search for any drug (medicine) and view detailed information including its price, active substances, indications, precautions, and available alternatives. The app also supports authentication via Supabase and stores its drug data in Firebase Realtime Database.

---

## ✨ Features

- 🔍 **Drug Search**: Search any medication by name.
- 📋 **Drug Details**: View drug name, price, active ingredients, usage indications, and precautions.
- 🔁 **Alternatives**: Get alternative drugs if a medicine is unavailable in pharmacies.
- 🔐 **Authentication**: Sign up or log in with Supabase authentication.
- 🖼️ **Admin Drug Upload**: (In progress) Add a new drug including its details and an image captured from within the app (admin-only feature).
- ⚡ **Cross-platform**: Built with Expo — works seamlessly on both Android & iOS.

---

## 📸 Screenshots
**Login & Signup:**

<img src="https://github.com/salehahmed99/pharma-search/blob/main/readme-assets/welcomee.png"  alt="welcome" />
<img src="https://github.com/salehahmed99/pharma-search/blob/main/readme-assets/login.png"  alt="welcome" />
<img src="https://github.com/salehahmed99/pharma-search/blob/main/readme-assets/signup.png"  alt="welcome" />

**Search Results Page:**

<img src="https://github.com/shady-2004/Seekr/blob/main/readme-assets/results.png" alt="results-page" />

---

## 🔧 Tech Stack

MediFind is built using a modern and lightweight technology stack:

| 🔧 Layer       | 🛠️ Technology        | 📋 Description                                                  |
|----------------|----------------------|------------------------------------------------------------------|
| Framework      | **React Native (Expo)** | Core cross-platform framework for mobile app development        |
| Backend (DB)   | **Firebase Realtime DB** | Real-time drug data storage and syncing                        |
| Auth Service   | **Supabase Auth**     | Secure user authentication system                               |
| Navigation     | **React Navigation**  | Handles routing and screen transitions                          |
| State Mgmt     | **Context API**       | Lightweight global state management                             |
| Styling        | **StyleSheet API**    | Built-in styling for React Native components                    |


---

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Expo CLI:  
  ```bash
  npm install -g expo-cli
  ```

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/medifind.git
   cd medifind
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo dev server:
   ```bash
   expo start
   ```

4. Use the Expo Go app (iOS/Android) to scan the QR code and run the app on your device.

---