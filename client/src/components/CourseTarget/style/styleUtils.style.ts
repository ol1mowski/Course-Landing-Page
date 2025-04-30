export const getGradientByIndex = (index: number): string => {
  const gradients = [
    "from-primary to-indigo-600",
    "from-blue-500 to-blue-700",
    "from-indigo-500 to-indigo-700",
    "from-violet-500 to-violet-700",
    "from-purple-500 to-purple-700",
    "from-sky-500 to-sky-700",
  ];
  return gradients[index % gradients.length];
}; 