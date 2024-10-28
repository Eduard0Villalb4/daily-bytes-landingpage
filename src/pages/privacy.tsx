import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-y-scroll overflow-x-hidden h-screen w-screen bg-[#1d1f27]">
      <header className="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700 z-20">
        <nav className="flex items-center">
          <div className='z-20'>          
            <h2 className="text-white font-semibold">Daily Bytes</h2>
          </div>
        </nav>
        <div className=" lg:flex">
          <button
            onClick={() => navigate('./contact')}
            className="px-4 py-3 bg-[#008cba]  hover:bg-[#008cba] hover:cursor-pointer text-white font-medium rounded-md mx-1 z-20"
          >
            Contact support
          </button>
        </div>

      </header>

      <section id="privacyPolicySection" className="p-12 relative">
        <div>
        <h2>Privacy Policy for DailyBytes</h2>
          <p>
            At <strong>DailyBytes</strong>, we respect your privacy. We do not collect, store, or share any personal information. All data, such as habit names and streaks, is stored locally on your device.
          </p>
          <h3>1. Information Collected</h3>
          <p>
            We do not collect any personal information. All user-generated data remains on the device where the app is used.
          </p>
          <h3>2. Use of Information</h3>
          <p>
            Since we do not collect any information, we do not use or share personal data with third parties.
          </p>
          <h3>3. Data Storage</h3>
          <p>
            All information you enter into the app, such as habits and streaks, is stored locally on your device. There are no external servers involved.
          </p>
          <h3>4. Security</h3>
          <p>
            The security of your data depends on the device you use. Please ensure that your device is secure, as all data resides locally on it.
          </p>
          <h3>5. Contact</h3>
          <p>
            If you have any questions about this privacy policy, you can contact us at <strong>Eduard0.VIllalb4@gmail.com</strong>.
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

export default PrivacyPolicy;
