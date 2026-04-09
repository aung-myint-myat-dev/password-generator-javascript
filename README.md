# 🔐 Random Number & Password Generator

A sleek, lightweight, and functional web-based generator built with HTML, CSS, and Vanilla JavaScript. This tool allows users to generate secure random strings or numbers with customizable options like uppercase letters, numbers, and special characters.

# ✨ Features

* Customizable Complexity: Choose between Numbers, Uppercase letters, Lowercase letters, and Special characters.

* Visual Feedback: 8-digit individual display slots for a unique look.

* One-Click Copy: Easily copy the generated result to your clipboard with a status notification.

* Active States: Interactive buttons with tactile feedback animations.

# 🚀 Technologies Used

* HTML5: Semantic structure.

* CSS3: Flexbox/Grid layout, custom animations, and Google Fonts (Iosevka Charon).

* JavaScript (ES6): Dynamic logic for random generation and Clipboard API integration.

# 🌐 [Wanna test it self?](https://javascript-random-password-generate.netlify.app/)

# 📂 Project Structure

```
Plaintext
├── assets/
│   └── clickboard.svg    # Clipboard icon
├── app.css               # Main styling
├── script.js             # Generator logic
└── index.html            # Markup
```

# 📸 Screenshots

<table width="100%">
  <tbody>
    <tr>
      <td><img src="./assets/Screenshot (59).png" alt="Main UI" width="100%"></td>
      <td><img src="./assets/Screenshot (60).png" alt="Main UI" width="100%"></td>
    </tr>
    <tr>
      <td><img src="./assets/Screenshot (61).png" alt="Main UI" width="100%"></td>
      <td><img src="./assets/Screenshot (62).png" alt="Main UI" width="100%"></td>
    </tr>
    <tr>
      <td><img src="./assets/Screenshot (63).png" alt="Main UI" width="100%"></td>
      <td><img src="./assets/Screenshot (64).png" alt="Main UI" width="100%"></td>
    </tr>
     <tr>
      <td><img src="./assets/Screenshot (65).png" alt="Main UI" width="100%"></td>
      <td></td>
    </tr>
  </tbody>
</table>

# 🛠️ How to Use

* Select Options: Check the boxes for the types of characters you want to include (e.g., 0~9, A~Z).

* Generate: Click the "Generate" button to create a new random sequence.

* Copy: Click the clipboard icon at the top-right of the digit container to copy the result. A "Copied!" message will appear briefly.

# 💡 Key Code Highlights

## The Random Logic

The generator uses an optimized pool-based approach to ensure that only selected character types are used:

```javaScript
if(isNumber) chars = [...chars, ...numbers];
if(isUppercase) chars = [...chars, ...uppercase];
// ... and so on
```

## Clipboard Integration

Uses the modern navigator.clipboard API for a seamless user experience.

# 👨‍💻 Author
Aung Myint Myat
Full-stack Developer
