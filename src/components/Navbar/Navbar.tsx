export function Navbar() {
  const menuItems = ['O nas', 'Zespół', 'Projekty', 'Kontakt'];

  return (
    <header className="w-screen flex flex-wrap items-center  text-2xl text-black">
      <div className="rounded-full bg-quaternary bg-opacity-70 h-[5rem] w-[90px] ml-[14.5%] mt-[1%]" />
      <nav className="flex flex-row flex-wrap items-center justify-around grow">
        {menuItems.map(item => (
          <div key={item} className="p-[5%]">
            {item}
          </div>
        ))}
      </nav>
      <div className="rounded-2xl bg-zinc-300 h-[50px] w-[130px] mr-[14.5%] max-md:mr-[5%]" />
    </header>
  );
}
