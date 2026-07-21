import { useState } from "react";

import { applyTheme, getTheme, type Theme } from "../../utils/theme";

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getTheme());

  function handleToggle() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      onClick={handleToggle}
      title="Toggle dark mode"
      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center text-lg"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
