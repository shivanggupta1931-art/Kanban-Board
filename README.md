# 📋 Kanban Board

> **A clean, interactive Kanban board for organizing tasks, tracking progress, and managing workflow efficiently.**

A lightweight **Kanban Board application built with vanilla HTML, CSS, and JavaScript**.

The project provides an intuitive drag-and-drop workflow where tasks can move between **To Do**, **In Progress**, and **Done** while automatically tracking task statistics and completion progress.

---

## 🚀 Live Demo

🔗 **[Open Kanban Board](https://shivanggupta1931-art.github.io/Kanban-Board/)**

🔗 **[View Source Code](https://github.com/shivanggupta1931-art/Kanban-Board)**

---

## ✨ Features

### 📝 Task Management

Create tasks with:

* Task title
* Task description
* Priority level
* Automatic placement in the **To Do** column

Tasks can also be deleted whenever they are no longer needed.

### 🖱️ Drag & Drop

Move tasks seamlessly between:

```text
To Do  →  In Progress  →  Done
```

The board automatically updates task counts and analytics whenever a task changes columns.

### 🎯 Task Priorities

Each task can have one of three priority levels:

| Priority  | Meaning         |
| --------- | --------------- |
| 🟢 Low    | Lower urgency   |
| 🟡 Medium | Normal priority |
| 🔴 High   | High urgency    |

Priority is visually displayed on every task card.

### 📊 Progress Analytics

The board provides real-time statistics including:

* Total Tasks
* Completed Tasks
* Tasks In Progress
* Pending Tasks
* Completion Rate

The completion rate is automatically calculated based on the number of tasks in the **Done** column.

### 💾 Persistent Data

Tasks are stored using the browser's **Local Storage**.

This means your tasks remain available even after refreshing or reopening the page.

```text
Task Created
     ↓
Task Updated
     ↓
localStorage
     ↓
Browser Storage
     ↓
Data Restored on Reload
```

### 🌙 Dark / ☀️ Light Theme

Switch between dark and light themes using the theme toggle.

The selected theme is also saved in `localStorage`, allowing the application to remember your preference.

### 📱 Responsive Interface

The layout is designed to adapt to different screen sizes while maintaining a clean task-management experience.

---

## 🧠 How It Works

Kanban Board uses a simple client-side architecture.

```text
              ┌──────────────┐
              │  User Input  │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │  Add Task   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │    To Do     │
              └──────┬───────┘
                     │
                Drag & Drop
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
   ┌──────────────┐      ┌──────────────┐
   │ In Progress  │ ───► │     Done     │
   └──────────────┘      └──────┬───────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │ Progress Stats  │
                       └─────────────────┘
```

Every time a task is created, deleted, or moved, the application recalculates the board statistics and saves the current task state.

---

## 🛠️ Tech Stack

| Technology               | Purpose                          |
| ------------------------ | -------------------------------- |
| **HTML5**                | Application structure            |
| **CSS3**                 | Styling, layout & themes         |
| **JavaScript**           | Application logic & interactions |
| **LocalStorage API**     | Persistent task storage          |
| **HTML Drag & Drop API** | Task movement between columns    |

### No Frameworks

This project intentionally uses **vanilla JavaScript** without React, Vue, or other frontend frameworks.

The goal was to understand the fundamentals of:

* DOM manipulation
* Event handling
* Drag & Drop APIs
* Local Storage
* Dynamic UI updates
* State management
* Responsive CSS

---

## 📂 Project Structure

```text
Kanban-Board/
│
├── index.html      # Main application structure
├── style.css       # Styling, themes & responsive layout
├── script.js       # Application logic
└── README.md       # Project documentation
```

---

## 🔄 Task Lifecycle

A task follows a simple workflow:

```text
                    CREATE
                       │
                       ▼
                  ┌─────────┐
                  │  TO DO  │
                  └────┬────┘
                       │
                  Drag & Drop
                       │
                       ▼
              ┌────────────────┐
              │  IN PROGRESS   │
              └───────┬────────┘
                      │
                 Drag & Drop
                      │
                      ▼
                 ┌─────────┐
                 │  DONE   │
                 └─────────┘
                      │
                      ▼
                COMPLETION %
```

---

## 📊 Analytics Logic

The completion rate is calculated using:

```text
Completed Tasks
──────────────── × 100
   Total Tasks
```

For example:

```text
Total Tasks:       10
Completed:          6
In Progress:        2
Pending:            2

Completion Rate:   60%
```

The analytics update automatically whenever the board state changes.

---

## 💾 Data Persistence

The application maintains task state using the browser's Local Storage.

A simplified representation of the stored data looks like:

```javascript
{
    "todo": [
        {
            "title": "Build portfolio",
            "desc": "Create portfolio website",
            "priority": "high"
        }
    ],

    "progress": [],

    "done": []
}
```

When the application loads, saved tasks are retrieved and reconstructed on the board.

---

## 🎨 UI Design

The interface follows a minimal productivity-focused design.

### Dark Mode

The default interface uses a dark theme with:

* High contrast text
* Dark task cards
* Minimal navigation
* Clear priority indicators
* Simple task columns

### Light Mode

The light theme switches the application's CSS variables to a brighter interface while preserving the same layout and functionality.

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shivanggupta1931-art/Kanban-Board.git
```

### 2. Enter the project

```bash
cd Kanban-Board
```

### 3. Open the application

You can simply open:

```text
index.html
```

in your browser.

Or run a local development server:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🧪 What I Learned

Building this project helped strengthen my understanding of frontend fundamentals and JavaScript application logic.

### JavaScript

* DOM manipulation
* Event listeners
* Dynamic element creation
* State management
* Array manipulation
* Local Storage
* Conditional rendering
* Drag & Drop events

### CSS

* CSS variables
* Flexbox
* Responsive layouts
* Theme switching
* Transitions
* Modal interfaces
* Component-like styling

### Browser APIs

* `localStorage`
* HTML Drag & Drop API
* DOM APIs

---

## 🗺️ Future Improvements

Potential improvements for future versions include:

* [ ] Edit existing tasks
* [ ] Task due dates
* [ ] Search and filtering
* [ ] Sort by priority
* [ ] Task timestamps
* [ ] Multiple boards
* [ ] Task labels/tags
* [ ] Better mobile drag & drop
* [ ] Backend database
* [ ] User authentication
* [ ] Cloud synchronization
* [ ] Collaborative boards
* [ ] Keyboard shortcuts

---

## 🎯 Project Goal

The goal of this project was to build a practical productivity application while strengthening core frontend development concepts.

Rather than relying on a framework, the project focuses on understanding **how the underlying browser APIs and JavaScript logic actually work**.

---

## 👨‍💻 Developer

### Shivang Gupta

**B.Tech CSE Student | Developer | Problem Solver**

Interested in:

* Data Structures & Algorithms
* Machine Learning
* Quantitative Finance
* Software Development
* Building practical projects

---

## ⭐ Support

If you found this project useful or interesting:

⭐ **Star the repository**

🍴 **Fork the project**

🐛 **Report bugs**

💡 **Suggest improvements**

---

## 📄 License

This project is open for educational and personal use.

---

<p align="center">

### 📋 Kanban Board

**Plan → Organize → Execute → Complete**

Built with ❤️ using HTML, CSS & JavaScript.

</p>
