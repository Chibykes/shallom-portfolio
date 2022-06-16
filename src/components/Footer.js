function Footer() {
  return (
    <footer className="lg:p-20 lg:pb-10 p-8 pt-12 bg-main-black lg:space-y-12 space-y-5">

            <div className="lg:py-20 py-8 border-t border-b border-white">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                    <div className="col-span-1">
                        <p className="font-[Lato] font-semibold lg:text-4xl text-2xl text-white lg:leading-tight py-5">
                            Let's work together to <br/> create something 
                            <span className="text-main-yellow"> amazing.</span>
                        </p>
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white lg:font-semibold font-normal underline" href="mailto:hello@shallomisaiah.com">Email: hello@shallomisaiah.com</a>
                    </div>

                    <div className="col-span-1 grid lg:grid-cols-3 grid-cols-1 gap-5">
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white hover:text-main-yellow lg:font-semibold font-normal underline" href="https://dribbble.com/ShallomIsaiah/about">
                            Dribbble
                        </a>
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white hover:text-main-yellow lg:font-semibold font-normal underline" href="https://www.behance.net/Shallomisaiah">
                            Behance
                        </a>
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white hover:text-main-yellow lg:font-semibold font-normal underline" href="https://www.linkedin.com/in/shallom-isaiah-7b014b228/">
                            LinkedIn
                        </a>
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white hover:text-main-yellow lg:font-semibold font-normal underline" href="https://twitter.com/Nkshally">
                            Twitter
                        </a>
                        <a className="font-[Montserrat] lg:text-lg text-sm text-white hover:text-main-yellow lg:font-semibold font-normal underline" href="https://medium.com/@shallomisaiah">
                            Medium
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-center text-zinc-600 font-[Montserrat] font-semibold">
                <strong className="">&copy; </strong>
                2022 Shallom Isaiah.
            </p>

        </footer>
  )
}

export default Footer