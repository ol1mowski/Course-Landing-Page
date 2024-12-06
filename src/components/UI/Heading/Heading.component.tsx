const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl font-bold">
        {children}
    </h2>
  )
}

export default Heading