
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

_Coming Soon_ (You can add screenshots or a demo video later)

---

## 🔧 Tech Stack

- **React Native (Expo)**
- **Firebase Realtime Database** – Drug data storage
- **Supabase Auth** – User authentication
- **React Navigation** – App navigation
- **Context API** – Global state management
- **StyleSheet API** – App styling

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

## 🔐 Admin Feature (Coming Soon)

Currently, the ability to add new drugs is available for all users, but future updates will include **role-based access** to restrict this to admins only.

---

## 📦 Future Improvements

- [ ] Role-based authorization for admin-only features
- [ ] Image storage via Firebase or Supabase
- [ ] Pharmacy availability integration
- [ ] In-app notifications for drug updates
- [ ] Dark mode

---

## 🛠️ Known Issues

- No current enforcement of admin-only features
- No backend validation on image upload (yet)

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📬 Contact

Built by [Saleh Ahmed](mailto:your-email@example.com)

---
