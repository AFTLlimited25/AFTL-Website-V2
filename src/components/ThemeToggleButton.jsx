"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-base-secondary"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggleButton;
