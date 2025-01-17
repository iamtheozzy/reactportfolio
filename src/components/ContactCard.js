import React from 'react';

function ContactCard() {
    return (
        <div className="mx-8 md:ml-20 lg:ml-20 md:mr-20 lg:mr-20 md:mb-20 lg:mb-20 md:p-20 lg:p-20 lg:-mt-14">
            {/* <!-- ====== Contact Section Start --> */}
            <section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
            <div className="container">
                <div className="flex flex-wrap lg:justify-between -mx-4">
                    <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
                        <div className="max-w-[570px] mb-12 lg:mb-0">
                        <h1 className="text-4xl tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">  
                            <span className="mt-2 block text-green-400 sm:text-5xl md:text-5xl lg:text-6xl"> Interested in contact?</span>
                        </h1>
                        <h2
                            className="
                            opacity-70
                            text-dark
                            mb-6
                            text-[32px]
                            sm:text-[40px]
                            lg:text-[36px]
                            xl:text-[40px]
                            "
                            >
                            Get in touch with me now!
                        </h2>
                        <p className="font-thin text-base text-body-color leading-relaxed mb-9">
                            If you are interested in collaborating on any projects, or if you are an employer looking to hire, please reach out to me via any of the options below.
                        </p>
                        <div className="flex mb-8 max-w-[370px] w-full">
                            <div
                                className="
                                max-w-[60px]
                                sm:max-w-[70px]
                                w-full
                                h-[60px]
                                sm:h-[70px]
                                flex
                                items-center
                                justify-center
                                mr-6
                                overflow-hidden
                                bg-primary bg-opacity-5
                                text-primary
                                rounded
                                "
                                >
                                <svg
                                    width="24"
                                    height="26"
                                    viewBox="0 0 24 26"
                                    className="fill-current"
                                    >
                                    <path
                                    d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z"
                                    />
                                    <path
                                    d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z"
                                    />
                                    <path
                                    d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z"
                                    />
                                </svg>
                            </div>
                            <div className="w-full">
                                <h4 className="text-dark text-xl mb-1">Phone Number</h4>
                                <p className="text-base text-body-color">+17737065634</p>
                            </div>
                        </div>
                        <div className="flex mb-8 max-w-[370px] w-full">
                            <div
                                className="
                                max-w-[60px]
                                sm:max-w-[70px]
                                w-full
                                h-[60px]
                                sm:h-[70px]
                                flex
                                items-center
                                justify-center
                                mr-6
                                overflow-hidden
                                bg-primary bg-opacity-5
                                text-primary
                                rounded
                                "
                                >
                                <svg
                                    width="28"
                                    height="19"
                                    viewBox="0 0 28 19"
                                    className="fill-current"
                                    >
                                    <path
                                    d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                                    />
                                </svg>
                            </div>
                            <div className="w-full">
                                <h4 className="text-dark text-xl mb-1">
                                    Email Address
                                </h4>
                                <p className="text-base text-body-color">cristian.v0223@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex mb-8 max-w-[370px] w-full">
                            <div
                                className="
                                max-w-[60px]
                                sm:max-w-[70px]
                                w-full
                                h-[60px]
                                sm:h-[70px]
                                flex
                                items-center
                                justify-center
                                mr-6
                                overflow-hidden
                                bg-primary bg-opacity-5
                                text-primary
                                rounded
                                "
                                >
                                <a rel="noreferrer" href="https://www.github.com/vcristian1" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="w-full">
                                <h4 className="text-dark text-xl mb-1">
                                    Github
                                </h4>
                                <p className="text-base text-body-color"></p>
                            </div>
                        </div>
                        <div className="flex mb-8 max-w-[370px] w-full">
                            <div
                                className="
                                max-w-[60px]
                                sm:max-w-[70px]
                                w-full
                                h-[60px]
                                sm:h-[70px]
                                flex
                                items-center
                                justify-center
                                mr-6
                                overflow-hidden
                                bg-primary bg-opacity-5
                                text-primary
                                rounded
                                "
                                >
                                <a rel="noreferrer" href="https://www.linkedin.com/in/cristian-vargas-13686a1a3/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                </svg>
                                </a>
                            </div>
                            <div className="w-full">
                                <h4 className="text-dark text-xl mb-1">
                                    LinkedIn
                                </h4>
                                <p className="text-base text-body-color"></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                        <div className="bg-white relative rounded-lg p-8 sm:p-12">

                        </div>
                    </div>
                </div>
            </div>
    
            </section>
        </div>
    )
}

export default ContactCard;