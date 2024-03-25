import { PiSpotifyLogo } from "react-icons/pi";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Socials() {
  return (
    <section className="bg-white dark:bg-gray-800" id="discover">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 pb-8 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Découvrez moi
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Retrouvez toutes mes compositions et mes dernières actualités sur mes
          différents réseaux sociaux
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.youtube.com/channel/UCJFYb0aw92a6jNOIn7pz_Qg"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-500/60 dark:focus:ring-gray-800"
          >
            <AiOutlineYoutube className="text-2xl" />
            <h3 className="px-2">YouTube</h3>
          </a>
          <a
            href="#"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500/60 dark:focus:ring-gray-800"
          >
            <AiOutlineFacebook className="text-2xl" />
            <h3 className="px-2">Facebook</h3>
          </a>
          <a
            href="https://www.instagram.com/_marie_ness_"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-orange-500/70 dark:focus:ring-gray-800"
          >
            <AiOutlineInstagram className="text-2xl" />
            <h3 className="px-2">Instagram</h3>
          </a>
          <a
            href="https://open.spotify.com/intl-fr/artist/20E46Kk1xblomlcKtd4riI"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-green-500/60 dark:focus:ring-gray-800"
          >
            <PiSpotifyLogo className="text-2xl" />
            <h3 className="px-2">Spotify</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
