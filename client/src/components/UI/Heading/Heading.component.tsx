const Heading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <h2 className={`text-4xl font-bold ${className}`}>
        {children}
    </h2>
  )
}

export default Heading