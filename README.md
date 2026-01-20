# Task Manager - React Todo App

A responsive and modern **Todo App** built with **React**, featuring task management, filtering, and persistent storage. The app is fully responsive for mobile, tablet, and desktop screens with a clean UI design.

---

## 🌟 Features

- **Add, Edit, Delete Tasks:** Easily manage your tasks.
- **Mark Tasks as Completed:** Toggle task status between completed and pending.
- **Filter Tasks:** View all, completed, or pending tasks.
- **Persistent Storage:** Tasks are saved in `localStorage` so they persist across page reloads.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Modern UI:** Gradient header, cards, and buttons for an appealing look.
- **Dynamic Empty State Messages:** Shows custom messages based on the filter selected.

---

## 🧩 Tech Stack

- **Frontend:** React.js (Functional Components & Hooks)
- **Styling:** CSS (Responsive, Flexbox/Grid)
- **Icons:** Lucide React (optional, if used)
- **Browser Storage:** `localStorage` for persisting tasks

---

## 📂 Project Structure

todo-app/
├── public/
├── src/
│ ├── components/
│ │ ├── Header/
│ │ │ ├── Header.jsx
│ │ │ └── Header.css
│ │ ├── Stats/
│ │ │ └── Stats.jsx
│ │ ├── TaskInput/
│ │ │ ├── TaskInput.jsx
│ │ │ └── TaskInput.css
│ │ ├── FilterTabs/
│ │ │ ├── FilterTabs.jsx
│ │ │ └── FilterTabs.css
│ │ ├── TaskList/
│ │ │ ├── TaskList.jsx
│ │ │ └── TaskList.css
│ │ └── TaskItem/
│ │ ├── TaskItem.jsx
│ │ └── TaskItem.css
│ ├── App.js / TodoApp.jsx
│ └── index.js
├── package.json
└── README.md

```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/palak2022/todo-react-app.git
cd todo-react-app

### 2. Install Dependencies
npm install

### 3. Start the development server
npm start

Open http://localhost:3000
 to view the app in the browser.

```
### Usages

1. Add a Task: Type in the input field and click the Add button.
2. Edit a Task: Click the Edit icon next to a task.
3. Delete a Task: Click the Trash icon next to a task.
4. Toggle Completion: Click the Check icon to mark as completed.
5. Filter Tasks: Click All, Completed, or Pending tabs to view tasks accordingly.

```
### 📌 Customization

.Update colors in CSS to match your branding.
.Change fonts by editing TodoApp.css or component CSS files.
.Add icons or animations using libraries like Framer Motion.

```
🛠 Future Improvements

.Add due dates and reminders.
.Implement drag-and-drop task ordering.
.Integrate user authentication and save tasks to backend.
.Add dark mode toggle.

```
---

## 👤 Author

**Palak Thakur**  
GitHub: [https://github.com/your-upalakk2022](https://github.com/your-palak2022)
