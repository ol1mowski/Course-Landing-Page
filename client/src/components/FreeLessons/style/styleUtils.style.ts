export const getVideoCardGradient = (index: number): string => {
  const gradients = [
    "from-purple-500/90 to-blue-600/90",
    "from-blue-500/90 to-cyan-600/90",
    "from-primary/90 to-indigo-600/90",
    "from-amber-500/90 to-orange-600/90",
    "from-rose-500/90 to-pink-600/90",
    "from-indigo-500/90 to-violet-600/90",
  ];
  return gradients[index % gradients.length];
}; 