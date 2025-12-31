# SNEAKER_PRO | Control Site (Inaccessible)

## 📌 Project Overview
This repository serves as a baseline to demonstrate common e-commerce design patterns that inadvertently exclude users. While it looks modern and functional to a standard user, it contains several "Critical Blockers" for those relying on assistive technology or keyboard navigation.

## 🚫 Identified Accessibility Failures

### 1. Non-Semantic Interactions
Uses `div` and `span` tags for buttons. These are invisible to the keyboard tab order and screen readers. Because they lack a `role="button"` or a `<button>` tag, they cannot be triggered via the "Enter" or "Space" keys.

### 2. Unstoppable Motion (WCAG 2.2.2)
The promotional banner auto-rotates every 3 seconds with no pause mechanism. This violates WCAG guidelines and causes significant distress or distraction for users with ADHD, autism, or vestibular disorders.

### 3. Visual-Only Feedback
Error handling in the checkout relies solely on red borders. Users with colorblindness cannot identify which fields failed validation. Furthermore, a generic `alert()` is used, which does not programmatically link the error to the specific input field.

### 4. Focus Fragmentation
When the cart sidebar is dismissed by clicking the background, the user's focus is lost. It typically resets to the top of the Document Object Model (DOM), forcing keyboard users to re-tab through the entire navigation to return to the products.

### 5. Ambiguous Delete Context
The delete button in the cart is labeled only as "X." To a screen reader, this is announced simply as "X, clickable," providing no information on which specific shoe is being removed from the order.

## 🛠 Tech Stack
* **HTML5:** Non-semantic structure.
* **CSS3:** Low-contrast focus states and gray-on-gray inputs.
* **Vanilla JavaScript:** Standard event handling without ARIA state management.