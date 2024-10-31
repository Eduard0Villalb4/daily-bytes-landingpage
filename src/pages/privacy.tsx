const PrivacyPolicy = () => {
  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen w-screen bg-[#1d1f27]">
      <header className="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700 z-20">
        <nav className="flex items-center">
          <div className='z-20 flex flex-row items-center justify-center'>      
            <img className="h-8 mr-2" src="icon.png" alt="" />    
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

      <section id="privacyPolicySection" className="p-12 relative">
        <div>
          <h2 className='font-bold text-xl mb-6'>Privacy Policy for Daily Bytes</h2>
          <p className='mb-2'>At <strong>Daily Bytes</strong>, we respect your privacy and are committed to protecting it. This policy explains how we handle and process any data in our app.</p>

          <h3 className='font-semibold text-lg'>1. Information Collected</h3>
          <p className='mb-2'>Daily Bytes does not collect, access, or share any personal, sensitive, or behavioral user information. All user-generated data, such as habit names and streaks, is stored solely on the user’s device and remains there. No external servers or third-party services are involved in data processing.</p>

          <h3 className='font-semibold text-lg'>2. Use of Information</h3>
          <p className='mb-2'>Since we do not collect any personal information or user data, there is no usage or sharing of data with third parties. Daily Bytes is designed to function entirely on your device, with no data being sent, collected, or used outside of the app itself.</p>

          <h3 className='font-semibold text-lg'>3. Data Storage and Retention</h3>
          <p className='mb-2'>All information you enter, such as habits and streaks, is stored locally on your device. This means that your data remains accessible only to you, within the app, and cannot be accessed by us or any third party. The data is deleted automatically if you choose to uninstall the app, ensuring that no trace of your information remains once the app is removed.</p>

          <h3 className='font-semibold text-lg'>4. Security</h3>
          <p className='mb-2'>The security of your data depends on the security of the device you use. To maintain your data privacy, we recommend using device-level security settings, such as password protection or biometric authentication, to prevent unauthorized access to the app and your locally stored data.</p>

          <h3 className='font-semibold text-lg'>5. Contact Information</h3>
          <p className='mb-2'>If you have any questions or concerns regarding this privacy policy, please contact us at <a href="mailto:Eduard0.Villalb4@gmail.com">Eduard0.Villalb4@gmail.com</a>.</p>
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

export default PrivacyPolicy;
