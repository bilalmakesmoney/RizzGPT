const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center w-screen min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
