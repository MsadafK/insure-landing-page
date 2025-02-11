export default function Hero() {
  const cardData = [
    {
      url: "/icon-snappy-process.svg",
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      url: "/icon-affordable-prices.svg",
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      url: "/icon-people-first.svg",
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
    },
  ];
  return (
    <>
      {/* hero section */}
      <section className="relative">
        <img className="w-[100%] md:absolute md:w-1/2 md:right-0 md:z-1 md:h-full xl:hidden" src="/image-intro-mobile.jpg" alt="intro image" />
        <img className="hidden xl:block absolute z-1 right-[10%] top-[20%]" src="image-intro-desktop.jpg" alt="" />
        <img
            className="absolute top-[47.5%] left-0 z-1 md:top-0 xl:hidden"
            src="/bg-pattern-intro-left-mobile.svg"
            alt=""
          />
        <img className="hidden xl:block absolute -bottom-[50%] left-0 z-1"
        src="bg-pattern-intro-left-desktop.svg" alt="" />
        <div className="bg-[#2d2640] text-white flex flex-col gap-8 justify-center items-center px-7 py-24 text-center relative md:items-start md:text-left md:w-1/2 xl:w-full xl:h-[65vh] xl:pl-[10%]">
          <h1 className="text-[2.5rem] leading-none font-dmSerif min-[375px]:text-[2.75rem] xl:w-[30%] xl:leading-none xl:text-[3rem] xl:before:absolute xl:before:top-[20%] xl:before:left-[15%] xl:before:w-[10%] xl:before:h-[1px] xl:before:bg-slate-400 xl:before:-translate-x-1/2 xl:before:z-2">
            Humanizing your insurance.
          </h1>
          <p className="xl:w-[40%] ">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="border-1 px-4 py-2 text-sm">View Plans</button>
        </div>
          <img
            className="absolute -bottom-48 right-0 md:left-[20%] md:rotate-90 md:-bottom-[20%] lg:left-[30%] lg:-bottom-[22%] xl:hidden"
            src="/bg-pattern-intro-right-mobile.svg"
            alt=""
          />
          <img className="hidden xl:block absolute top-0 right-0 z-5" src="bg-pattern-intro-right-desktop.svg" alt="" />
      </section>
      {/* features section */}
      <section className="px-4 py-24 xl:py-46">
        <h2 className="text-[2.5rem] font-dmSerif relative text-center before:absolute before:top-0 before:left-1/2 before:w-1/2 before:h-[1px] before:bg-slate-400 before:-translate-x-1/2 py-4 xl:text-left xl:before:w-[10%] xl:before:left-[10%] xl:pl-[5%]">
          We&apos;re different
        </h2>
        <div className="flex flex-col gap-16 mt-16 mb-24 items-center text-center lg:flex-row  lg:justify-center lg:items-start xl:text-left xl:px-[5%] xl:gap-4">
          {cardData.map((card) => (
            <div className="px-4" key={card.title}>
              <img className="mx-auto xl:ml-0" src={card.url} alt={card.title} />
              <h3 className="text-[1.5rem] font-dmSerif my-8">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center bg-[#2d2640] text-white px-4 py-12 relative xl:flex-row xl:justify-around xl:items-center">
          <h3 className="text-[2.25rem] leading-none font-dmSerif mb-8 xl:mb-0">
            Find out more about how we work
          </h3>
          <button className="border-1 px-4 py-2 text-sm">HOW WE WORK</button>
          <img
            className="absolute bottom-0 right-0 h-full"
            src="/bg-pattern-intro-right-mobile.svg"
            alt=""
          />
        </div>
      </section>
    </>
  );
}
