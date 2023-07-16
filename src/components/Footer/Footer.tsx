const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1b1e29] p-5">
      <div className="container">
        <div className="flex items-center justify-center sm:justify-between">
          <div className="hidden sm:block">
            <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                M
              </span>
              <div className="leading-[20px]">
                <h2 className="text-gray-200 font-[500] text-[18px]">
                  Mariano
                </h2>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-400 text-[15px]">
              Copyright {year} developed by Mariano Alvarez - all right
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
