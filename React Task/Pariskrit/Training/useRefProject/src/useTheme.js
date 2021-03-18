const useTheme = () => {
  const setTheme = () => {
    const backgroundColor = document.body.style.background;
    document.body.style.background =
      backgroundColor === "black" ? "white" : "black";
    document.body.style.color = backgroundColor === "black" ? "black" : "white";
    document.body.style.transition = "background-color 0.3s ease";
  };

  return [setTheme];
};

export default useTheme;
