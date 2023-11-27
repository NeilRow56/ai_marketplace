const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen min-h-fit items-center justify-center ">
      <div className="flex w-full max-w-[650px] flex-col items-center gap-4 rounded-md p-4  md:p-8 ">
        {children}
      </div>
    </div>
  )
}

export default FormWrap
