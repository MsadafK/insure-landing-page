export default function Footer() {
  const footerData = [
    {
      title: "About",
      links: ["How We Work", "Why Insure?", "Check Price", "Reviews"],
    },
    {
      title: "Help Me",
      links: ["FAQ", "Terms of Use", "Privacy Policy", "Cookies"],
    },
    {
      title: "Contact",
      links: ["Sales", "Support", "Live Chat"],
    },
    {
      title: "Others",
      links: ["Careers", "Press", "Licenses"],
    },
  ];
  return (
    <footer>
      <div className="flex flex-col gap-8 items-center pt-16 pb-12 relative after:absolute after:bottom-0 after:left-[5%] after:w-[90%] after:h-[2px] after:bg-gray-300 xl:flex-row xl:justify-between xl:px-[5%]">
        <img src="./logo.svg" alt="" />
        <div className="flex gap-4">
          <img src="./icon-facebook.svg" alt="" />
          <img src="icon-twitter.svg" alt="" />
          <img src="icon-pinterest.svg" alt="" />
          <img src="icon-instagram.svg" alt="" />
        </div>
        <img
          className="absolute top-0 left-0"
          src="./bg-pattern-footer-mobile.svg"
          alt=""
        />
      </div>
      <div>
        <ul className="flex flex-col gap-8 items-center py-12 text-center lg:flex-row lg:justify-between lg:items-start lg:gap-16 lg:text-left lg:mx-[10%]">
          {footerData.map((footer) => (
            <li key={footer.title}>
              <h4 className="text-[1.1rem] text-gray-400 mb-4">
                {footer.title}
              </h4>
              <ul className="flex flex-col gap-2 items-center lg:items-start">
                {footer.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
