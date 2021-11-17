//Import Images
import atlantis2 from "./img/atlantis2.jpg";
import module2 from "./img/module2.jpg";
import blackbird2 from "./img/blackbird2.jpg";
import atlantis3 from "./img/atlantis3.jpg";
import module3 from "./img/module3.jfif";
import blackbird3 from "./img/blackbird3.jpg";

export const MovieState = () => {
  return [
    {
      title: "SR-71 Blackbird",
      mainImg: blackbird2,
      secondaryImg: blackbird3,
      url: "/work/blackbird",

      awards: [
        {
          title:
            "Long-range, high-altitude, Mach 3+ strategic reconnaissance aircraft:",
          description:
            "The SR-71 was developed as a black project from the Lockheed A-12 reconnaissance aircraft during the 1960s.",
        },
        {
          title:
            "“Everything had to be invented. Everything,” -Kelly Johnson: Engineer, Head Designer",
          description:
            "Surfaces had to be redesigned to avoid reflecting radar signals, and a radar-absorbing element was added to the black paint.",
        },
        {
          title: "The speed of the new aircraft was to exceed 2,000 mph. ",
          description:
            "The shape of the SR-71 was based on that of the A-12, one of the first aircraft to be designed with a reduced radar cross-section.",
        },
      ],
    },

    {
      title: "Apollo Lunar Module",
      mainImg: module2,
      secondaryImg: module3,
      url: "/work/module",
      awards: [
        {
          title: "Apollo 11 Lunar Module LM “Eagle”",
          description:
            "The Lunar Lander spacecraft was flown between lunar orbit and the Moon's surface.",
        },
        {
          title:
            "Commander Neil A. Armstrong and LM pilot Edwin E. “Buzz” Aldrin, Jr",
          description:
            "The “LM Eagle” Lunar Lander carried two astronauts, the first two men to walk on the Moon in July of 1969.",
        },
        {
          title:
            "Also included on the LM was the Early Apollo Scientific Experiment Package (EASEP)",
          description:
            "It consisted of several self-contained experiments to be deployed and left on the lunar surface, with other sample collection apparati.",
        },
      ],
    },

    {
      title: "Space Shuttle Atlantis",
      mainImg: atlantis2,
      secondaryImg: atlantis3,
      url: "/work/spaceshuttle",
      awards: [
        {
          title: "Space Shuttle Atlantis (Orbiter Vehicle Designation: OV‑104)",
          description:
            "Atlantis is the fourth operational and the second-to-last Space Shuttle built. It flew from October, 1985 to July, 2011.",
        },
        {
          title:
            "Atlantis retired after traveling nearly 126,000,000 mi (203,000,000 km)",
          description:
            "The vessle had orbited the Earth a total of 4,848 times, or more than 525 times the distance from the Earth to the Moon.",
        },
        {
          title:
            "Space Shuttle Atlantis is named after the oecean-going RV Atlantis",
          description:
            "A two-masted sailing ship operated as the primary research vessel for the Woods Hole Oceanographic Institution from 1930 to 1966.",
        },
      ],
    },
  ];
};
