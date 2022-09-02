import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Home() {
    return (
        <div class="flex h-screen bg-gray-900">
            <div class="m-auto">
                <h1 className="text-6xl text-white font-bold font-merriweather text-center">
                    Hello, World!
                </h1>
                <h1 className="text-6xl text-white font-bold font-merriweather leading-loose">
                    My name is Bara Kharseh.
                </h1>
                <div class="place-content-center flex space-x-20">
                    <a href="https://github.com/BaraKharseh" target="_blank" className="text-2xl text-white font-merriweather">
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/bara-kharseh-a146b521a" target="_blank" className="text-2xl text-white font-merriweather">
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a href="https://drive.google.com/file/d/19NweXjkQZWRDF__YmRn-sdNAVwrE8Nbd/view?usp=sharing" target="_blank" className="text-2xl text-white font-merriweather">
                        <FontAwesomeIcon icon={faFile} /> Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
