import { NextPage } from 'next'

const Profile: NextPage = () => {
    return (
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mobile-bg:w-8 mobile-bg:h-8" viewBox="0 0 22 24" fill="none" data-src="/_next/static/images/user.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path className="text-main fill-current" fillRule="evenodd" clipRule="evenodd" d="M21.2325 20.2266C21.2325 20.7712 21.5025 22.503 20.7496 23.25C20.7521 23.2511 18.4996 24 10.9996 24C3.49665 24 1.22621 23.25 1.24965 23.25C0.499645 22.4942 0.766832 20.7712 0.766832 20.2266C0.766832 18 3.72127 15.0073 6.68715 14.25C7.52208 14.0449 8.00546 13.0781 7.43715 12.75C5.98233 11.9981 5.22052 8.50181 5.22052 6C5.22052 2.16806 8.36565 0 11.3281 0C14.2888 0 17.2205 2.169 17.2205 6C17.2205 8.38725 16.4797 11.9651 14.9705 12.75C14.3538 13.1023 14.972 14.0252 15.7205 14.25C18.7381 15.0116 21.2325 18.0469 21.2325 20.2266ZM19.7413 21.9469C19.3325 22.0238 18.9219 22.0875 18.5075 22.1362C17.5438 22.2525 16.5763 22.335 15.6069 22.3856C14.0731 22.4662 12.5356 22.5037 11 22.5C9.46627 22.5037 7.93439 22.4662 6.40439 22.3856C5.43314 22.3369 4.46565 22.2544 3.5019 22.1381C3.08565 22.0894 2.67127 22.0256 2.26065 21.9487C2.2494 21.885 2.2419 21.8194 2.23627 21.7556C2.22502 21.6281 2.2194 21.5006 2.22127 21.3713C2.22315 21.1481 2.23064 20.925 2.24564 20.7019C2.25689 20.55 2.26439 20.3981 2.26627 20.2444C2.26814 20.0925 2.29065 19.9406 2.33565 19.7944C2.3994 19.5788 2.48564 19.3706 2.59439 19.1737C2.72752 18.9263 2.8794 18.69 3.05002 18.4669C3.24502 18.2119 3.45502 17.97 3.68002 17.7431C4.16377 17.2556 4.70377 16.8281 5.29065 16.4719C5.57752 16.2956 5.87564 16.1419 6.18314 16.0069C6.46627 15.8831 6.75877 15.7819 7.0569 15.7031C7.62502 15.5606 8.13502 15.2512 8.52315 14.8144C8.70877 14.6081 8.86065 14.3756 8.97502 14.1225C9.10627 13.8337 9.17752 13.5206 9.18315 13.2037C9.18877 12.8587 9.10439 12.5175 8.93939 12.2137C8.75564 11.8837 8.48377 11.6119 8.1519 11.4319C8.10877 11.4094 8.0694 11.3794 8.03752 11.3419C7.93815 11.2331 7.8519 11.1131 7.77877 10.9856C7.66815 10.7925 7.57065 10.5938 7.49002 10.3875C7.38877 10.1344 7.30065 9.87937 7.22565 9.61875C7.05502 9.0225 6.9294 8.41688 6.84877 7.80375C6.7644 7.20375 6.72315 6.6 6.72127 5.99625C6.7194 5.64563 6.75502 5.29688 6.82815 4.95563C6.89377 4.65188 6.99127 4.35562 7.12065 4.0725C7.3644 3.54562 7.7169 3.07313 8.15377 2.69063C8.59065 2.30625 9.0969 2.00625 9.6444 1.80562C10.1825 1.605 10.7544 1.50188 11.33 1.5C11.8888 1.5 12.4438 1.60125 12.965 1.80187C13.4844 1.99687 13.9588 2.28938 14.3656 2.66438C14.7819 3.05063 15.1138 3.51937 15.3388 4.04062C15.4625 4.3275 15.5563 4.6275 15.6181 4.935C15.6875 5.28375 15.7213 5.64 15.7213 5.99437C15.7175 6.58125 15.6763 7.16813 15.5956 7.74938C15.515 8.3625 15.3894 8.97 15.2188 9.56437C15.1438 9.82875 15.0538 10.0875 14.9525 10.3444C14.8681 10.5544 14.7706 10.7587 14.6563 10.9556C14.5813 11.0887 14.4894 11.2144 14.3863 11.3287C14.3488 11.37 14.3056 11.4037 14.2569 11.43C13.9381 11.6025 13.6719 11.8594 13.4863 12.1688C13.3063 12.4781 13.2125 12.8325 13.2181 13.1906C13.2256 13.5262 13.3081 13.8562 13.46 14.1562C13.5781 14.3962 13.7319 14.6175 13.9138 14.8144C14.2925 15.2325 14.78 15.5363 15.32 15.6956C15.6256 15.7725 15.9219 15.8737 16.2069 16.0031C16.4956 16.1325 16.7731 16.2844 17.0394 16.4569C17.5756 16.8056 18.0631 17.2237 18.4869 17.7038C18.6875 17.9269 18.8713 18.165 19.04 18.4163C19.19 18.6394 19.3231 18.8756 19.4394 19.1194C19.535 19.3237 19.6119 19.5356 19.6681 19.7531C19.7094 19.9125 19.7319 20.0775 19.7319 20.2425C19.7356 20.4 19.7413 20.5556 19.7544 20.7113C19.7694 20.9306 19.7769 21.1556 19.7788 21.3806C19.7806 21.5081 19.775 21.6356 19.7638 21.7631C19.7581 21.825 19.7506 21.885 19.7413 21.9469Z" fill="#323232"></path>
            </svg>
        </div>
    
    )
}

export default Profile