export type HomeContent = {
  heroTitle: string;
  heroBody: string;
  introTitle: string;
  introBodyOne: string;
  introBodyTwo: string;
  newsletterTitle: string;
  newsletterBody: string;
};

export const defaultHomeContent: HomeContent = {
  heroTitle: "Empowering, Liberating and Transforming lives.",
  heroBody:
    "Creating opportunities for children, girls, young people, women, persons with disabilities and vulnerable communities to learn, grow, participate and shape their own future.",
  introTitle: "Who we are.",
  introBodyOne:
    "Edmund Rice Eldoret Empowerment Program (EREEP) is a community-based organisation working with children, girls, youth, women, persons with disabilities and other vulnerable groups in Langas and the surrounding communities of Eldoret.",
  introBodyTwo:
    "EREEP creates opportunities for people to learn, grow, participate and take an active role in shaping their own lives and communities. Through learning opportunities, mentorship, skills development, awareness and community support, EREEP empowers people to build their capacity, exercise their rights and contribute to positive and lasting change.",
  newsletterTitle:
    "Stories, learning and opportunities — straight to your inbox.",
  newsletterBody:
    "Stay connected to the people, programmes and community action shaping positive change in Langas.",
};

export async function getHomeContent(): Promise<HomeContent> {
  return defaultHomeContent;
}
