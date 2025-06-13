import React from 'react';

const SocialMedia = () => {
  return (
    <div className='bg-black'>
      <div className='text-white text-5xl text-center font-bold p-8'>
        Connect with our community
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[80px] p-8 w-full'>

        {/* Youtube Card */}
        <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:border-2 flex flex-col justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] shadow-[0px_10px_20px_0px_#FBE4E0] w-[250px] h-[250px] md:w-[283px] md:h-[266px] p-5 shadow-inner">
          <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white text-white">
            750K+
          </p>
          <div className="flex gap-x-2 items-center">
            <span className="group-hover:text-white text-[16px] text-white">Youtube</span>
            <svg
              className="fill-[#FF0000] dark:group-hover:fill-[#FF0000] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.4 14.403L17.147 10.3651L10.4 6.3272V14.403ZM25.428 3.86409C25.597 4.49669 25.714 5.34465 25.792 6.42142C25.883 7.49819 25.922 8.4269 25.922 9.23448L26 10.3651C26 13.3127 25.792 15.4797 25.428 16.8661C25.103 18.0774 24.349 18.8581 23.179 19.1946C22.568 19.3696 21.45 19.4907 19.734 19.5715C18.044 19.6657 16.497 19.706 15.067 19.706L13 19.7868C7.553 19.7868 4.16 19.5715 2.821 19.1946C1.651 18.8581 0.897 18.0774 0.572 16.8661C0.403 16.2335 0.286 15.3855 0.208 14.3087C0.117 13.232 0.0779999 12.3033 0.0779999 11.4957L0 10.3651C0 7.41743 0.208 5.25043 0.572 3.86409C0.897 2.65273 1.651 1.87207 2.821 1.53558C3.432 1.36061 4.55 1.23947 6.266 1.15871C7.956 1.0645 9.503 1.02412 10.933 1.02412L13 0.943359C18.447 0.943359 21.84 1.15871 23.179 1.53558C24.349 1.87207 25.103 2.65273 25.428 3.86409Z"></path>
            </svg>
          </div>
        </div>

        {/* Instagram Card */}
        <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:border-2 flex flex-col justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] shadow-[0px_10px_20px_0px_#FBE4E0] w-[250px] h-[250px] md:w-[283px] md:h-[266px] p-5 shadow-inner">
          <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white text-white">
            1M+
          </p>
          <div className="flex gap-x-2 items-center">
            <span className="group-hover:text-white text-[16px] text-white">Instagram</span>
            <svg
              className="fill-[#E4405F] dark:group-hover:fill-[#E4405F] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.5 0C20.6421 0 24 3.35786 24 7.5C24 11.6421 20.6421 15 16.5 15C12.3579 15 9 11.6421 9 7.5C9 3.35786 12.3579 0 16.5 0ZM0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15C3.35786 15 0 11.6421 0 7.5Z"></path>
            </svg>
          </div>
        </div>

        {/* Twitter Card */}
        <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:border-2 flex flex-col justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] shadow-[0px_10px_20px_0px_#FBE4E0] w-[250px] h-[250px] md:w-[283px] md:h-[266px] p-5 shadow-inner">
          <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white text-white">
            500K+
          </p>
          <div className="flex gap-x-2 items-center">
            <span className="group-hover:text-white text-[16px] text-white">Twitter</span>
            <svg
              className="fill-[#1DA1F2] dark:group-hover:fill-[#1DA1F2] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.46 6.01C22.46 6.01 22.16 7.72 20.76 9.02C19.92 9.74 18.92 9.44 17.91 8.82C17.11 8.29 16.55 7.4 16.46 6.29C15.55 6.65 14.47 7.48 13.89 8.7C13.44 9.68 13.39 10.86 13.79 11.85C12.65 11.81 11.45 11.37 10.53 10.57C9.63 9.8 9.29 8.63 9.58 7.75C9.99 6.89 10.96 6.4 11.93 6.46C13.31 6.56 14.51 7.14 15.31 8.01C15.93 7.83 16.7 7.31 16.84 6.57C17.45 5.68 18.37 4.92 19.35 4.92C20.47 4.92 21.42 5.86 21.92 7.12C22.2 7.45 22.34 7.85 22.46 8.18C22.46 7.44 22.46 6.1 22.46 6.01Z"></path>
            </svg>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="z-30 group transition-all ease-in-out duration-200 cursor-pointer hover:border-2 flex flex-col justify-center items-center rounded-xl bg-white dark:bg-[#3d3d3d73] dark:shadow-none md:shadow-[0px_40px_80px_0px_#FBE4E0] shadow-[0px_10px_20px_0px_#FBE4E0] w-[250px] h-[250px] md:w-[283px] md:h-[266px] p-5 shadow-inner">
          <p className="md:text-[50px] text-[28px] xs:text-[26px] font-bold group-hover:text-white text-white">
            350K+
          </p>
          <div className="flex gap-x-2 items-center">
            <span className="group-hover:text-white text-[16px] text-white">LinkedIn</span>
            <svg
              className="fill-[#0077B5] dark:group-hover:fill-[#0077B5] group-hover:fill-white md:w-[24px] md:h-[20px] w-[14px] h-[10px]"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.1 0C5.2 0 4 1.4 4 2.8C4 4.2 5.2 5.6 7.1 5.6C9 5.6 10.2 4.2 10.2 2.8C10.2 1.4 9 0 7.1 0ZM5.3 5.6C5.3 4.6 6 4 7.1 4C8.2 4 8.9 4.6 8.9 5.6C8.9 6.6 8.2 7.2 7.1 7.2C6 7.2 5.3 6.6 5.3 5.6ZM7.1 8.3C5.6 8.3 2 8.6 2 10.1V16H12V10.1C12 8.6 8.4 8.3 7.1 8.3Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
