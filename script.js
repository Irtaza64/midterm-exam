const speakersData = [
    {
        name: "Yochai Benkler",
        title: "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
        bio: "Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.",
        image: "pic1.jpg"
    },
    {
        name: "Kilnam Chon",
        title: "",
        bio: "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012, he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame.",
        image: "pic2.jpeg"
    },
    {
        name: "SohYeong Noh",
        title: "Director of Art Centre Nabi and a board member of CC Korea",
        bio: "As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.",
        image: "pic3.jpg"
    },
    {
        name: "Julia Leda",
        title: "President of Young Pirates of Europe",
        bio: "European ingetration, political democracy and participation of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
        image: "pic4.jpeg"
    },
    {
        name: "Lila Tretikov",
        title: "Executive Director of the Wikimedia Foundation",
        bio: "Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.",
        image: "pic5.jpeg"
    },
    {
        name: "Ryan Merkley",
        title: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
        bio: "Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move-ment.",
        image: "pic6.avif"
    }
];

function createSpeakerElement(speaker) {
    const speakerElement = document.createElement('div');
    speakerElement.classList.add('speaker');

    speakerElement.innerHTML = `
        <div class="speaker-image">
            <img src="${speaker.image}" alt="${speaker.name}">
        </div>
        <div class="speaker-info">
            <h3>${speaker.name}</h3>
            <p class="speaker-title">${speaker.title}</p>
            <p class="speaker-bio">${speaker.bio}</p>
        </div>
    `;

    return speakerElement;
}

function populateSpeakers(showAll = false) {
    const speakersContainer = document.getElementById('speakers-container');
    speakersContainer.innerHTML = ''; // Clear existing speakers

    const speakersToShow = showAll ? speakersData : speakersData.slice(0, 2);

    speakersToShow.forEach(speaker => {
        const speakerElement = createSpeakerElement(speaker);
        speakersContainer.appendChild(speakerElement);
    });

    if (!showAll) {
        const seeMoreButton = document.createElement('button');
        seeMoreButton.textContent = 'See More';
        seeMoreButton.id = 'see-more-speakers';
        seeMoreButton.addEventListener('click', () => {
            populateSpeakers(true);
        });
        speakersContainer.appendChild(seeMoreButton);
    }
}

document.addEventListener('DOMContentLoaded', () => populateSpeakers(false));
