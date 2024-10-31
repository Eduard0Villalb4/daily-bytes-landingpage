const TermsAndCondition = () => {

  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen w-screen bg-[#1d1f27]">
      <header className="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700 z-20">
        <nav className="flex items-center">
          <div className='z-20'>          
            <h2 className="text-white font-semibold">Daily Bytes</h2>
          </div>
        </nav>
        <div className=" lg:flex">
        <a
            className="px-4 py-3 bg-[#008cba]  hover:bg-[#008cba] hover:cursor-pointer text-white font-medium rounded-md mx-1 z-20"
            href="mailto:eduard0.villalb4.com"
          >
            Contact support
          </a>
        </div>

      </header>
      <section
        id="aboutSection"
        className="p-12 relative"
      >
        <div>

        <h2>Terms and Conditions of Use for DailyBytes</h2>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By using the <strong>DailyBytes</strong> app, you agree to be bound by these Terms of Use. If you do not agree with these terms, you should not use the app.
          </p>
          <h3>2. Changes to the Terms</h3>
          <p>
            We reserve the right to modify these Terms of Use at any time. Any significant changes will be communicated through the app. Your continued use of the app after any modifications indicates your acceptance of the updated terms.
          </p>
          <h3>3. Description of the Service</h3>
          <p>
            <strong>DailyBytes</strong> is an app designed to help users create and manage habits. All data and content generated by the user is stored locally on the user's device, and no server connection is required to use the app.
          </p>
          <h3>4. Use of the App</h3>
          <p>
            - <strong>Limited License</strong>: We grant you a limited, non-exclusive, non-transferable, and revocable license to use the app in accordance with these terms.<br />
            - <strong>Restrictions</strong>: The app operates locally and does not allow interaction with external servers or the upload of content to the internet.
          </p>
          <h3>5. Intellectual Property</h3>
          <p>
            The source code of the <strong>DailyBytes</strong> app is the exclusive property of <strong>EduDevWeb</strong>. Copying, modifying, distributing, or using the source code without prior written consent from the owner is prohibited.
          </p>
          <h3>6. Privacy</h3>
          <p>
            <strong>DailyBytes</strong> does not collect any personal data from users. All information such as habit names and streaks is stored locally on the user’s device. No third-party tools are used to manage or process user data.
          </p>
          <h3>7. Limitation of Liability</h3>
          <p>
            <strong>DailyBytes</strong> is provided "as is." We do not guarantee that the app will be free of errors or interruptions. To the maximum extent permitted by law, we are not liable for any direct or indirect damages resulting from the use of the app, including issues related to functionality.
          </p>
          <h3>8. Termination</h3>
          <p>
            There are no user accounts in the app. All data is stored locally on the device and will be deleted if the user uninstalls the app.
          </p>
          <h3>9. Contact</h3>
          <p>
            If you have any questions or concerns about these Terms of Use, you can contact us at <strong>Eduard0.VIllalb4@gmail.com</strong>.
          </p>
        </div>
      </section>


      <footer className="py-8 px-4 md:px-8 lg:py-16 2xl:px-60 mx-auto relative">
        <div className="grid grid-cols-12 gap-8 text-slate-500 py-16">
          <div className="col-span-4 xl:col-span-4">
            <span className='font-semibold'>Daily Bytes</span>
            <div className='flex space-x-16'>
              <ul>
                <li className="py-3">
                  <a className='text-[#008cba]' href="./terms-and-conditions">Terms and Conditions</a>
                </li>
                <li className="py-3">
                  <a className='text-[#008cba]' href="./privacy-policy">Privacy Policy</a>
                </li>
              </ul>
              <ul>
                <li className="py-3">
                  <a className='text-[#008cba]' href="mailto:eduard0.villalb4.com">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flexRow text-gray-400">
          <div className="flex items-center mb-2">
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:eduard0.villalb4.com"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                alt="Email"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tiktok-round-white-icon.png"
                alt="Tiktok"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="./assets/icons/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>
          <p className="text-center">Made with 💗 & lots of ☕ by @Eduard0.Villalb4</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndCondition;