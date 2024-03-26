/* eslint-disable react/no-unescaped-entities */
import { PiSpotifyLogo } from "react-icons/pi";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Disco() {
  return (
    <div className="dark:bg-gray-800 p-10 text-white" id="discography">
      <h1 className="text-center mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white pb-6">
        Discographie
      </h1>
      <div className="mt-10 ">
        <div className="flex text-gray-400 pr-12">
          <div className="p-3 w-full">Jaquette</div>
          <div className="p-3 w-full">Titre</div>
          <div className="hidden lg:flex p-3 w-full">Album</div>
          <div className="hidden md:flex p-3 w-full">Durée</div>
          <div className="p-3 w-12 flex-shrink-0 text-right">Écouter</div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-700 rounded-lg pr-12 text-lg items-center">
          <div className="p-3 w-full">
            <img src="./albums/1.png" alt="Album Marie Ness" className="w-12" />
          </div>
          <div className="p-3 w-full">Tango d'étoiles</div>
          <div className="hidden lg:flex p-3 w-full">L'envol</div>
          <div className="hidden md:flex p-3 w-full">3:31</div>
          <div className="flex p-3 w-12">
            <a
              href="https://open.spotify.com/intl-fr/track/7oYYzFbqDRzkTjCjYLaDzy"
              target="_blank"
            >
              <PiSpotifyLogo className="text-4xl hover:text-green-500" />
            </a>
            <a href="https://www.youtube.com/watch?v=DUttg17LlfI">
              <AiOutlineYoutube className="text-4xl hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-700 rounded-lg pr-12 text-lg items-center">
          <div className="p-3 w-full">
            <img src="./albums/2.png" alt="Album Marie Ness" className="w-12" />
          </div>
          <div className="p-3 w-full">Douze</div>
          <div className="hidden lg:flex p-3 w-full">Moments suspendus</div>
          <div className="hidden md:flex p-3 w-full">3:38</div>
          <div className="flex p-3 w-12">
            <a
              href="https://open.spotify.com/intl-fr/track/2h5mEtxvOFe3Ajl3NzxFlA"
              target="_blank"
            >
              <PiSpotifyLogo className="text-4xl hover:text-green-500" />
            </a>
            <a href="https://www.youtube.com/watch?v=fNyS27LMSwo">
              <AiOutlineYoutube className="text-4xl hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-700 rounded-lg pr-12 text-lg items-center">
          <div className="p-3 w-full">
            <img src="./albums/3.png" alt="Album Marie Ness" className="w-12" />
          </div>
          <div className="p-3 w-full">Répondeur</div>
          <div className="hidden lg:flex p-3 w-full">L'instant d'après</div>
          <div className="hidden md:flex p-3 w-full">2:48</div>
          <div className="flex p-3 w-12">
            <a
              href="https://open.spotify.com/intl-fr/album/5nDp2EnmC3zGqQxqz0nWSS"
              target="_blank"
            >
              <PiSpotifyLogo className="text-4xl hover:text-green-500" />
            </a>
            <a href="https://open.spotify.com/intl-fr/album/5nDp2EnmC3zGqQxqz0nWSS">
              <AiOutlineYoutube className="text-4xl hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-700 rounded-lg pr-12 text-lg items-center">
          <div className="p-3 w-full">
            <img src="./albums/1.png" alt="Album Marie Ness" className="w-12" />
          </div>
          <div className="p-3 w-full">A Toi</div>
          <div className="hidden lg:flex p-3 w-full">L'envol</div>
          <div className="hidden md:flex p-3 w-full">4:04</div>
          <div className="flex p-3 w-12">
            <a
              href="https://open.spotify.com/intl-fr/track/6JQYj7bQwV5z9wxi0BYMsf"
              target="_blank"
            >
              <PiSpotifyLogo className="text-4xl hover:text-green-500" />
            </a>
            <a href="https://www.youtube.com/watch?v=t0wv_7dx5UA">
              <AiOutlineYoutube className="text-4xl hover:text-red-500" />
            </a>
          </div>
        </div>
        <div className="flex border-b border-gray-800 hover:bg-gray-700 rounded-lg pr-12 text-lg items-center">
          <div className="p-3 w-full">
            <img src="./albums/3.png" alt="Album Marie Ness" className="w-12" />
          </div>
          <div className="p-3 w-full">Piano</div>
          <div className="hidden lg:flex p-3 w-full">L'instant d'après</div>
          <div className="hidden md:flex p-3 w-full">2:46</div>
          <div className="flex p-3 w-12">
            <a
              href="https://open.spotify.com/intl-fr/track/0VTfLaxWg5qzehZPvDBZlL"
              target="_blank"
            >
              <PiSpotifyLogo className="text-4xl hover:text-green-500" />
            </a>
            <a href="https://www.youtube.com/watch?v=CZ8aha2SAbA">
              <AiOutlineYoutube className="text-4xl hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
